"use client";

import { useEffect, useState } from "react";

interface SemiGaugeProps {
  color?: string;
  percentage?: number;
  label?: string;
}

export default function SemiGauge({
  color = "#dc2626",
  percentage = 65,
  label = "Basic Standards 2025",
}: SemiGaugeProps) {
  const radius = 150;
  const stroke = 16;
  const normalizedRadius = radius - stroke / 1;
  const circumference = Math.PI * normalizedRadius;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // small delay makes animation smoother on mount
    const timeout = setTimeout(() => {
      setProgress(percentage);
    }, 100);

    return () => clearTimeout(timeout);
  }, [percentage]);

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        height={radius + 20}
        width={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius + 20}`}
      >
        {/* Background Arc */}
        <path
          d={`
            M ${stroke} ${radius}
            A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${
            radius * 2 - stroke
          } ${radius}
          `}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={stroke}
          strokeLinecap="round"
        />

        {/* Animated Progress Arc */}
        <path
          d={`
            M ${stroke} ${radius}
            A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${
            radius * 2 - stroke
          } ${radius}
          `}
          fill="transparent"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Center Text */}
      <div className="absolute bottom-3 flex flex-col items-center">
        <span className="text-[44px] font-bold text-primary mb-5">
          {Math.round(progress)}%
        </span>
        <span className="text-sm font-normal text-gray-500">
          {label}
        </span>
      </div>
    </div>
  );
}
