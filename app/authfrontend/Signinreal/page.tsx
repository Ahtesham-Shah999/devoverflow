'use client';
import { useState } from 'react';
import { useTheme } from '@/app/context/theme-context';
import Image from 'next/image';
import Link from 'next/link';
import Continue from "@/app/components/continuebutton/Continuebutton";

export default function Signinreal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { darkMode } = useTheme();

  return (
    <>
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
                Sign in
              </h1>
              <p
                className={`text-sm mt-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                to continue to DevFlow
              </p>
            </div>
            <Image src="/images/icon.png" alt="DevOverflow Icon" width={40} height={40} />
          </div>
        </div>

        {/* Form Content */}
        <div className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className={`block text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
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
                  ? 'bg-[#212734] border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className={`block text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 ${
                darkMode
                  ? 'bg-[#212734] border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Enter your password"
            />
            <div className="text-right">
              <Link href="/authfrontend/Forgotpassword">
                <button className="text-sm text-blue-500 hover:text-blue-600 font-medium transition-colors">
                  Forget password?
                </button>
              </Link>
            </div>
          </div>

          <Continue fields={[email, password]} label="Sign In" />

          {/* Sign Up Link */}
          <div
            className={`text-center text-sm mt-3 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Don’t have an account?{' '}
            <Link href="/authfrontend/Signup">
              <button className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                Sign up
              </button>
            </Link>
          </div>

          {/* Social Logins */}
          <div className="flex gap-3 pt-2">
            {/* GitHub */}
            <button
              className={`w-full border font-medium py-2.5 px-4 rounded-md transition-colors inline-flex items-center justify-center gap-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                darkMode
                  ? 'bg-[#212734] border-gray-600 text-white hover:bg-[#2a3140]'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Login with GitHub
            </button>

            {/* Google */}
            <button
              className={`w-full border font-medium py-2.5 px-4 rounded-md transition-colors inline-flex items-center justify-center gap-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                darkMode
                  ? 'bg-[#212734] border-gray-600 text-white hover:bg-[#2a3140]'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
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
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
