"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Nigeria", value: 38.6 },
  { name: "Kenya", value: 30.8 },
  { name: "Ghana", value: 22.5 },
  { name: "Benin Republic", value: 8.1 },
];

const COLORS = ["#1C1C1C", "#A1E3CB", "#B1E3FF", "#A8C5DA"];

export default function DonutGraph() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={30}
            outerRadius={70}
            cornerRadius={6}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            stroke="#ffffff"
            strokeWidth={4}
            isAnimationActive={false}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
