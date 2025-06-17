// src/components/ui/FloatingAction.tsx
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingAction: React.FC = () => {
  return (
    <div className="fixed bottom-8 left-8 z-40">
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden group-hover:block animate-fadeIn">
          Let's Talk
        </span>
      </button>
    </div>
  );
};

export default FloatingAction;