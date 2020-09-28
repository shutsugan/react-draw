import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Chart from "../components/Chart";

const Stats = () => {
  const [drawings, setDrawings] = useState([]);

  const pptsData = useSelector((state) => state.pptsData);

  useEffect(() => {
    var result = {};
    pptsData.forEach(({ color }) => {
      result[color] = {
        color: color,
        count: ((result[color] && result[color].count) || 0) + 1,
      };
    });

    const chartData = [];
    for (const prop in result) {
      const chartObj = result[prop];
      chartData.push({ color: chartObj.color, count: chartObj.count });
    }

    setDrawings(chartData);
  }, [pptsData]);

  return (
    <div>
      <Chart title="rawn objects" xKey="color" yKey="count" data={drawings} />
    </div>
  );
};

export default Stats;
