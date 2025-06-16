// src/components/common/SuccessToast.tsx - Success Toast Notification

import React, { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const SuccessToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Listen for custom success events
    const handleSuccess = (event: CustomEvent) => {
      setMessage(event.detail.message || 'Success!');
      setIsVisible(true);
      
      // Auto hide after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener('showSuccess', handleSuccess as EventListener);
    return () => window.removeEventListener('showSuccess', handleSuccess as EventListener);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm">
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
        <span className="flex-1">{message}</span>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Utility function to show success toast
export const showSuccessToast = (message: string) => {
  window.dispatchEvent(new CustomEvent('showSuccess', { 
    detail: { message } 
  }));
};

export default SuccessToast;