"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  month: string;
  value: number;
}

interface PerformanceChartProps {
  title: string;
  unit: string;
  data: ChartData[];
}

export default function PerformanceChart({
  title,
  unit,
  data,
}: PerformanceChartProps) {
  return (
    <div className="bg-white rounded-xl border border-secondary shadow p-6">
      <h3 className="text-base font-semibold lg:font-bold text-primary mb-6">{title}</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f1f5f9"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            stroke="#9ca3af"
            fontSize={12}
            fontWeight={400}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#9ca3af"
            fontSize={12}
            fontWeight={400}
            width={40}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              padding: "8px",
            }}
            cursor={{ fill: "#0078D7", fillOpacity: 0.08 }}
            formatter={(value) => [`${value} ${unit}`, "Value"]}
            labelStyle={{ color: "#1D3557" }}
          />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
              <stop offset="70%" stopColor="#0078D7" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Bar
            dataKey="value"
            fill="url(#barGradient)"
            radius={[6, 6, 0, 0]}
            isAnimationActive={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
