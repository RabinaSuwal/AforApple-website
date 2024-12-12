import React from 'react';

const Button = ({ onClick, label, className, type = "button", disabled = false }) => {
  return (
    <button 
      type={type} 
      className={`custom-button ${className}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
