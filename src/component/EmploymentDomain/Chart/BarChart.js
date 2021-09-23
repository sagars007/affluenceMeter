import React from "react";
import ReactApexChart from "react-apexcharts";

export default function BarChart(props) {
  let { XCOLOR, YCOLOR, BCOLOR4, YDIVISION } = props;
  let series = [];
  props.labels.forEach((elem, index) => {
    let obj = { name: YDIVISION[index], data: props.data[index] };
    series.push(obj);
  });
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
      categories: props.labels,
      labels: {
        style: {
          //x axsis
          colors: XCOLOR,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          //y axsis Color
          colors: YCOLOR,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    //Bar Graph Color
    colors: BCOLOR4,
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
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={props.ht || 400}
      />
    </div>
  );
}
