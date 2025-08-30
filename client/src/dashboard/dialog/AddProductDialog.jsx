import React from 'react';

function AddProductDialog({ form, onChange, onSubmit, onCancel }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <form
        style={{ background: '#fff', padding: 20, borderRadius: 8, minWidth: 300 }}
        onSubmit={onSubmit}
      >
        <h3>Add Product</h3>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
          required
          style={{ width: '100%', marginBottom: 8 }}
        />
        <input
          name="image"
          placeholder="Image"
          value={form.image}
          onChange={onChange}
          required
          style={{ width: '100%', marginBottom: 8 }}
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={onChange}
          required
          style={{ width: '100%', marginBottom: 8 }}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={onChange}
          required
          style={{ width: '100%', marginBottom: 8 }}
        />
        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={onChange}
          required
          style={{ width: '100%', marginBottom: 8 }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddProductDialog;