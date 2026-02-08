import { icons } from "../ui/icon";

interface Metric {
  id: number;
  value: string;
  label: string;
  icon: string;
}

interface TimelineMetricsProps {
  metrics: Metric[];
}

export default function TimelineMetrics({ metrics }: TimelineMetricsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-6">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-white rounded-xl p-5 border border-secondary shadow flex flex-col justify-between"
        >
          <div className="flex items-center justify-between">
            <p className="text-xl lg:text-2xl font-bold text-gray-900">{metric.value}</p>
            <div className="text-red-500">{icons[metric.icon]}</div>
          </div>

          <p className="text-sm font-normal text-gray-400 mt-1">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
