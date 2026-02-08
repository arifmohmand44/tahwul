'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import perspectiveData from '@/data/perspective.json'

export default function LeadersSection() {
  return (
    <div className="border border-secondary bg-white shadow rounded-xl mt-4 p-6">
      <h3 className="text-base font-semibold lg:font-bold text-primary mb-4">Leaders</h3>
      <div className="flex flex-col sm:flex-row gap-4">
        {perspectiveData.leaders.map((leader) => (
          <div key={leader.id} className="flex items-center gap-3 bg-[#F5F8FA] rounded-xl p-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={`/leaders/ahmed.jpg?seed=${leader.name}`} />
              <AvatarFallback>{leader.avatar}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-base font-medium text-primary">{leader.name}</p>
              <p className="text-base font-medium text-gray-500">{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
