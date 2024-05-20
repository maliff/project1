import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DataTrendAnalysis = () => {
  const data = {
    labels: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
    ],
    datasets: [
      {
        label: "m",
        data: [100, 8000, 2000, 600, 300, 400, 200, 500, 200, 500],
        backgroundColor: "#ff0200",
      },
      {
        label: "b",
        data: [100, 20000, 100, 250, 600, 700, 300, 100, 200, 300],
        backgroundColor: "#4b52e2",
      },
      {
        label: "bm",
        data: [100, 4000, 3000, 2000, 4000, 500, 6000, 40000, 40000, 500],
        backgroundColor: "#2896e5",
      },
      {
        label: "h",
        data: [
          60000, 20400, 60000, 50000, 40000, 50000, 60000, 50000, 50000, 50600,
        ],
        backgroundColor: "#02afae",
      },
      {
        label: "o",
        data: [30000, 8000, 30000, 2000, 3000, 3000, 600, 7000, 9000, 10000],
        backgroundColor: "#ff6e00",
      },
      {
        label: "k",
        data: [100, 20800, 20000, 5000, 7000, 900, 800, 5000, 4000],
        backgroundColor: "#ffe700",
      },
      {
        label: "hm",
        data: [100, 2000, 2000, 3000, 400, 5000, 6000, 3000, 6000],
        backgroundColor: "#6ded4e",
      },
      {
        label: "p",
        data: [100, 2000, 200, 3000, 5000, 6000, 40000, 8000, 600, 9000],
        backgroundColor: "#fb3f71",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    indexAxis: "y",
  };

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default DataTrendAnalysis;
