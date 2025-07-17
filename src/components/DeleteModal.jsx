import React from "react";
import "../index.css";

function DeleteModal({ isOpen, onClose, onConfirm }) {
    // what this is saying "If isOpen is false, don't render anything"
    if (!isOpen) return null;

    return (
    
        <div className="modal-overlay">
            <div className="modal-box">
                <h2>Are you sure?</h2>
                <p>This action will permanently delete this contact.</p>
                <div className="modal-buttons">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onConfirm} className="danger">Delete</button>
                </div>
            </div>
        </div>

    );
}


export default DeleteModal;
