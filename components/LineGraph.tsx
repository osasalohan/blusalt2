"use client";

import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", thisYear: 9000, lastYear: 5000 },
  { name: "Feb", thisYear: 11000, lastYear: 1000 },
  { name: "Mar", thisYear: 3000, lastYear: 9500 },
  { name: "Apr", thisYear: 18000, lastYear: 13000 },
  { name: "May", thisYear: 2000, lastYear: 6000 },
  { name: "Jun", thisYear: 10000, lastYear: 15000 },
  { name: "Jul", thisYear: 15000, lastYear: 12000 },
];

export default function LineGraph() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="thisYearGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1C1C1C" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#1C1C1C" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="#1C1C1C66"
            fontSize={12}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            stroke="#1C1C1C66"
            fontSize={12}
            tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}K`)}
          />

          <Area
            type="basis"
            dataKey="thisYear"
            stroke="#1C1C1C"
            strokeWidth={2}
            fill="url(#thisYearGradient)"
            dot={false}
            activeDot={false}
            isAnimationActive={false}
          />

          <Line
            type="basis"
            dataKey="lastYear"
            stroke="#A8C5DA"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
            activeDot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
