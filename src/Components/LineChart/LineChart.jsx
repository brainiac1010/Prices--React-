import React from "react";
import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "Alice", math: 75, physics: 80, chemistry: 78 },
    { id: 2, name: "Bob", math: 88, physics: 85, chemistry: 82 },
    { id: 3, name: "Charlie", math: 92, physics: 90, chemistry: 95 },
    { id: 4, name: "Daisy", math: 68, physics: 70, chemistry: 65 },
    { id: 5, name: "Ethan", math: 85, physics: 88, chemistry: 84 },
    { id: 6, name: "Fiona", math: 73, physics: 75, chemistry: 72 },
    { id: 7, name: "George", math: 90, physics: 89, chemistry: 87 },
    { id: 8, name: "Hannah", math: 77, physics: 78, chemistry: 79 },
    { id: 9, name: "Ian", math: 80, physics: 82, chemistry: 85 },
    { id: 10, name: "Julia", math: 95, physics: 93, chemistry: 96 },
  ];

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LChart
          data={studentMarks}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="math" stroke="red" name="Math" />
          <Line type="monotone" dataKey="physics" stroke="green" name="Physics" />
          <Line type="monotone" dataKey="chemistry" stroke="blue" name="Chemistry" />
        </LChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
