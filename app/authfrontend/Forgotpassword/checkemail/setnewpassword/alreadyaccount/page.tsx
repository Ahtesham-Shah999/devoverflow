'use client';

import { useState } from 'react';
import { useTheme } from '@/app/context/theme-context';
import Image from 'next/image';
import Link from 'next/link';
import Continue from "@/app/components/continuebutton/Continuebutton";

export default function SetNewPassword() {
  
  const { darkMode } = useTheme();

  return (
    <div
      className={`w-full max-w-md mx-auto p-8 rounded-2xl shadow-md relative z-10 ${
        darkMode ? 'bg-[#151821]' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Header */}
      <div className="pb-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h1
              className={`text-2xl font-semibold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
                Looks Like You Already
            </h1>
            <p
              className={`text-2xl font-semibold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Have an Account!
            </p>
          </div>
          <Image src="/images/icon.png" alt="DevOverflow Icon" width={40} height={40} />
        </div>
      </div>

      {/* Form Content */}
      <div className="space-y-6">
      <div className='flex flex-col gap-4'>
        <p  className={`text-sm mt-1 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
              It seems you’ve previously created an account using your email and password.
        </p>
        <p  className={`text-sm mt-1 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
              Would you like to link this account with your social login to keep everything in one place?
        </p>
        <p  className={`text-sm mt-1 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
              Don’t worry—your existing account will stay the same, and you can seamlessly access it using either method.
        </p>
      </div>

        <Continue fields={[]} label="Yes, Link My Accounts" />

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
              NO, i'll keep using Email Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
