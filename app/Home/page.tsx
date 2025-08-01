"use client";
import React from "react";
import FilterButtons from "../components/filterbuttons/page";
import HotNetworkTags from "../components/Rightsidebar/page";
import { useTheme } from "@/app/context/theme-context";
export default function Homepage() {
  const { darkMode } = useTheme();
  return (
    <div
      className={`pt-[80px] px-[20px] min-h-[1024] w-3xl ${
        darkMode ? "bg-[#090a0f]" : "bg-white"
      }`}
    >
      <FilterButtons />
      <HotNetworkTags />
    </div>
  );
}
