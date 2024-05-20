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

const DataTrendAnalysisDP = () => {
  const data = {
    labels: ["2010 Q3", "2010 Q4"],
    datasets: [
      {
        label: "Opening Stock",
        data: [150, 150],
        backgroundColor: "#ff0200",
        stack: "stack1",
      },
      {
        label: "Closing Stock",
        data: [300, 300],
        backgroundColor: "#4b52e2",
        stack: "stack2",
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
  };

  return (
    <div>
      <div className="main-search mb-3">
        <div>
          <label htmlFor="yearFrom" className="mr-2">
            From{" "}
          </label>
          <select id="yearFrom">
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
          </select>
        </div>
        <div>
          <label htmlFor="quarterFrom" className="mr-2">
            Quarter{" "}
          </label>
          <select id="quarterFrom" defaultValue="3">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <label htmlFor="yearTo" className="mr-2">
            To{" "}
          </label>
          <select id="yearTo">
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
          </select>
        </div>
        <div>
          <label htmlFor="quarterTo" className="mr-2">
            Quarter{" "}
          </label>
          <select id="quarterTo" defaultValue="4">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <select id="form">
            <option value="form">Form</option>
          </select>
        </div>
        <div>
          <select id="products">
            <option value="products">Products</option>
          </select>
        </div>
      </div>
      <h1 className="text-center mb-4 p-3">
        Stock of Energy for Aviation Gasoline (F1) for 2010 Q3 to Q4
      </h1>
      <div className="stock-block">
        <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
};

export default DataTrendAnalysisDP;
