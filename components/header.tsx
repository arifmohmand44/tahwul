"use client";

import { Search, Menu, ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Header({ onMobileMenuToggle }: { onMobileMenuToggle: () => void }) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow">
      {/* Mobile Hamburger Button */}
      <button
        onClick={onMobileMenuToggle}
        className="md:hidden flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle mobile menu"
      >
        <Menu size={24} className="text-gray-600" />
      </button>

      <div className="flex-1 max-w-md pl-4 lg:pl-10">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-3 bg-[#F5F8FA] border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center pl-4 gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
          <svg
            className="w-5 h-5 text-gray-600"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.83419 13.1667C5.36486 13.5813 6.06619 13.8333 6.83419 13.8333C7.60219 13.8333 8.30352 13.5813 8.83419 13.1667M0.520858 8.76267C0.378858 9.66467 1.01286 10.2907 1.78886 10.6027C4.76419 11.7993 8.90419 11.7993 11.8795 10.6027C12.6555 10.2907 13.2895 9.66467 13.1475 8.76267C13.0609 8.208 12.6295 7.74667 12.3102 7.296C11.8922 6.698 11.8509 6.04667 11.8502 5.35267C11.8509 2.67333 9.60552 0.5 6.83419 0.5C4.06286 0.5 1.81752 2.67333 1.81752 5.35333C1.81752 6.04667 1.77619 6.69867 1.35752 7.296C1.03886 7.74667 0.608191 8.208 0.520858 8.76267Z"
              stroke="#8597A8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <button className="flex items-center gap-4 px-2 py-2 bg-gray-50 hover:bg-gray-200 rounded-3xl transition-colors">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/profile/avatar.jpg?seed=Mohamed" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium font-sans text-primary">Mohamed</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </header>
  );
}