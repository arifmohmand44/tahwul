"use client";

import { useState } from "react";
import Link from "next/link";
import navigationData from "@/data/navigation.json";
import Logo from "./logo";
import Favicon from "./favicon";
import { icons } from "./ui/icon";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`bg-primary relative text-white flex flex-col h-full transition-all duration-300 ${isOpen ? "w-56 lg:w-72 p-6" : "w-20 p-4"}`}
    >
      {/* Logo and Toggle */}
      <div className="mb-8 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {isOpen ? <Logo /> : <Favicon />}
        </div>
      </div>

      {/* Menu toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-5 right-[-18px] w-9 h-9 flex items-center justify-center bg-white hover:bg-gray-50 rounded-full border border-1 transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66666 4V12M8.33132 8.00667V8.254C8.35799 10.2347 8.26799 10.9233 7.43466 10.6033L7.22932 10.4827L7.06332 10.3673L6.70666 10.092L6.03999 9.512L5.35799 8.93667L5.02466 8.63467L4.87599 8.48333L4.70132 8.23067L4.66532 8.00667L4.70132 7.784L4.87599 7.53067L5.02466 7.38L5.35799 7.078L6.03999 6.502L6.70666 5.922L7.06332 5.64733L7.22932 5.532L7.43466 5.41067C8.26799 5.09133 8.35799 5.77933 8.33132 7.76V8.00667ZM8.33132 8.00667H13.3333"
            stroke="#747A8B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navigationData.navigation.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            title={!isOpen ? item.name : ""}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors justify-center md:justify-start ${
              pathname === item.href || pathname === item.link
                ? "bg-[#98AEC01A] text-white"
                : "text-blue-100 hover:bg-[#98AEC01A] hover:text-white"
            }`}
          >
            {icons[item.icon]}
            {isOpen && <span className="text-sm font-medium">{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      {isOpen && (
        <div className="pt-6 border-t border-gray-600 text-xs text-blue-100">
          © {new Date().getFullYear()} TAHWUL
        </div>
      )}
    </aside>
  );
}
