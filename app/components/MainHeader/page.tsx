"use client";

import { useTheme } from "@/app/context/theme-context";
import { Sun, Moon, Search } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const isDark = darkMode;

  // State for mobile search bar visibility
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 shadow-md flex justify-between items-center ${
          isDark ? "bg-[#090a0f]" : "bg-white"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold">
          <img src="/images/icon.png" alt="logo" className="w-8 h-8" />
          <span className={`${isDark ? "text-white" : "text-black"}`}>
            Dev<span className="text-orange-500">Overflow</span>
          </span>
        </div>

        {/* Search Bar - Only on desktop */}
        <div className="hidden md:flex flex-1 mx-4 max-w-2xl relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search for questions here..."
            className={`w-full pl-10 rounded-lg px-4 py-3 border text-sm focus:outline-none ${
              isDark
                ? "bg-[#171C2394] border-gray-700 text-white placeholder-gray-400"
                : "bg-gray-100 border-gray-200 text-gray-800 placeholder-gray-500"
            }`}
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`transition ${
              isDark
                ? "text-gray-300 hover:opacity-90"
                : "text-gray-700 hover:opacity-90"
            }`}
          >
            {isDark ? (
              <Sun size={20} stroke="orange" fill="orange" />
            ) : (
              <Moon size={20} stroke="orange" fill="orange" />
            )}
          </button>

          {/* Profile Picture */}
          <img
            src="/images/Profile-Pic-S.png"
            alt="uslogo"
            className="w-8 h-8"
          />

          {/* Mobile menu/search toggle */}
          <button
            onClick={toggleMobileSearch}
            className={`transition md:hidden ${
              isDark
                ? "text-gray-300 hover:text-orange-400"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            <img src={`${isDark?"/images/menulinesdark.png":"/images/menulines.png"}`} alt="menu" className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Search Bar Below Header */}
      {!showMobileSearch && (
        <div
          className={`md:hidden p-4 shadow-sm absolute top-15 w-full ${
            isDark ? "bg-[#101012]" : "bg-white"
          }`}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none " />
            <input
              type="text"
              placeholder="Search for questions here..."
              className={`w-full pl-10 rounded-md px-8 py-4 border text-lg focus:outline-none ${
                isDark
                  ? "bg-[#171C2394] border-gray-700 text-white placeholder-gray-400"
                  : "bg-gray-100 border-gray-200 text-gray-800 placeholder-gray-500"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
}
