"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface AngkutanChartProps {
  totalTrayek: number;
  totalArmada: number;
}

export default function AngkutanChart({ totalTrayek, totalArmada }: AngkutanChartProps) {
  const chartData = [
    { name: "Total Trayek", value: totalTrayek },
    { name: "Total Armada", value: totalArmada },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Statistik Angkutan</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4F46E5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
