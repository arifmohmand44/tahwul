"use client";
import { useRouter } from "next/navigation";
interface BreadcrumbSectionProps {
  breadcrumb: string;
}

export default function BreadcrumbSection({
  breadcrumb,
}: BreadcrumbSectionProps) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 text-sm">
      <svg
        onClick={() => router.back()}
        className="w-8 h-8 text-gray-400 cursor-pointer"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.66666 7.99984H13.3333M2.66666 7.99984C2.66666 8.8785 5.99999 11.3332 5.99999 11.3332M2.66666 7.99984C2.66666 7.12117 5.99999 4.6665 5.99999 4.6665"
          stroke="#1D3557"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-base font-bold text-primary">{breadcrumb}</span>
    </div>
  );
}
