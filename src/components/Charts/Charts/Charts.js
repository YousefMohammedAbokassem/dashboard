import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTranslation } from "react-i18next";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Charts() {
  const [t] = useTranslation();
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      y: {
        // beginAtZero: false, // To start the axis from non-zero value
        // reverse: true, // To invert the y-axis
        position: "right",
      },
      x: {
        // beginAtZero: false, // To start the axis from non-zero value
        reverse: true, // To invert the y-axis
        position: "bottom",
      },
    },
  };

  const labels = [
    t("January"),
    t("February"),
    t("March"),
    t("April"),
    t("May"),
    t("June"),
    t("July"),
  ];
  const data = {
    labels,
    datasets: [
      {
        label: t("Dataset1"),
        data: [100, 200, 300, 400, 500, 100, 200],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: t("Dataset2"),
        data: [200, 100, 300, 500, 50, 300, 400],
        backgroundColor: "#d6338482",
      },
      {
        label: t("Dataset3"),
        data: [200, 1000, 300, 900, 400, 60, 100],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="col-lg-6 mt-4 col-xxl-4">
      <Bar options={options} data={data} className="Charts" />
    </div>
  );
}
