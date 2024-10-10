import React from "react";
import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Soybean",
        data: [4000, 4200, 4400, 4600, 4500, 4700, 4900],  // Soybean price (₹/quintal) over 7 months
      },
      {
        name: "Rice",
        data: [3500, 3400, 3600, 3800, 3900, 3700, 4000],  // Rice price (₹/quintal) over 7 months
      },
      {
        name: "Wheat",
        data: [2200, 2300, 2100, 2500, 2400, 2600, 2800],  // Wheat price (₹/quintal) over 7 months
      },
      {
        name: "Corn",
        data: [1800, 1900, 1850, 2000, 2100, 1950, 2200],  // Corn price (₹/quintal) over 7 months
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
        colors: ["#ff0000", "#ffd700", "#00ff00", "#0000ff"],  // Consistent colors for Soybean (red), Rice (gold), Wheat (green), Corn (blue)
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
          text: "Price (in ₹/quintal)",
        },
      },
      toolbar: {
        show: false,
      },
      legend: {
        show: true,  // Show the legend
        position: "top",  // Position legend at the top
        markers: {
          width: 0,  // Hide marker swatches (no colors in the legend)
        },
        labels: {
          useSeriesColors: false,
        },
        fontSize: "14px",  // Adjust font size
        fontWeight: 700,  // Make the legend bold
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
