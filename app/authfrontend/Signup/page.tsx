"use client";
import { useState } from "react";
import { useTheme } from "@/app/context/theme-context";
import Image from "next/image";
import Link from "next/link";
import Loginwithgitgoogle from '@/app/components/Loginwithgitggogle/Loginwithgitgoogle.tsx'
import Continue from "@/app/components/continuebutton/Continuebutton";
import CustomInput from "@/app/components/CustomInput/CustomInput";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { darkMode } = useTheme();

  return (
    <>
      <div
        className={`rounded-2xl shadow-sm p-8 w-full max-w-md relative z-10 ${
          darkMode ? "bg-[#151821]" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1
                className={`text-3xl font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Create Account
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                to continue to DevFlow
              </p>
            </div>
            <div>
              <Image
                src="/images/icon.png"
                alt="DevOverflow Icon"
                width={40}
                height={40}
                className="mr-1"
              />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6 space-y-4">
          {/* Username Input */}
          <div className="mb-6">
            <CustomInput
          id="username"
          type="text"
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={setUsername}
          darkMode={darkMode}
        />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <CustomInput
          id="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          darkMode={darkMode}
        />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <CustomInput
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
          darkMode={darkMode}
        />

          </div>

          <Continue fields={[email,password,username]}/>

          {/* Sign In Link */}
          <div className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/authfrontend">
              <button className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                Sign in
              </button>
            </Link>
          </div>

          {/* Social Login Buttons */}
          <div className="mt-6 flex gap-2  ">
          <Loginwithgitgoogle icon="/images/github.png" text="Github" />
          <Loginwithgitgoogle icon="/images/google.png" text="Google" />
          </div>
        </div>
      </div>
    </>
  );
}
