import React from 'react'
import ContentSection from './content-section'
import { Section } from '@/types/perspective'

interface ContentGridProps {
  sections: Section[]
}

export default function ContentGrid({ sections }: ContentGridProps) {
  return (
    <div className="grid grid-cols-[1fr_3fr] lg:grid-cols-[1fr_5fr] gap-0 items-stretch">
      {sections.map((section) => (
        <React.Fragment key={section.id}>
          <div className="py-4 px-6 border-r-2 border-secondary">
            <ContentSection content={section.title} />
          </div>

          <div className="py-4 px-6">
            <ContentSection content={section.content} />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
