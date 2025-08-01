"use client";
import React from "react";
import { useTheme } from "@/app/context/theme-context";

const HotNetworkTags = () => {  
  const { darkMode } = useTheme();

  const hotNetworkQuestions = [
    {
      id: 1,
      number: "/images/question.png",
      text: "Would it be appropriate to point out an error in another paper during a referee report?",
    },
    {
      id: 2,
      number: "/images/question.png",
      text: "How can an airconditioning machine exist?",
    },
    {
      id: 3,
      number: "/images/question.png",
      text: "Interrogated every time crossing UK Border as citizen",
    },
    {
      id: 4,
      number: "/images/question.png",
      text: "Low digit addition generator",
    },
    {
      id: 5,
      number: "/images/question.png",
      text: "What is an example of 3 numbers that do not make up a vector?",
    },
  ];

  const popularTags = [
    {
      name: "JAVASCRIPT",
      count: "20152+",
      icon: "JS",
      textColor: "text-yellow-700",
      iconColor: "text-yellow-500",
    },
    {
      name: "TYPESCRIPT",
      count: "18493+",
      icon: "TS",
      textColor: "text-blue-700",
      iconColor: "text-blue-500",
    },
    {
      name: "THREE.JS",
      count: "18493+",
      icon: "⚡",
      textColor: "text-gray-700",
      iconColor: "text-gray-600",
    },
    {
      name: "TAILWIND CSS",
      count: "18493+",
      icon: "~",
      textColor: "text-cyan-700",
      iconColor: "text-cyan-500",
    },
    {
      name: "REACT.JS",
      count: "18493+",
      icon: "⚛",
      textColor: "text-cyan-600",
      iconColor: "text-cyan-400",
    },
    {
      name: "GIT & GITHUB",
      count: "18493+",
      icon: "◆",
      textColor: "text-red-500",
      iconColor: "text-red-400",
    },
  ];

  return (
    <div
      className={`absolute top-0 right-0 w-[280px] h-[1024px] pb-5 p-6 font-inter pt-23 z-1 shadow-xl border rounded-lg  ${
        darkMode ? "bg-[#090a0f] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      {/* Hot Network Section */}
      <div className="mb-8">
        <h2
          className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Hot Network
        </h2>
        <div className="space-y-3">
          {hotNetworkQuestions.map((question) => (
            <div
              key={question.id}
              className={`flex items-start space-x-3 cursor-pointer p-2 rounded-md transition-colors duration-200 ${
                darkMode
                  ? "hover:bg-[#1f2937]"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex-shrink-0">
                <img
                  src={question.number}
                  alt="Question Icon"
                  className="w-6 h-6"
                />
              </div>
              <p
                className={`text-sm font-medium leading-[130%] ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {question.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags Section */}
      <div>
        <h2
          className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Popular Tags
        </h2>
        <div className="space-y-3">
          {popularTags.map((tag, index) => (
            <div
              key={index}
              className={`flex items-center justify-between cursor-pointer p-2 rounded-md transition-colors duration-200 ${
                darkMode
                  ? "hover:bg-[#1f2937]"
                  : "hover:bg-gray-50"
              }`}
            >
              <div
                className={`flex items-center space-x-3 rounded-lg pt-1 pb-1 p-2 ${
                  darkMode ? "bg-[#1e293b]" : "bg-[#F4F6F8]"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${tag.iconColor}`}
                >
                  {tag.icon}
                </div>
                <span className={`text-sm font-medium ${tag.textColor}`}>
                  {tag.name}
                </span>
              </div>
              <span
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {tag.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotNetworkTags;
