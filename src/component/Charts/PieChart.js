import React from "react";
import { GeneralHeaders } from "../styles/app.styles";
import ReactApexChart from "react-apexcharts";

export default function PieChart(props) {
  let { lenData, tierData, label } = props;
  var options = {
    series: lenData,
    chart: {
      width: 480,
      type: "pie",
    },
    labels: label,
    colors: ["#8b3845", "#008ff9", "#000000", "#00e495", "#ffffff"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  const series = lenData;
  return (
    <div>
      <ReactApexChart
        style={{ marginTop: "90px", marginLeft: "7%" }}
        options={options}
        series={series}
        type="pie"
        height={440}
      />
    </div>
  );
}
