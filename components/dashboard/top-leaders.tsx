"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface Leader {
  id: number;
  name: string;
  role: string;
  percentage: number;
  avatar: string;
  icon: string;
}

interface TopLeadersProps {
  leaders: Leader[];
}

export default function TopLeaders({ leaders }: TopLeadersProps) {
  return (
    <div className="bg-white rounded-xl border border-secondary shadow p-6">
      <h3 className="text-base font-bold text-primary mb-5">
        Top Performing Perspective Leaders
      </h3>

      <div className="space-y-0">
        {leaders.map((leader, index) => (
          <div
            key={leader.id}
            className={`flex items-center gap-3 border-b-2 py-3 border-gray-200 ${
              index === leaders.length - 1 ? "border-none" : ""
            }`}
          >
            <Avatar className="w-12 h-12">
              <AvatarImage src={`/leaders/${leader.icon}?seed=${leader.name}`} />
              <AvatarFallback>{leader.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-base font-medium text-primary">
                {leader.name}
              </p>
              <p className="text-base font-medium text-gray-400">
                {leader.role}
              </p>
            </div>
            <p className="text-base font-bold text-primary flex-shrink-0">
              {leader.percentage}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
