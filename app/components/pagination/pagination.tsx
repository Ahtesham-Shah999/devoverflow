'use client';
import React from 'react';
import { useTheme } from '@/app/context/theme-context';

const Pagination = ({
  currentPage = 1,
  totalPages = 5,
  onPageChange,
}: {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}) => {
  const { darkMode } = useTheme();

  const handlePrev = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 w-[207px] h-[43px]">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className={`px-4 py-2 rounded-md text-sm transition border 
          ${darkMode
            ? 'bg-[#1a1a1a] text-white border-[#333] hover:bg-[#2a2a2a] shadow-md shadow-black/30'
            : 'bg-white text-black border-gray-300 hover:bg-gray-100 shadow-md shadow-gray-300'
          }`}
      >
        Prev
      </button>

      {/* Current Page */}
      <div
        className={`px-4 py-2 rounded-md font-medium text-sm border shadow 
          ${darkMode
            ? 'bg-gradient-to-r from-[#FF7000] to-[#E2995F] text-black border-[#333] shadow-md shadow-orange-700/40'
            : 'bg-gradient-to-r from-[#FF7000] to-[#E2995F] text-black border-gray-300 shadow-md shadow-orange-300/40'
          }`}
      >
        {currentPage}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className={`px-4 py-2 rounded-md text-sm transition border 
          ${darkMode
            ? 'bg-[#1a1a1a] text-white border-[#333] hover:bg-[#2a2a2a] shadow-md shadow-black/30'
            : 'bg-white text-black border-gray-300 hover:bg-gray-100 shadow-md shadow-gray-300'
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
