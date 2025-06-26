"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function BarGraph({
  data,
  barColors,
  barGap,
}: {
  data: { name: string; value: number }[];
  barColors: string[];
  barGap: number;
}) {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          barCategoryGap={barGap}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            fontSize={12}
            stroke="#1C1C1C66"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            fontSize={12}
            stroke="#1C1C1C66"
            tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}K`)}
          />

          <Bar dataKey="value" radius={8}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
