import React from 'react';
import "./deleteitem.css"
const DeleteItem = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-dialog">
    <div className="confirmation-dialog-content">
        <h1><i className="bi bi-exclamation-triangle text-danger"></i> Delete</h1>
      <p>{message}</p>
      <div className="confirmation-dialog-buttons">
        <button className="btn border rounded" onClick={onCancel}>Cancel</button>
        <button className="btn text-white border rounded" style={{ backgroundColor: '#4c1680' }} onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  </div>
  );
};

export default DeleteItem
