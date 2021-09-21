import React from "react";
import ReactApexChart from "react-apexcharts";

export default function SmallLine(props) {
  var options1 = {
    colors: ["#8b3845"],
    series: [
      {
        data: props.data,
      },
    ],
    chart: {
      type: "line",
      width: 100,
      height: 20,
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  let series = [
    {
      data: props.data,
    },
  ];
  return (
    <div>
      <ReactApexChart options={options1} series={series} />
    </div>
  );
}
