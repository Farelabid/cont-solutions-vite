// src/components/common/Button.tsx - Reusable Button Component

import React from 'react';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  children, 
  onClick, 
  href, 
  type = 'button', 
  className = '' 
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700 shadow-lg hover:shadow-xl focus:ring-teal-500",
    secondary: "bg-white text-gray-900 border-2 border-white hover:bg-gray-100 shadow-lg hover:shadow-xl focus:ring-gray-500"
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={finalClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={finalClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;