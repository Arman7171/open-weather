import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Popup({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="popup-overlay"
      onClick={handleOutsideClick}
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999999,
      }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "24px",
          width: "90%",
          maxWidth: "60%",
          height: "auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}>
        <button
          style={{
            position: "absolute",
            top: "-2px",
            right: "-2px",
            padding: "8px",
            borderRadius: "20px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={onClose}>
          <X size={20} />
        </button>
        <div>{children}</div>
      </motion.div>
    </div>
  );
}
