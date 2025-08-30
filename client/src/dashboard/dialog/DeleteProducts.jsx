import React from 'react';
import './delete.css';

function DeleteProduct({ product, onDelete, onCancel }) {
  return (
    <div className="delete-dialog-overlay">
      <div className="delete-dialog-form">
        <h3>Delete Product</h3>
        <p>
          Are you sure you want to delete <strong>{product.name}</strong>?
        </p>
        <div>
          <button
            className="delete-btn"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
          <button 
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
