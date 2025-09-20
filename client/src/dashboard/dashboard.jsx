import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddProductDialog from './dialog/AddProductDialog';
import UpdateProduct from './dialog/UpdateProduct';
import DeleteProducts from './dialog/DeleteProducts';
import './dashboard.css';

const API_GET_URL = 'http://localhost:8000/api/products';
const API_POST_URL = 'http://localhost:8000/api/create';

function Products() {
  const [products, setProducts] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [form, setForm] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    stock: ''
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(API_GET_URL)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(API_POST_URL, form)
      .then(() => {
        setShowDialog(false);
        setForm({ name: '', image: '', description: '', price: '', stock: '' });
        fetchProducts();
      })
      .catch(alert => alert('Error adding product'));
  };

  const handleCancel = () => {
    setShowDialog(false);
    setForm({ name: '', image: '', description: '', price: '', stock: '' });
  };

  // Update handlers
  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setShowUpdate(true);
  };

  const handleUpdateSubmit = (updatedProduct) => {
    axios.patch(`http://localhost:8000/api/products/${updatedProduct.id}`, updatedProduct)
      .then(() => {
        setShowUpdate(false);
        setSelectedProduct(null);
        fetchProducts();
      })
      .catch(alert => alert('Error updating product'));
  };

  const handleUpdateCancel = () => {
    setShowUpdate(false);
    setSelectedProduct(null);
  };

  // Delete handlers
  const handleDelete = (product) => {
    setSelectedProduct(product);
    setShowDelete(true);
  };

  const handleDeleteConfirm = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(() => {
        setShowDelete(false);
        setSelectedProduct(null);
        fetchProducts();
      })
      .catch(alert => alert('Error deleting product'));
  };

  const handleDeleteCancel = () => {
    setShowDelete(false);
    setSelectedProduct(null);
  };

  return (
    <div className="products-container">
      <div className="name-and-add-btn"> 
        <h1> Vance's Products</h1>
      </div>
      <div className="table-container">
        <div className="btn"> 
          <button className="add-btn" onClick={() => setShowDialog(true)}>+ Add Product</button>
        </div>
        <table className="modern-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.image}</td>
                <td>{prod.description}</td>
                <td>{prod.price}</td>
                <td>{prod.stock}</td>
                <td>
                  <span
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                    title="Update"
                    onClick={() => handleUpdate(prod)}
                  >✏️</span>
                  <span
                    style={{ cursor: 'pointer', color: 'red' }}
                    title="Delete"
                    onClick={() => handleDelete(prod)}
                  >🗑️</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showDialog && (
        <AddProductDialog
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
      {showUpdate && selectedProduct && (
        <UpdateProduct
          product={selectedProduct}
          onUpdate={handleUpdateSubmit}
          onCancel={handleUpdateCancel}
        />
      )}
      {showDelete && selectedProduct && (
        <DeleteProducts
          product={selectedProduct}
          onDelete={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      )}
    </div>
  );
}
export default Products;