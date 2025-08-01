"use client";
import React from "react";
import { useTheme } from "@/app/context/theme-context";

// 1. Define prop types
interface ColorCardProps {
  title?: string;
  description?: string;
  questionCount?: string;
  titleColor?: string;
  descriptionColor?: string;
  countColor?: string;
  countLabelColor?: string;
  mode: boolean; // ✅ explicitly typed
}

// 2. Add props type to component
const ColorCard: React.FC<ColorCardProps> = ({
  title = "javascript",
  description = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
  questionCount = "23493+",
  titleColor = "text-white",
  descriptionColor = "text-[#DCE3F1]",
  countColor = "text-orange-400",
  countLabelColor = "text-blue-400",
  mode,
}) => {
  return (
    <div
      className={`w-[235px] h-[225px] rounded-lg px-6 py-6 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        mode ? "bg-[#0F1117]" : "bg-white"
      }`}
    >
      {/* Title */}
      <h2
        className={`font-semibold text-base leading-[130%] tracking-normal mb-4 ${titleColor} font-inter`}
      >
        <span
  className={`px-5 py-1 rounded-sm border inline-block ${
    mode
      ? "bg-[#212734] border-[#212734] text-white"
      : "bg-gray-100 border-gray-200 text-black"
  }`}
>
  {title}
</span>

      </h2>

      {/* Description */}
      <p
        className={`${descriptionColor} mb-4`}
        style={{
          fontSize: "12px",
          lineHeight: "150%",
          letterSpacing: "0%",
        }}
      >
        {description}
      </p>

      {/* Question Count */}
      <div className="flex items-baseline gap-2">
        <span className={`text-sm inline-block w-[80px] truncate ${countColor}`}>
          {questionCount}
        </span>
        <span className={`text-sm ${countLabelColor}`}>Questions</span>
      </div>
    </div>
  );
};


const Tagcard = () => {
  const { darkMode } = useTheme();

  const cardData = [
    {
      title: "javascript",
      description:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS",
      questionCount: "23493+",
    },
    {
      title: "react",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components",
      questionCount: "15420+",
    },
    {
      title: "python",
      description:
        "Python is a high-level, general-purpose programming language known for its simplicity and readability",
      questionCount: "31285+",
    },
    {
      title: "typescript",
      description:
        "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale",
      questionCount: "12340+",
    },
    {
      title: "next.js",
      description:
        "Next.js is a React framework that enables server-side rendering and generating static websites for React-based web applications",
      questionCount: "13400+",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 ml-2">
      {cardData.map((card, index) => (
        <ColorCard
          key={index}
          title={card.title}
          description={card.description}
          questionCount={card.questionCount}
          mode={darkMode}
          titleColor={darkMode ? "text-white" : "text-black"}
          descriptionColor={darkMode ? "text-[#DCE3F1]" : "text-gray-600"}
          countColor="text-orange-400"
          countLabelColor="text-blue-400"
        />
      ))}
    </div>
  );
};

export default Tagcard;
