"use client";
import React from "react";
import Jobecard from "@/app/components/Jobecard/jobecard";
import JobSearchFilters from "@/app/components/jobesearch/jobesearch";
import { useTheme } from "@/app/context/theme-context";
import Pagination from "../components/pagination/pagination";

export default function Jobe() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`ml-[210px] mt-[64px] px-8 py-6 ${
        darkMode ? "bg-[#090a0f]" : "bg-white"
      }`}
      style={{
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <div className="max-w-[1600px] flex flex-col">
        <JobSearchFilters />
        <div className="flex flex-col gap-6">
          <Jobecard
            title="Principal Salesforce Developer"
            department="DEVELOPMENT"
            description="Join AT&T and reimagine the communications and technologies that connect the world."
            jobType="Full-time"
            salary="80k - 100k"
            location="Melbourne, AU"
            link="/job/principal-salesforce-developer"
            image="/images/avatar.png"
            darkMode={darkMode}
          />
          <Jobecard
            title="Backend Engineer"
            department="ENGINEERING"
            description="Work with an exciting fintech startup solving global payments."
            jobType="Part-time"
            salary="60k - 80k"
            location="Remote"
            link="/job/backend-engineer"
                        darkMode={darkMode}

          />
          <Jobecard
            title="Frontend React Developer"
            department="ENGINEERING"
            description="Join a product team to improve the UI/UX of our dashboard."
            jobType="Full-time"
            salary="70k - 90k"
            location="New York, US"
            link="/job/frontend-react-developer"
                        darkMode={darkMode}

          />
        </div>
        <div className="mt-8 flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
