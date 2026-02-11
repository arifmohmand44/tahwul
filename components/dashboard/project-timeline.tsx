"use client";

import YearDropdown from "../ui/year-dropdown";
interface ProjectTimelineProps {
  title: string;
  year: string;
  phases: Array<{
    id: number;
    name: string;
    date: string;
  }>;
}

export default function ProjectTimeline({
  title,
  phases,
}: ProjectTimelineProps) {
  const sidePadding = 5;
  const usableWidth = 100 - sidePadding * 2;
  const total = phases.length - 1;

  return (
    <div className="mb-6 p-4 border border-secondary bg-white rounded-xl shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold lg:font-bold text-primary">{title}</h3>
        <YearDropdown />
      </div>

      {/* Timeline Bar */}
      <div className="relative h-3.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-green-600 rounded-full"
          style={{ width: "30%" }}
        />

        {/* Phase Dots */}
        {phases.map((phase, index) => {
          const leftPosition = sidePadding + (index / total) * usableWidth;

          return (
            <div
              key={phase.id}
              className="absolute top-[2px]"
              style={{
                left: `${leftPosition}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  index < 2 ? "bg-white" : "bg-red-600"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Phase Labels */}
      <div className="relative mt-6">
        {phases.map((phase, index) => {
          const leftPosition = sidePadding + (index / total) * usableWidth;

          return (
            <div
              key={phase.id}
              className="absolute text-center w-12 md:w-20 lg:w-auto"
              style={{
                left: `${leftPosition}%`,
                transform: "translateX(-50%)",
              }}
            >
              <span className="text-xxs sm:text-xs lg:text-sm text-gray-400 font-normal block mb-2 lg:mb-1">
                {phase.date}
              </span>

              <p className="text-xxs sm:text-xs lg:text-sm leading-tight text-primary font-normal lg:font-medium whitespace-normal lg:whitespace-nowrap">
                {phase.name}
              </p>
            </div>
          );
        })}

        {/* Give container height so absolute items show properly */}
        <div className="h-14" />
      </div>
    </div>
  );
}
