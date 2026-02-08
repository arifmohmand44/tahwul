import MetricCard from './metric-card'
import { Metric } from '@/types/perspective'

interface MetricsGridProps {
  metrics: Metric[]
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          number={metric.number}
          label={metric.label}
          icon={metric.icon}
        />
      ))}
    </div>
  )
}
