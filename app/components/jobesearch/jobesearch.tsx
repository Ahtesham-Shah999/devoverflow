'use client';
import React, { useState } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { useTheme } from "@/app/context/theme-context";

const JobSearchFilters = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const { darkMode } = useTheme();

  const locations = [
    'New York, NY', 'San Francisco, CA', 'Los Angeles, CA',
    'Chicago, IL', 'Austin, TX', 'Seattle, WA', 'Boston, MA', 'Remote'
  ];

  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setIsLocationDropdownOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative right-8">
      <h1
        className={`${darkMode ? "text-white" : "text-gray-900"} mb-8`}
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: '700',
          fontSize: '30px',
          lineHeight: '140%',
          letterSpacing: '-1px'
        }}
      >
        Jobs
      </h1>

      <div className="flex justify-between items-center gap-4" style={{ width: '936px', height: '56px' }}>
        {/* Job Title Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#7B8EC8]" />
          </div>
          <input
            type="text"
            placeholder="Job Title, Company..."
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className={`pl-12 pr-4 border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${
              darkMode
                ? 'bg-[#0F1117] text-[#7B8EC8] placeholder-[#7B8EC8] border-gray-600'
                : 'bg-white text-gray-800 placeholder-gray-400 border-gray-300'
            }`}
            style={{
              width: '360px',
              height: '50px',
              borderRadius: '10px',
              padding: '16px',
              paddingLeft: '48px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '140%',
              letterSpacing: '0px'
            }}
          />
        </div>

        {/* Location Dropdown */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-[#7B8EC8]" />
          </div>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <ChevronDown
              className={`h-5 w-5 text-[#7B8EC8] transition-transform duration-200 ${
                isLocationDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
          <button
            onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
            className={`text-left border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${
              darkMode
                ? 'bg-[#0F1117] text-[#7B8EC8] hover:bg-[#1a1f2e] border-gray-600'
                : 'bg-white text-gray-800 hover:bg-gray-100 border-gray-300'
            }`}
            style={{
              width: '360px',
              height: '50px',
              borderRadius: '10px',
              padding: '16px 48px 16px 48px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '140%',
              letterSpacing: '0px'
            }}
          >
            {location || 'Select Location'}
          </button>

          {isLocationDropdownOpen && (
            <div
              className={`absolute top-full left-0 right-0 mt-2 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto border ${
                darkMode ? 'bg-[#0F1117] border-gray-600' : 'bg-white border-gray-300'
              }`}
            >
              {locations.map((loc, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(loc)}
                  className={`w-full px-4 py-3 text-left transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                    darkMode
                      ? 'text-[#7B8EC8] hover:bg-[#1a1f2e]'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '140%',
                    letterSpacing: '0px'
                  }}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Find Jobs Button */}
        <button
          className="bg-gradient-to-r from-[#FF7000] via-[#E2985E] to-[#E2995F] text-white hover:shadow-lg hover:from-[#FF6000] hover:via-[#E1875D] hover:to-[#E1885E] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 font-medium"
          style={{
            width: '160px',
            height: '50px',
            borderRadius: '8px',
            paddingTop: '12px',
            paddingRight: '16px',
            paddingBottom: '12px',
            paddingLeft: '16px',
            gap: '10px'
          }}
        >
          Find Jobs
        </button>
      </div>

      {/* Click outside to close dropdown */}
      {isLocationDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsLocationDropdownOpen(false)}
        />
      )}
    </div>
  );
};

export default JobSearchFilters;
