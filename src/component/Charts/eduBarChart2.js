import React from "react";
import ReactApexChart from "react-apexcharts";

export default function EduBarChart2(props) {
  console.log(props.data);
  let i0 = [],
    i1 = [],
    i2 = [],
    i3 = [],
    i4 = [],
    i5 = [],
    i6 = [];
  props.data.forEach((element) => {
    i0.push(element[0]);
    i1.push(element[1]);
    i2.push(element[2]);
    i3.push(element[3]);
    i4.push(element[4]);
    i5.push(element[5]);
    i6.push(element[6]);
  });
  const series = [
    {
      name: "Total 0 Internship",
      data: i0,
    },
    {
      name: "Total 1 Internship",
      data: i1,
    },
    {
      name: "Total 2 Internship",
      data: i2,
    },
    {
      name: "Total 3 Internship",
      data: i3,
    },
    {
      name: "Total 4 Internship",
      data: i4,
    },
    {
      name: "Total 5 Internship",
      data: i5,
    },
    {
      name: "Total 6 Internship",
      data: i6,
    },
  ];
  var options = {
    series: [
      {
        name: "Total 0 Internship",
        data: i0,
      },
      {
        name: "Total 1 Internship",
        data: i1,
      },
      {
        name: "Total 2 Internship",
        data: i2,
      },
      {
        name: "Total 3 Internship",
        data: i3,
      },
      {
        name: "Total 4 Internship",
        data: i4,
      },
      {
        name: "Total 5 Internship",
        data: i5,
      },
      {
        name: "Total 6 Internship",
        data: i6,
      },
    ],
    colors: [
      "#ff4560",
      "#008ffa",
      "#00e495",
      "#ffaf1a",
      "#000",
      "#5065a5",
      "#ff5722",
    ],
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
      <ReactApexChart
        options={options}
        type="bar"
        style={{ marginTop: "10px" }}
        series={series}
        height={400}
      />
    </div>
  );
}
