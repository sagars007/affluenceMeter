import React, { Component } from "react";
// import { Line } from "react-chartjs-2";
import ReactApexChart from "react-apexcharts";
import { GeneralHeaders, GraphContainerHeader } from "../styles/app.styles";

export default function EducationBarChart(props) {
  const series = [
    {
      name: "Tier 1",
      data: props.data[0],
    },
    {
      name: "Tier 2",
      data: props.data[1],
    },
    {
      name: "Tier 3",
      data: props.data[2],
    },
    {
      name: "Tier 4",
      data: props.data[3],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      categories: props.label,
      labels: {
        style: {
          //x axsis
          colors: ["#8b3845", "#8b3845", "#8b3845", "#8b3845", "#8b3845"],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          //y axsis Color
          colors: ["#8b3845", "#8b3845", "#8b3845", "#8b3845", "#8b3845"],
        },
      },
    },
    fill: {
      opacity: 1,
    },
    //Bar Graph Color
    colors: ["#008ffa", "#000", "#8b3845", "#00e495"],
    legend: {
      position: "right",
      offsetX: 0,
      offsetY: 50,
      labels: {
        useSeriesColors: true,
      },
    },
  };

  return (
    <div className="chartCol">
      <GeneralHeaders>College Tier Vs Rating</GeneralHeaders>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={400}
      />
    </div>
  );
}
