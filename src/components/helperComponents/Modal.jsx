import React from 'react';

function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Add your modal content here */}
        <h2>Add Details</h2>
        {/* Additional form fields or content can be added here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
