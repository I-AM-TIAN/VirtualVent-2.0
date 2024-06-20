import React from 'react';
import "../../../css/components/public-components/modal.css";


function Modal({ isVisible, onClose, children }) {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
