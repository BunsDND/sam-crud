import React from 'react';
import './add.css';

function AddProductDialog({ form, onChange, onSubmit, onCancel }) {
  return (
    <div className="add-dialog-overlay">
      <form className="add-dialog-form" onSubmit={onSubmit}>
        <h3>Add Product</h3>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          name="image"
          placeholder="Image"
          value={form.image}
          onChange={onChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={onChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={onChange}
          required
        />
        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={onChange}
          required
        />
        <div className="actions">
          <button className="add-btn" type="submit">Submit</button>
          <button className="cancel-btn" type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddProductDialog;