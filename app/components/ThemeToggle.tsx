"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 text-zinc-800 dark:text-zinc-200 hover:border-[#82FF00] dark:hover:border-[#82FF00] hover:text-[#82FF00] dark:hover:text-[#82FF00] transition-all duration-300 flex items-center justify-center focus:outline-none"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        // Sun Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4.5 h-4.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m0 13.5V21M5.25 12H3m18 0h-2.25m-14.303-6.03l1.591 1.591M17.118 17.118l1.591 1.591M6.837 17.118l-1.591 1.591M17.118 6.837l-1.591-1.591M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
          />
        </svg>
      ) : (
        // Moon Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4.5 h-4.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
    </button>
  );
}
