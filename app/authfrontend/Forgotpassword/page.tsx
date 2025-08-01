'use client';
import { useState } from "react";
import { useTheme } from '@/app/context/theme-context';
import Image from 'next/image';
import Link from "next/link";
import icon from '@/public/images/icon.png';
import Continue from "@/app/components/continuebutton/Continuebutton";
import Loginwithgitgoogle from '@/app/components/Loginwithgitggogle/Loginwithgitgoogle.tsx'

export default function Forgotpassword() {
  const [email, setEmail] = useState("");
  const { darkMode } = useTheme();

  return (
    <>
      {/* Forgot Password Form Container */}
      <div
        className={`w-full max-w-md mx-auto p-8 rounded-2xl shadow-md relative z-10 ${
          darkMode ? "bg-[#151821]" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        {/* Header */}
        <div className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1
                className={`text-2xl font-semibold tracking-tight ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Forgot Password!
              </h1>
              <p className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Don’t worry, we will send you instructions.
              </p>
            </div>
            <Image src={icon} alt="DevOverflow Icon" width={40} height={40} />
          </div>
        </div>

        {/* Form Content */}
        <div className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className={`block text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                darkMode
                  ? "bg-[#212734] border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Continue Button */}
          <Link href="/authfrontend/Forgotpassword/checkemail">
            <Continue fields={[email]} label="Continue" />
          </Link>

          {/* Sign Up Link */}
          <div className={`text-center text-sm mt-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Don’t have an account?{" "}
            <Link href="/authfrontend/Signup">
              <button className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                Sign up
              </button>
            </Link>
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-3 pt-2">
            <Loginwithgitgoogle
              icon="/images/google.png"
              text="Google"
            />
            <Loginwithgitgoogle
              icon="/images/github.png"
              text="GitHub"
            />
          </div>
        </div>
      </div>
    </>
  );
}
