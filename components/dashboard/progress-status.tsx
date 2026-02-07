"use client";

import ProgressStatusGrid from "./progress-status-grid";

interface StatusItem {
  id: number;
  name: string;
  percentage: number;
}

interface ProgressStatusProps {
  items: StatusItem[];
}

const legendLabel = [
  { name: "Not Started", color: "bg-gray-500" },
  { name: "In Progress", color: "bg-orange-400" },
  { name: "Completed", color: "bg-green-600" },
  { name: "Partially Uploaded", color: "bg-blue-900" },
  { name: "Fully Uploaded", color: "bg-blue-600" },
  { name: "Delayed", color: "bg-red-500" },
];

export default function ProgressStatus({ items }: ProgressStatusProps) {
  return (
    <div className="mb-6 p-4 border border-secondary bg-white rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold text-primary mb-3">
          Progress Status
        </h3>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-sm font-normal text-primary justify-center">
          {legendLabel.map((label) => (
            <div key={label.name} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${label.color}`} />
              <span>{label.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Status Boxes - Dark boxes with percentages */}
      <div className="grid grid-cols-10 gap-4 mb-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-primary rounded-xl p-4 text-center text-white"
          >
            <p className="text-xs font-bold leading-tight mb-3">{item.name}</p>
            <span className="text-sm font-bold px-3 text-white py-1 bg-[#98AEC01A] rounded-3xl">
              {item.percentage.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>

      {/* Grid of boxes with colored badges */}
      <ProgressStatusGrid />
    </div>
  );
}
