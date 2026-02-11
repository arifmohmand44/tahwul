"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const MenuItems = [
  { label: "Profile", onClick: () => console.log("Go to Profile") },
  { label: "Settings", onClick: () => console.log("Go to Settings") },
  {
    label: "Logout",
    onClick: () => console.log("Perform Logout"),
    className: "text-red-500",
  },
];

interface ProfileProps {
  name: string;
  photo: string;
}

export default function ProfileDropdown(Profile: ProfileProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-4 px-2 py-2 bg-gray-50 hover:bg-gray-200 rounded-3xl transition-colors"
      >
        <Avatar className="w-8 h-8">
          <AvatarImage src={`/profile/${Profile.photo}?seed=${Profile.name}`} />
          <AvatarFallback>{Profile.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <span className="text-xs font-medium font-sans text-primary">
          {Profile.name}
        </span>

        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
          <ul className="py-2 text-sm">
            {MenuItems.map((item) => (
              <li
                key={item.label}
                onClick={item.onClick}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${item.className || ""}`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
