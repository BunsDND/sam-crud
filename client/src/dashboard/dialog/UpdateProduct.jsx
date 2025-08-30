import React, { useState } from 'react';
import './update.css';

function UpdateProduct({ product, onUpdate, onCancel }) {
  const [form, setForm] = useState({ ...product });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(form);
  };

  return (
    <div className="update-dialog-overlay">
      <form className="update-dialog-form" onSubmit={handleSubmit}>
        <h3>Update Product</h3>
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" />
        <input name="image" value={form.image} onChange={handleChange} required placeholder="Image" />
        <input name="description" value={form.description} onChange={handleChange} required placeholder="Description" />
        <input name="price" type="number" value={form.price} onChange={handleChange} required placeholder="Price" />
        <input name="stock" type="number" value={form.stock} onChange={handleChange} required placeholder="Stock" />

        <div className="actions">
          <button type="submit" className="update-btn">Update</button>
          <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProduct;
