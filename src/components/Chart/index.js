import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({ title, xKey, yKey, data }) => (
  <div className="chart">
    <h2>{title}</h2>
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis dataKey={yKey} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={yKey} stroke="#8884d8" />
    </LineChart>
  </div>
);

export default Chart;
