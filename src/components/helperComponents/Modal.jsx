import React from 'react';

function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Details</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
