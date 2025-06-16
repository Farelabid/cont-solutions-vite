// src/components/common/Button.tsx

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
  const baseClasses = `
    inline-block px-8 py-3 rounded-full font-semibold text-center
    transition-all duration-300 ease-in-out transform hover:-translate-y-1
    cursor-pointer border-none outline-none focus:outline-none
  `;

  const variantClasses = {
    primary: `
      bg-yellow-400 text-gray-800 hover:bg-yellow-500
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-transparent text-white border-2 border-white
      hover:bg-white hover:text-teal-500
      shadow-lg hover:shadow-xl
    `
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;