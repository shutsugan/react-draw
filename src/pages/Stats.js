import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Chart from "../components/Chart";

const Stats = () => {
  const [drawings, setDrawings] = useState([]);

  const pptsData = useSelector((state) => state.pptsData);
  const lineWidth = useSelector((state) => state.lineWidth);

  useEffect(() => {
    const result = {};
    const chartData = [];

    pptsData.forEach(({ ppts, color }) => {
      result[color] = {
        color: color,
        count: ((result[color] && result[color].count) || 0) + ppts.length,
      };
    });

    for (const prop in result) {
      const chartObj = result[prop];
      chartData.push({
        color: chartObj.color,
        count: chartObj.count,
        area: chartObj.count * lineWidth,
      });
    }

    setDrawings(chartData);
  }, [pptsData]);

  return (
    <div className="flex justify-center">
      <Chart title="Drawn objects" xKey="color" yKey="count" data={drawings} />
    </div>
  );
};

export default Stats;
