"use client";

import Image from "next/image";
import Link from "next/link";

type JobCardProps = {
  title: string;
  department: string;
  description: string;
  jobType: string;
  salary: string;
  location: string;
  locationIcon?: string;
  image?: string;
  link: string;
  darkMode?: boolean;
};

export default function JobCard({
  title,
  department,
  description,
  jobType,
  salary,
  location,
  locationIcon = "/images/AU.png",
  image = "",
  link,
  darkMode,
}: JobCardProps) {
  return (
  <div
    className={`w-[916px] h-[175px] rounded-[8px] p-[30px] flex items-start justify-between gap-6 relative transition-all
      ${darkMode
        ? "bg-[#0F1117] text-white shadow-md shadow-black/30 border border-[#212734]"
        : "bg-white text-black shadow-md shadow-gray-300 border border-gray-200"
      }`}
  >
    {/* Logo */}
    <div
      className={`flex-shrink-0 p-1 rounded-lg ${
        darkMode ? "bg-[#212734]" : "bg-gray-100"
      }`}
    >
      <Image
src={
  image ||
  (darkMode
    ? "/images/nopic.png"
    : "/images/profilelight.png")
}
        alt="Company Logo"
        width={48}
        height={48}
        className="rounded"
      />
    </div>

    {/* Job Content */}
    <div className="flex-grow">
      <div className="flex items-center gap-2">
        <h2 className="font-inter font-semibold text-[18px] leading-[140%] tracking-[0]">
          {title}
        </h2>
        <span
          className={`text-xs px-4 py-2 rounded-md ${
            darkMode ? "bg-[#212734] text-[#7B8EC8]" : "bg-gray-200 text-blue-700"
          }`}
        >
          {department}
        </span>
      </div>
      <p
        className={`text-sm mt-1 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      {/* Job details */}
      <div
        className={`flex flex-wrap items-center gap-4 mt-4 text-sm ${
          darkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        {/* Job type */}
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke={darkMode ? "#7B8EC8" : "#2563eb"}
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke={darkMode ? "#7B8EC8" : "#2563eb"}
              strokeWidth="2"
            />
          </svg>
          {jobType}
        </span>

        {/* Salary */}
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke={darkMode ? "#7B8EC8" : "#2563eb"}
              strokeWidth="2"
            />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fill={darkMode ? "#7B8EC8" : "#2563eb"}
              fontSize="12"
              fontFamily="Arial, sans-serif"
            >
              $
            </text>
          </svg>
          {salary}
        </span>
      </div>
    </div>

    {/* Location and CTA */}
    <div className="flex flex-col items-end justify-between gap-17">
      <div
        className={`flex flex-row px-2 py-1 rounded-md w-[136px] ${
          darkMode ? "bg-[#212734] text-gray-300" : "bg-gray-100 text-gray-700"
        }`}
      >
        <Image
          src={locationIcon}
          alt="Location Flag"
          objectFit="fill"
          width={18}
          height={16}
          className="mr-2"
        />
        <span className="text-sm">{location}</span>
      </div>

      <Link
        href={link}
        className={`font-inter font-semibold text-[14px] leading-[130%] tracking-[0] hover:underline ${
          darkMode ? "text-orange-400" : "text-orange-600"
        }`}
      >
        View job →
      </Link>
    </div>
  </div>
);

}
