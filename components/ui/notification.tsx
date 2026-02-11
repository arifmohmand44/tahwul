"use client";

import { useState, useRef, useEffect } from "react";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Notification Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
      >
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

        {/* Red Badge */}
        <div className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
          <div className="p-4 border-b font-semibold text-sm">
            Notifications
          </div>

          <div className="max-h-60 overflow-y-auto">
            <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
              <p className="text-sm font-medium">New message received</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>

            <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
              <p className="text-sm font-medium">System update completed</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>

            <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
              <p className="text-sm font-medium">New user registered</p>
              <p className="text-xs text-gray-500">Yesterday</p>
            </div>
          </div>

          <div className="p-3 text-center border-t">
            <button className="text-sm text-blue-600 hover:underline">
              View all
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
