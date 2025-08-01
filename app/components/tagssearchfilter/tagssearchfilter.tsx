'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronDown } from 'lucide-react';
import { useTheme } from "@/app/context/theme-context";

interface TagSearchFiltersProps {
  heading: string;
  placeholder: string;
}

const TagSearchFilters: React.FC<TagSearchFiltersProps> = ({ heading, placeholder }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const { darkMode } = useTheme();

  const locations = [
    'New York, NY',
    'San Francisco, CA',
    'Los Angeles, CA',
    'Chicago, IL',
    'Austin, TX',
    'Seattle, WA',
    'Boston, MA',
    'Remote'
  ];

  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setIsLocationDropdownOpen(false);
  };

  return (
    <div className="p-4 sm:p-6 w-full">
      {/* Heading */}
      <h1
        className={`mb-6 sm:mb-8 font-bold text-2xl sm:text-3xl tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {heading}
      </h1>

      {/* Filters Row */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl">
        {/* Job Title Input */}
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#7B8EC8]" />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className={`w-full pl-12 pr-4 rounded-lg h-[50px] text-sm transition-all duration-200 
              ${darkMode
                ? "bg-[#0F1117] text-[#7B8EC8] placeholder-[#7B8EC8] border border-gray-600 focus:ring-orange-500"
                : "bg-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring-orange-500"
              } 
              focus:outline-none focus:ring-2`}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              letterSpacing: '0px'
            }}
          />
        </div>

        {/* Location Dropdown */}
        <div className="relative w-full md:w-[200px]">
          <Image
            src="/images/filterlines.png"
            alt="Filter Lines"
            width={20}
            height={20}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <ChevronDown
              className={`h-5 w-5 text-[#7B8EC8] transition-transform duration-200 ${isLocationDropdownOpen ? 'rotate-180' : ''}`}
            />
          </div>
          <button
            onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
            className={`w-full h-[50px] text-left rounded-lg px-12 text-sm transition-all duration-200 
              ${darkMode
                ? "bg-[#0F1117] text-[#7B8EC8] border border-gray-600 hover:bg-[#1a1f2e] focus:ring-orange-500"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-orange-500"
              } 
              focus:outline-none focus:ring-2`}
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            {location || 'Most Popular'}
          </button>

          {/* Dropdown List */}
          {isLocationDropdownOpen && (
            <div
              className={`absolute top-full left-0 right-0 mt-2 z-10 rounded-lg shadow-lg max-h-60 overflow-y-auto transition-all duration-150
              ${darkMode ? "bg-[#0F1117] border border-gray-600" : "bg-white border border-gray-300"}`}
            >
              {locations.map((loc, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(loc)}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors duration-150
                    ${darkMode
                      ? "text-[#7B8EC8] hover:bg-[#1a1f2e]"
                      : "text-gray-700 hover:bg-gray-100"
                    } 
                    first:rounded-t-lg last:rounded-b-lg`}
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagSearchFilters;
