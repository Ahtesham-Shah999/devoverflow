// app/components/theme-wrapper.tsx
"use client";

import { useTheme } from "@/app/context/theme-context";

export default function Themewrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div className={`min-h-screen flex items-center justify-center relative`}>
  {/* full-screen bg layer */}
  <div
    className={`absolute inset-0 ${darkMode ? "bg-black" : "bg-white"}`}
    style={{
      backgroundImage: `url(${darkMode ? "/images/dark-BG.png" : "/images/light-BG.png"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      zIndex: -1,
    }}
  ></div>

 



       {/* <div>
        <button
          className={`absolute top-3 right-5 px-4 py-2 rounded transition-colors duration-200
    ${
      darkMode
        ? "bg-gradient-to-r from-[#FF7000] via-[#E2985E] to-[#E2995F] hover:opacity-90 text-white hover:cursor-pointer"
        : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"
    }`}
          onClick={toggleTheme}
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div> */}
      {children}
     
    </div>
  );
}
