"use client";
import React from "react";
import Tagcard from "@/app/components/tagcard/tagcard";
import { useTheme } from "@/app/context/theme-context";
import TagSearchFilters from "../components/tagssearchfilter/tagssearchfilter";
export default function Tags() {
  const { darkMode } = useTheme();

  return (
    <div
      className={` ml-[245px]  min-h-[120vh] mt-[64px] ${
        darkMode ? "bg-[#090a0f]" : "bg-white"
      } p-4`}
    >
      {/* Your content goes here */}
      <TagSearchFilters heading={"Tags"} placeholder={"Search by title and tags"} />
      <Tagcard/>
    </div>
  );
}
