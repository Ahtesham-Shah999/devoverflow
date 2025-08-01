"use client";
import React from "react";
import { useTheme } from "@/app/context/theme-context";

interface UserCardProps {
  name?: string;
  username?: string;
  imgSrc?: string;
  mode: boolean;
}

const UserCard: React.FC<UserCardProps> = ({
  name = "John Doe",
  username = "@user_s343",
  imgSrc = "https://via.placeholder.com/80", // Replace this with actual image
  mode,
}) => {
  return (
    <div
      className={`w-[235px] h-[225px] rounded-lg px-6 py-6 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center ${
        mode ? "bg-[#0F1117]" : "bg-white"
      }`}
    >
      {/* Image */}
      <img
        src={imgSrc}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />

      {/* Name */}
      <h2
        className={`font-inter font-bold text-[20px] leading-[130%] text-center ${
          mode ? "text-white" : "text-black"
        }`}
      >
        {name}
      </h2>

      {/* Username */}
      <p
        className={`font-inter font-normal text-[14px] leading-[140%] text-center ${
          mode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {username}
      </p>
    </div>
  );
};

const Usercard = () => {
  const { darkMode } = useTheme();

  const users = [
    {
      name: "John Doe",
      username: "@john_doe",
      imgSrc: "/images/avatar.png",
    },
    {
      name: "Jane Smith",
      username: "@jane_smith",
      imgSrc: "/images/m.png",
    },
    {
      name: "Ali Khan",
      username: "@ali_khan",
      imgSrc: "/images/g.png",
    },
    {
      name: "Sara Qureshi",
      username: "@sara_q",
      imgSrc: "/images/avatar.png",
    },
    {
      name: "Jane Smith",
      username: "@jane_smith",
      imgSrc: "/images/m.png",
    },
    {
      name: "Jane Smith",
      username: "@jane_smith",
      imgSrc: "/images/m.png",
    },
    {
      name: "Jane Smith",
      username: "@jane_smith",
      imgSrc: "/images/m.png",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 ml-2">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          username={user.username}
          imgSrc={user.imgSrc}
          mode={darkMode}
        />
      ))}
    </div>
  );
};

export default Usercard;
