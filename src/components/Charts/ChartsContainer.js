import React from "react";
import Charts from "./Charts/Charts";
import "./Charts.scss";
import LineChart from "./Charts/Line";
import DoughnutChart from "./Doughnut";
import { Polar } from "./Polar";
export default function ChartsContainer() {
  return (
    <div className="row">
      <Charts />
      <LineChart />
      <Polar />
      <DoughnutChart />
      <LineChart />
      <Charts />
      <DoughnutChart />
      <LineChart />
      <Charts />
      <DoughnutChart />
      <Charts />
    </div>
  );
}
