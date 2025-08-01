'use client';

import { useState } from 'react';
import { useTheme } from '@/app/context/theme-context';
import Image from 'next/image';
import Link from 'next/link';
import Continue from "@/app/components/continuebutton/Continuebutton";

export default function SetNewPassword() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { darkMode } = useTheme();

  return (
    <div
      className={`w-full max-w-md mx-auto p-8 rounded-2xl shadow-md relative z-10 ${
        darkMode ? 'bg-[#151821]' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Header */}
      <div className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1
              className={`text-2xl font-semibold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Set New Password
            </h1>
            <p
              className={`text-sm mt-1 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              New Password must be different.
            </p>
          </div>
          <Image src="/images/icon.png" alt="DevOverflow Icon" width={40} height={40} />
        </div>
      </div>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Old Password */}
        <div className="space-y-2">
          <label
            htmlFor="old-password"
            className={`block text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Current Password
          </label>
          <input
            id="old-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 ${
              darkMode
                ? 'bg-[#212734] border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="Enter your current password"
          />
        </div>

        {/* New Password */}
        <div className="space-y-2">
          <label
            htmlFor="new-password"
            className={`block text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            New Password
          </label>
          <input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 ${
              darkMode
                ? 'bg-[#212734] border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="Enter your new password"
          />
        </div>

        <Link href="/authfrontend/Forgotpassword/checkemail/setnewpassword/alreadyaccount"><Continue fields={[password, newPassword]} label="Update Password" /></Link>

        {/* Back Link */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <Link href="/authfrontend/Signup">
            <span className="inline-flex items-center font-medium hover:underline transition-colors cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M7.364 3.05a.5.5 0 0 1 .707 0l5.657 5.657a.5.5 0 0 1 0 .707l-5.657 5.657a.5.5 0 0 1-.707-.707L12.293 9H1.5a.5.5 0 0 1 0-1h10.793L7.364 3.757a.5.5 0 0 1 0-.707z"
                />
              </svg>
              Back to Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
