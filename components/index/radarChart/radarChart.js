import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export const Chart = (data) => {
  return (
    <ResponsiveContainer className="">
      <RadarChart outerRadius="80%" data={data.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
        <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};
