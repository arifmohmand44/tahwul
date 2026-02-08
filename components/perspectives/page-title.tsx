interface PageTitleProps {
  heading: string;
  title: string;
  subtitle: string;
  progress: number;
}

export default function PageTitle({
  heading,
  title,
  subtitle,
  progress,
}: PageTitleProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 bg-white p-6 border border-secondary rounded-xl shadow">
      <div className="flex-1">
        <span className="text-xs font-medium text-gray-500 border border-gray-200 rounded-3xl px-3 py-2 mb-6">{heading}</span>
        <h1 className="text-base font-semibold lg:font-bold text-primary mt-6 mb-1">
          {title}
        </h1>
        <p className="text-sm font-normal text-gray-600 text-bottom">{subtitle}</p>
      </div>

      {/* Progress Circle */}
      <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full border-[12px] border-green-600 bg-white">
        <div className="text-center">
          <span className="text-lg font-bold  text-primary">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
