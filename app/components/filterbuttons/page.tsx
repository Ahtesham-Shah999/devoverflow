"use client";
import { useState } from "react";
import NoQuestions from "@/app/components/NoQuestions/NoQuestions";
import { useTheme } from "@/app/context/theme-context";

const FilterButtons = () => {
  const [active, setActive] = useState("Newest");
  const { darkMode } = useTheme();
  const filters = ["Newest", "Recommended Questions", "Frequent", "Unanswered"];

  return (
    <>
      <div className="px-6 py-7">
        {/* Filter Label */}
        <div
          className={`font-[700] text-[30px] leading-[1.4] tracking-[-0.0625rem] font-inter mb-10 ${
            darkMode ? "text-white" : "text-[#00030a]"
          }`}
        >
          All Questions
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-10">
          {filters.map((filter) => {
            const isActive = active === filter;

            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? darkMode
                        ? "bg-[#374151] text-amber-400" // active dark
                        : "bg-[#FFF1E6] text-[#E2985E]" // active light
                      : darkMode
                      ? "bg-[#1f2937] text-gray-300 hover:bg-[#374151] hover:text-amber-400" // inactive dark
                      : "bg-[#F4F6F8] text-[#7B8EC8] hover:bg-[#FFF1E6] hover:text-[#E2985E]" // inactive light
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* No Questions Component */}
      {active === "Newest" ? <NoQuestions /> : ""}
    </>
  );
};

export default FilterButtons;
