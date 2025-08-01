"use client";
import { useState } from "react";
import Jobe from '@/app/Findjobe/page';
import Homepage from '@/app/Home/page';
import Tags from '@/app/tags/tags';
import Communities from '@/app/communities/page';
import {
  Home,
  Star,
  Briefcase,
  Tag,
  Users,
  HelpCircle,
  LogOut,
} from "lucide-react";
import Jobecard from "@/app/components/Jobecard/jobecard";
import { useTheme } from "@/app/context/theme-context";
import { useRouter } from "next/navigation";
const Sidebar = () => {
    const router = useRouter();
  const { darkMode } = useTheme();
  const [activeItem, setActiveItem] = useState("Home");



  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Collections", icon: Star },
    { name: "Find Jobs", icon: Briefcase },
    { name: "Tags", icon: Tag },
    { name: "Communities", icon: Users },
    { name: "Ask a Question", icon: HelpCircle },
  ];

  return (
    <>
    <div
      className={`fixed top-16 left-0 w-[250px] h-[calc(100vh-4rem)] flex flex-col justify-between py-10 px-6 border border-gray-200 shadow-2xl   ${
        darkMode
          ? "bg-[#090a0f] text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      {/* Main Menu Items */}
      <div className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;

          return (
            <div
              key={item.name}
            onClick={() => setActiveItem(item.name)}     
             className={`
                flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#FF7000] via-[#E2985E] to-[#E2995F] text-white shadow-lg"
                    : `hover:bg-gradient-to-r hover:from-[#FF7000] hover:via-[#E2985E] hover:to-[#E2995F] hover:text-white hover:shadow-md ${
                        darkMode
                          ? "hover:shadow-orange-500/20"
                          : "hover:shadow-orange-500/30"
                      }`
                }
              `}
            >
              <Icon
                size={20}
                className={`transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : darkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                } group-hover:text-white`}
              />
              <span
                className={`font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                } group-hover:text-white`}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Logout Button */}
      <div
        className={`
          hidden md:flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 group
          hover:bg-gradient-to-r hover:from-[#FF7000] hover:via-[#E2985E] hover:to-[#E2995F] hover:text-white hover:shadow-md ${
            darkMode
              ? "hover:shadow-orange-500/20"
              : "hover:shadow-orange-500/30"
          }
        `}
      >
        <LogOut
          size={20}
          className={`transition-all duration-300 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          } group-hover:text-white`}
        />
        <span
          onClick={()=>router.push('/authfrontend')}
          className={`font-medium transition-all duration-300 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } group-hover:text-white`}
        >
          Logout
        </span>
      </div>
      {/* Login and Logout Button */}
      <div className="md:hidden flex-col space-y-2">
        <button
          className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
      ${
        darkMode
          ? "bg-[#151821] text-white hover:text-[#E2985E] shadow-lg"
          : "bg-[#E2985E] text-white hover:bg-[#0f1118] hover:text-white shadow-md"
      }`}
        >
          Login
        </button>

        <button
          className={`w-full mt-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
      ${
        darkMode
          ? "bg-[#151821] text-white hover:text-[#E2985E] shadow-lg"
          : "bg-[#E2985E] text-white hover:bg-[#0f1118] shadow-md"
      }`}
        >
          Sign Up
        </button>
      </div>
    </div>
      {activeItem === "Communities" && <Communities/>}
      {activeItem === "Home" && <Homepage />}
      {activeItem === "Find Jobs" && <Jobe />}
      {activeItem === "Tags" && <Tags />}
      {/* Add other components for different menu items as needed */}
      
    </>
  );
};

export default Sidebar;
