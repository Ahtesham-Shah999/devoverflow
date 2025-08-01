'use client';
import { useTheme } from '@/app/context/theme-context';
import Link from "next/link";

export default function Checkemail() {
  const { darkMode } = useTheme();

  return (
    <>
      {/* Container with dark/light mode support */}
      <div className={`w-full max-w-xl mx-auto rounded-lg shadow-lg relative z-10 
        ${darkMode ? 'bg-gray-900 text-white' : 'bg-white/95 text-gray-900 backdrop-blur-sm'}`}>

        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Check Your Email
              </h1>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                We sent a link to your provided email.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 pb-6 space-y-4">
          <Link href="/authfrontend/Forgotpassword/checkemail/setnewpassword">
          <button
             className={`w-full py-3 px-4 rounded-md text-sm font-medium transition-colors inline-flex items-center justify-center gap-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 hover:opacity-90  ${
                darkMode
                  ? "bg-gradient-to-r from-[#FF7000] via-[#E2985E] to-[#E2995F] text-white"
                  : "bg-gradient-to-r from-[#FF7000] via-[#E2985E] to-[#E2995F] text-white"
              }`}
          >
            Resend
          </button>
          </Link>

          {/* Link to Login */}
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
    </>
  );
}
