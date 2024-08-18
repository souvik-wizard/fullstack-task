// Modal.js
import React, { useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when the modal is closed
      document.body.style.overflow = "";
    }

    return () => {
      // Clean up when the component unmounts
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 relative w-full max-w-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-900"
        >
          <RxCross2 size={24} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
