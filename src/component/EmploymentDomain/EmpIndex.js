import React, { Component } from "react";
import FrameworkDiv1 from "../generalComponent/FrameworkDiv1";
import FrameworkDiv2 from "../generalComponent/FrameworkDiv2";
import FreqencyBoxComponent from "../generalComponent/FreqencyBoxComponent";
import PageHeader from "../generalComponent/PageHeader";
import {
  filterBand,
  graph1finalAxis,
  MatchSalaryToBand,
  returnAllBandWithDivision,
  returnAllBandWithDivision1,
  returnAllBandWithDivision3,
  returnAllBandWithDivision3C,
  returnAllBandWithDivision3D,
} from "../Middleware/EmpFunction";
import {
  Domain,
  FrequencyDiv,
  LargeBarGraph,
  GeneralHeaders,
  LargeConatiner,
} from "../styles/app.styles";
import BarChart from "./Chart/BarChart";
import { BCOLOR4, YCOLOR4, XCOLOR4, YCOLOR6 } from "./colors.style";

export default class EmpIndex extends Component {
  constructor() {
    super();
    this.state = {
      band: 0,
    };
  }
  toggleBand = (e) => {
    this.setState({
      band: e.target.value,
    });
  };
  render() {
    const band1 = filterBand("AA");
    const band2 = filterBand("A");
    const band3 = filterBand("BB");
    const band4 = filterBand("B");
    const XYAxsis1 = [
      returnAllBandWithDivision(band1),
      returnAllBandWithDivision(band2),
      returnAllBandWithDivision(band3),
      returnAllBandWithDivision(band4),
    ];
    const XYAxsis2 = [
      returnAllBandWithDivision1(band1),
      returnAllBandWithDivision1(band2),
      returnAllBandWithDivision1(band3),
      returnAllBandWithDivision1(band4),
    ];
    const XYAxsis3 = [
      returnAllBandWithDivision3(band1),
      returnAllBandWithDivision3(band2),
      returnAllBandWithDivision3(band3),
      returnAllBandWithDivision3(band4),
    ];
    const XYAxsis3C = [
      returnAllBandWithDivision3C(band1),
      returnAllBandWithDivision3C(band2),
      returnAllBandWithDivision3C(band3),
      returnAllBandWithDivision3C(band4),
    ];
    const XYAxsis3D = [
      returnAllBandWithDivision3D(band1),
      returnAllBandWithDivision3D(band2),
      returnAllBandWithDivision3D(band3),
      returnAllBandWithDivision3D(band4),
    ];
    const labels = ["AA", "A", "BB", "B"];
    const labels1 = [">=90,000", "60-90,000", "30-60000", "0-30000"];
    const labels2 = ["7.5-10", "5-7.5", "2.5-5", "0-2.5"];
    const labels3 = ["4", "3", "2", "1"];
    const labels4 = ["5", "4", "3", "2", "1", "0"];
    const XY1 = graph1finalAxis(XYAxsis1, 4, 4);
    const XY2 = graph1finalAxis(XYAxsis2, 4, 4);
    const XY3 = graph1finalAxis(XYAxsis3, 4, 4);
    const XY4 = graph1finalAxis(XYAxsis3C, 4, 4);
    const XY5 = graph1finalAxis(XYAxsis3D, 4, 6);

    return (
      <div>
        <Domain>
          <PageHeader title={"Know How Employment Model works"}></PageHeader>
          <FrequencyDiv>
            <FreqencyBoxComponent
              name={"AA"}
              sum={band1.length}
              data={XY1[0]}
            ></FreqencyBoxComponent>
            <FreqencyBoxComponent
              name={"A"}
              sum={band2.length}
              data={XY1[1]}
            ></FreqencyBoxComponent>
            <FreqencyBoxComponent
              name={"BB"}
              sum={band3.length}
              data={XY1[2]}
            ></FreqencyBoxComponent>
            <FreqencyBoxComponent
              name={"B"}
              sum={band4.length}
              data={XY1[3]}
            ></FreqencyBoxComponent>
          </FrequencyDiv>
          <LargeBarGraph>
            <GeneralHeaders>Salary Vs Band Division</GeneralHeaders>
            <BarChart
              labels={labels}
              data={XY1}
              XCOLOR={XCOLOR4}
              YCOLOR={YCOLOR4}
              BCOLOR={BCOLOR4}
              YDIVISION={labels1}
            ></BarChart>
          </LargeBarGraph>
          <LargeConatiner>
            <GeneralHeaders>Know How Our Model Works</GeneralHeaders>
          </LargeConatiner>
          <GeneralHeaders style={{ marginTop: "80px" }}>
            Choose Band And Visulaise Data
          </GeneralHeaders>
          <GeneralHeaders
            style={{ marginTop: "20px", fontSize: "20px", color: "#8F8F8F" }}
          >
            Currently Visulaising{" "}
            <select className="drpDwn" onChange={(e) => this.toggleBand(e)}>
              <option value="0">AA</option>
              <option value="1">A</option>
              <option value="2">BB</option>
              <option value="3">B</option>
            </select>{" "}
            Data
          </GeneralHeaders>
          <FrameworkDiv1
            title1={"Salary Vs Band Division"}
            data={XY1}
            pieData={XYAxsis1[this.state.band]}
            data1={XYAxsis1}
            label1={labels}
            label2={labels1}
            data21={XY2}
            data22={XYAxsis2}
            label22={labels2}
            XCOLOR={XCOLOR4}
            YCOLOR={YCOLOR4}
            BCOLOR={BCOLOR4}
            title2={"Years of Experience Vs Band Division"}
          ></FrameworkDiv1>
          <FrameworkDiv2
            title={"Position Vs Rating"}
            data={XY3}
            labelX={labels}
            labelY={labels3}
            XCOLOR={XCOLOR4}
            YCOLOR={YCOLOR4}
            BCOLOR={BCOLOR4}
          ></FrameworkDiv2>
          <FrameworkDiv2
            title={"Company Vs Rating"}
            data={XY4}
            labelX={labels}
            labelY={labels3}
            XCOLOR={XCOLOR4}
            YCOLOR={YCOLOR4}
            BCOLOR={BCOLOR4}
          ></FrameworkDiv2>
          <FrameworkDiv2
            title={"Unemployment Years Vs Rating"}
            data={XY5}
            labelX={labels}
            labelY={labels4}
            XCOLOR={XCOLOR4}
            YCOLOR={YCOLOR6}
            BCOLOR={BCOLOR4}
          ></FrameworkDiv2>
        </Domain>
      </div>
    );
  }
}
