import React from "react";
import ReactApexChart from "react-apexcharts";
import { COLORS, GeneralHeaders } from "../styles/app.styles";
import { GeneralDiv } from "../styles/education.styles";
export default function SimpleBarChart(props) {
  let mark1 = [],
    mark2 = [],
    mark3 = [];
  if (props.markArray) {
    props.markArray.forEach((obj) => {
      mark1.push(obj.mark1);
      mark2.push(obj.mark2);
      mark3.push(obj.mark3);
    });
  }
  const series = [
    {
      name: "89 And Above",
      data: mark1,
    },
    {
      name: "75 - 89",
      data: mark2,
    },
    {
      name: "59 - 75",
      data: mark3,
    },
  ];
  var options = {
    series: [
      {
        name: "89 And Above",
        data: mark1,
      },
      {
        name: "75 - 89",
        data: mark2,
      },
      {
        name: "59 - 75",
        data: mark3,
      },
    ],
    colors: ["#ff4560", "#008ffa", "#00e495"],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
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
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    xaxis: {
      categories: props.label1,
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
    legend: {
      position: "right",
      offsetY: 40,
      labels: {
        useSeriesColors: true,
      },
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <div>
      <GeneralDiv
        style={{
          height: "40px",
          background: "inherit",
          boxShadow: "none",
          color: COLORS.color5,
          fontSize: "20px",
          textAlign: "center",
        }}
        width={"100%"}
        padding={"5%"}
      >
        Mark Distribution vs Credit
      </GeneralDiv>
      <ReactApexChart
        options={options}
        type="bar"
        style={{ marginTop: "10px" }}
        series={series}
        height={300}
      />
    </div>
  );
}
