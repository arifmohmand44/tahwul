"use client";

interface ContentSectionProps {
  content: string;
}

export default function ContentSection({
  content,
}: ContentSectionProps) {
  return (
    <div className="bg-[#1B35570D] rounded-xl p-6 h-full">
      <p className="text-base font-normal text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}
