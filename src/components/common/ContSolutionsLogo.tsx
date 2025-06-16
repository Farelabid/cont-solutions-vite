// src/components/common/ContSolutionsLogo.tsx - Komponen Logo Terpusat (Versi Gambar)

import React from 'react';

const ContSolutionsLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      {/* LOGO: Menggunakan file gambar dari /public/assets/ */}
      <img
        src="/assets/logo-contsol.png"
        alt="Cont Solution Indonesia Logo"
        className="w-12 h-12 transform group-hover:scale-110 transition-all duration-300"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
          Cont Solutions
        </span>
        <span className="text-xs text-gray-500 group-hover:text-teal-500 transition-colors duration-300 -mt-1">
          Continuous Development
        </span>
      </div>
    </div>
  );
};

export default ContSolutionsLogo;
