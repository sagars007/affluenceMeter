import React, { Component } from "react";
import BarChart from "../EmploymentDomain/Chart/BarChart";
import { BCOLOR4, XCOLOR4, YCOLOR4 } from "../EmploymentDomain/colors.style";
import FreqencyBoxComponent from "../generalComponent/FreqencyBoxComponent";
import PageHeader from "../generalComponent/PageHeader";
import {
  Domain,
  FrequencyDiv,
  GeneralHeaders,
  LargeBarGraph,
} from "../styles/app.styles";
import {
  filterBand,
  graph1finalAxis,
  returnAllBandWithDivision1,
} from "./middleware";

export default class Module4 extends Component {
  constructor() {
    super();
    this.state = {
      domain: 0,
    };
  }
  render() {
    const band1 = filterBand("AA");
    const band2 = filterBand("A");
    const band3 = filterBand("BB");
    const band4 = filterBand("B");

    const data1 = [band1.length, band2.length, band3.length, band4.length];
    const XYAxsis1 = [
      returnAllBandWithDivision1(band1),
      returnAllBandWithDivision1(band2),
      returnAllBandWithDivision1(band3),
      returnAllBandWithDivision1(band4),
    ];
    const XY1 = graph1finalAxis(XYAxsis1, 4, 4);

    const label = ["AA", "A", "BB", "B"];
    const label1 = ["3", "2", "1", "0"];
    return (
      <div className="newdiv1">
        <Domain>
          <PageHeader title={"Know How Module 4 Model works"}></PageHeader>
          <FrequencyDiv>
            <FreqencyBoxComponent
              name={"AA"}
              sum={band1.length}
              data={data1}
            ></FreqencyBoxComponent>
            <FreqencyBoxComponent
              name={"A"}
              sum={band2.length}
              data={data1}
            ></FreqencyBoxComponent>
            <FreqencyBoxComponent
              name={"BB"}
              sum={band3.length}
              data={data1}
            ></FreqencyBoxComponent>
            <FreqencyBoxComponent
              name={"B"}
              sum={band4.length}
              data={data1}
            ></FreqencyBoxComponent>
          </FrequencyDiv>
          <LargeBarGraph>
            <GeneralHeaders>
              No of OTT Subscription Vs Band Division
            </GeneralHeaders>
            <BarChart
              labels={label}
              data={XY1}
              XCOLOR={XCOLOR4}
              YCOLOR={YCOLOR4}
              BCOLOR={BCOLOR4}
              YDIVISION={label1}
            ></BarChart>
          </LargeBarGraph>
        </Domain>
      </div>
    );
  }
}
