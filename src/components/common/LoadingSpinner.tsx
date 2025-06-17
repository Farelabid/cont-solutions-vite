import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-900 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;