"use client";

import { useTheme } from "@/app/context/theme-context";
import Image from "next/image";

export default function Loginwithgitgoogle({ icon, text }: { icon: string; text: string }) {
  const { darkMode } = useTheme();

  return (
    <button
      className={`w-full border text-gray-700 font-medium py-2.5 px-2 rounded-md transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        darkMode
          ? "bg-[#212734] border-gray-600 text-white"
          : "bg-white border-gray-300"
      }`}
    >
      {/* Dynamically passed image */}
      <Image src={icon} alt={text} width={20} height={20} />

      {/* Aligned text */}
      <span>Login with {text}</span>
    </button>
  );
}
