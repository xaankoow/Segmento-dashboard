import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";

const KeywordChart = ({ type = "line", rawData }) => {
  const [data, setData] = useState([]);
  const [label, setLabel] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]);
  const [options, setOptions] = useState({
    line: {
      scales: {
        yAxis: {
          min: 0,
          max: 10,
          reverse: true,
          ticks: {
            // reverse: true,

            display: true,
          },
        },
        xAxis: {
          ticks: {
            // reverse: true,

            display: true,
          },
          // reverse: true,
        },
      },
      responsive: true,
      plugins: {
        labels: {
          display: true,
        },
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "",
        },
      },
    },
    bar: {
      plugins: {
        title: {
          display: false,
          text: "Chart.js Bar Chart - Stacked",
        },
        legend: {
          display: false,
          position: "top",
        },
      },
      responsive: true,
      scales: {
        yAxis: {
          stacked: true,
          ticks: {
            display: true,
          },
        },
        xAxis: {
          stacked: true,
          ticks: {
            display: true,
          },
        },
      },
    },
  });

  useEffect(() => {}, [rawData]);

  if (type === "line") {
    return <Line data={data} options={options.line} />;
  }
  return <Bar data={data} options={options.bar} />;
};

export default KeywordChart;
