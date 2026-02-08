"use client";

import { icons } from "@/components/ui/icon";

interface MetricCardProps {
  number: number;
  label: string;
  icon: string;
}

export default function MetricCard({ number, label, icon }: MetricCardProps) {
  return (
    <div className="bg-white border border-secondary rounded-xl p-6 flex items-center gap-4 shadow">
      <div className="flex-shrink-0">{icons[icon]}</div>
      <div>
        <div className="text-2xl font-semibold lg:font-bold text-primary">{number}</div>
        <div className="text-xs lg:text-sm font-normal text-gray-600">{label}</div>
      </div>
    </div>
  );
}
