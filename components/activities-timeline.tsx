"use client";

interface Activity {
  id: number;
  title: string;
  description: string;
  timeAgo: string;
}

interface ActivitiesTimelineProps {
  activities: Activity[];
}

export default function ActivitiesTimeline({
  activities,
}: ActivitiesTimelineProps) {
  return (
    <div className="bg-white rounded-xl border border-secondary p-6 shadow">
      <h2 className="text-base font-semibold lg:font-bold text-primary mb-6">
        Recent Activities
      </h2>

      <div className="space-y-2">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-2 lg:gap-4 border-t-2 border-secondary py-2"
          >
            {/* Timeline dot */}
            <div className="flex flex-col items-center pt-2">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 lg:gap-6 min-w-0">
              <p className="text-sm lg:text-base font-normal lg:font-medium text-primary break-words">
                {activity.title} {activity.description}
              </p>

              <p className="text-xs font-normal text-gray-400 whitespace-nowrap">
                {activity.timeAgo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
