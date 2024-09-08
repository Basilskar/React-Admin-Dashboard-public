import React from "react";
import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Milk",
        data: [50, 52, 53, 54, 55, 56, 58],  // Milk price (₹/liter) over 7 months
      },
      {
        name: "Rice",
        data: [35, 34, 36, 38, 39, 37, 40],  // Rice price (₹/kg) over 7 months
      },
      {
        name: "Wheat",
        data: [22, 23, 21, 25, 24, 26, 28],  // Wheat price (₹/kg) over 7 months
      },
      {
        name: "Corn",
        data: [18, 19, 18.5, 20, 21, 19.5, 22],  // Corn price (₹/kg) over 7 months
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "100px",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff0000", "#ffd700", "#00ff00", "#0000ff"],  // Consistent colors for Milk (red), Rice (gold), Wheat (green), Corn (blue)
      },
      tooltip: {
        enabled: true,
        marker: {
          fillColors: ["#ff0000", "#ffd700", "#00ff00", "#0000ff"],  // Standardized colors for tooltip markers
        },
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2024-01-01T00:00:00.000Z",
          "2024-02-01T00:00:00.000Z",
          "2024-03-01T00:00:00.000Z",
          "2024-04-01T00:00:00.000Z",
          "2024-05-01T00:00:00.000Z",
          "2024-06-01T00:00:00.000Z",
          "2024-07-01T00:00:00.000Z",
        ],  // Timeline with monthly data
      },
      yaxis: {
        show: true,  // Show the y-axis to indicate commodity prices
        title: {
          text: "Price (in ₹)",
        },
      },
      toolbar: {
        show: false,
      },
      legend: {
        show: false,  // Hide the legend
      },
    },
  };

  return (
    <div className="CustomerReview">
      <Chart options={data.options} series={data.series} type="area" height={350} />
    </div>
  );
};

export default CustomerReview;
