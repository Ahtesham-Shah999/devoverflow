"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/app/context/theme-context";
import Continue from "../components/continuebutton/Continuebutton";
import Link from "next/link";
import CustomInput from "../components/CustomInput/CustomInput";
export default function Index() {
  const [email, setEmail] = useState("");
  const { darkMode, toggleTheme } = useTheme();

  function handlegooglesignin() {
    // Handle Google Sign-In logic here
    console.log("Google Sign-In clicked");
    window.location.href = "/authfrontend/Signinreal"; // Redirect to Signinreal page
  }

  return (
    <>
      <div
        className={`rounded-2xl shadow-sm p-8 w-full max-w-md relative z-10 ${
          darkMode ? "bg-[#151821]" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        {/* Secured by Clerk vertical label */}
        <div className="absolute w-9 -left-9 top-12 bg-gradient-to-r from-[#FF7000] via-[#E2985E] to-[#E2995F] text-white px-3 py-15 rounded-l-lg text-xs font-medium flex items-center justify-center h-24">
          <div className="transform -rotate-90">Secured by Clerk</div>
        </div>

        {/* DevOverflow Logo */}
        <div className="flex items-center justify-start mb-6">
          <div>
            <Image
              src="/images/icon.png"
              alt="DevOverflow Icon"
              width={40}
              height={40}
              className="mr-1"
            />
          </div>
          <span
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Dev<span className="text-orange-500">Overflow</span>
          </span>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1
            className={`text-3xl font-semibold mb-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Sign in
          </h1>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            to continue to DevOverflow
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-4 mb-8">
          {/* Google */}
          <Link href="/authfrontend/Signinreal">
            <button
              className={`flex-1 flex items-center justify-center py-4 px-4 border rounded-lg transition-colors ${
                darkMode
                  ? "bg-[#0e131c] border-gray-600 hover:bg-[#2a2f42]"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>
          </Link>

          {/* Facebook */}
          <Link href="/authfrontend/Signinreal">
            <button
              className={`flex-1 flex items-center justify-center py-4 px-4 border rounded-lg transition-colors ${
                darkMode
                  ? "bg-[#0e131c] border-gray-600 hover:bg-[#2a2f42]"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </Link>

          {/* Twitter */}
          <Link href="/authfrontend/Signinreal">
            <button
              className={`flex-1 flex items-center justify-center py-4 px-4 border rounded-lg transition-colors ${
                darkMode
                  ? "bg-[#0e131c] border-gray-600 hover:bg-[#2a2f42]"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <svg
                className="w-5 h-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
          </Link>
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
        <Continue
          fields={[email]} // Can pass any fields here
          label="Continue"
        />

        {/* Footer */}
        <div className="text-center flex justify-between">
          <p
            className={`text-sm mb-4 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            No account?{" "}
            <Link
              href="/authfrontend/Signup"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              Sign Up
            </Link>
          </p>

          <div
            className={`flex justify-center space-x-8 text-sm ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            <a href="#" className="hover:text-orange-400">
              Help
            </a>
            <a href="#" className="hover:text-orange-400">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-400">
              Terms
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
