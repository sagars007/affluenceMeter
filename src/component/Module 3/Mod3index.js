import React, { Component } from "react";
import BarChart from "../EmploymentDomain/Chart/BarChart";
import { BCOLOR4, XCOLOR4, YCOLOR4 } from "../EmploymentDomain/colors.style";
import FrameworkDiv1 from "../generalComponent/FrameworkDiv1";
import FrameworkDiv2 from "../generalComponent/FrameworkDiv2";
import FreqencyBoxComponent from "../generalComponent/FreqencyBoxComponent";
import PageHeader from "../generalComponent/PageHeader";
import { graph1finalAxis } from "../Middleware/EmpFunction";
import {
  filterBand,
  returnAllBandWithDivision4,
  SSreturnAllBandWithDivision,
  SSreturnAllBandWithDivision1,
  SSreturnAllBandWithDivision3,
} from "../Middleware/SocialNet";
import {
  Domain,
  FrequencyDiv,
  GeneralHeaders,
  LargeBarGraph,
  LargeConatiner,
} from "../styles/app.styles";
import { GeneralDiv } from "../styles/education.styles";
import YoutubeEmbed from "../YouTube";

export default class Mod3Index extends Component {
  constructor() {
    super();
    this.state = {
      domain: 0,
    };
  }
  toggleDomain = (e) => {
    this.setState({
      domain: e.target.value,
    });
  };
  render() {
    const band1 = filterBand("AA");
    const band2 = filterBand("A");
    const band3 = filterBand("BB");
    const band4 = filterBand("B");
    const XYAxsis1 = [
      SSreturnAllBandWithDivision(band1),
      SSreturnAllBandWithDivision(band2),
      SSreturnAllBandWithDivision(band3),
      SSreturnAllBandWithDivision(band4),
    ];
    const XYAxsis2 = [
      SSreturnAllBandWithDivision1(band1),
      SSreturnAllBandWithDivision1(band2),
      SSreturnAllBandWithDivision1(band3),
      SSreturnAllBandWithDivision1(band4),
    ];
    const XYAxsis3 = [
      SSreturnAllBandWithDivision3(band1),
      SSreturnAllBandWithDivision3(band2),
      SSreturnAllBandWithDivision3(band3),
      SSreturnAllBandWithDivision3(band4),
    ];
    const XYAxsis4 = [
      returnAllBandWithDivision4(band1),
      returnAllBandWithDivision4(band2),
      returnAllBandWithDivision4(band3),
      returnAllBandWithDivision4(band4),
    ];
    const labels = ["AA", "A", "BB", "B"];
    const labels1 = ["5000-4000", "4000-3000", "3000-2000", "2000-0"];
    const labels2 = ["30-25", "25-20", "20-10", "10-0"];
    const labels3 = ["10-7.5", "7.5-5", "5-2.5", "2.5-0"];
    const labels4 = ["True", "False"];
    const XY1 = graph1finalAxis(XYAxsis1, 4, 4);
    const XY2 = graph1finalAxis(XYAxsis2, 4, 4);
    const XY3 = graph1finalAxis(XYAxsis3, 4, 4);
    const XY4 = graph1finalAxis(XYAxsis4, 4, 4);

    return (
      <div className = "newdiv1">
        <Domain>
          <PageHeader
            title={"Know How Social Networking Model works"}
          ></PageHeader>
          <FrequencyDiv>
            <FreqencyBoxComponent
              name={"AA"}
              sum={band1.length}
              data={XY1[0]}
            ></FreqencyBoxComponent>
            <FreqencyBoxComponent
              name={"A"}
              sum={band1.length}
              data={XY1[1]}
            ></FreqencyBoxComponent>
            <FreqencyBoxComponent
              name={"BB"}
              sum={band1.length}
              data={XY1[2]}
            ></FreqencyBoxComponent>
            <FreqencyBoxComponent
              name={"B"}
              sum={band1.length}
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
          <LargeConatiner style={{ height: "auto", minHeight: "500px" }}>
            <GeneralHeaders>Know How Our Model Works</GeneralHeaders>
            <GeneralDiv
              style={{
                background: "inherit",
                boxShadow: "none",
                marginBottom: "50px",
                fontFamily: `"Heebo", sans-serif`,
                fontSize: "18px",
              }}
              padding={"30px"}
            >
              Though one’s activeness on social media rarely decides their
              credibility in market. Some factors could be considered while
              evaluating one’s social media. <br /> <br />
              Platforms like LinkedIn could tell user’s quality of network and
              social media reach. <br /> <br />
              Under this domain factors like connection quality and quantity,
              Frequency of posts, frequency of check-ins to
              cafes/restaurant/malls/clubs/airport, brand tie-up or sponsorship
              are taken into account. <br /> <br />
              For this data survey of 150 people from varying background was
              done. Varying data from only 100 connections to 5000 connections
              is being evaluated and scoring is done. <br /> <br />
              Frequency of posts is done on monthly basis from 0 posts to 30
              posts in a month. Likewise, check-ins observed in past month is
              considered from as low as 0 to 10 check-in per month.
              <br /> <br /> Generally middle class people don’t have any
              sponsorship or brand tie-up, so only 0.03% of total score is
              accountable for awarding someone who has sponsorship.
              <br />
              <br />
            </GeneralDiv>
          </LargeConatiner>
          <GeneralHeaders style={{ marginTop: "80px" }}>
            Choose Band And Visualise Data
          </GeneralHeaders>
          <GeneralHeaders
            style={{ marginTop: "20px", fontSize: "20px", color: "#8F8F8F" }}
          >
            Currently Visualising{" "}
            <select className="drpDwn" onChange={(e) => this.toggleDomain(e)}>
              <option value="0">AA</option>
              <option value="1">A</option>
              <option value="2">BB</option>
              <option value="3">B</option>
            </select>{" "}
            Data
          </GeneralHeaders>
          <FrameworkDiv1
            title1={"No. Of Connection Vs Band Division"}
            data={XY1}
            pieData={XYAxsis1[this.state.domain]}
            data1={XYAxsis1}
            label1={labels}
            label2={labels1}
            data21={XY2}
            data22={XYAxsis2}
            label22={labels2}
            XCOLOR={XCOLOR4}
            YCOLOR={YCOLOR4}
            BCOLOR={BCOLOR4}
            title2={"No. of Posts Vs Band Division"}
          ></FrameworkDiv1>
          <FrameworkDiv2
            title={"Check-Ins Vs Rating"}
            data={XY3}
            labelX={labels}
            labelY={labels3}
            XCOLOR={XCOLOR4}
            YCOLOR={YCOLOR4}
            BCOLOR={BCOLOR4}
          ></FrameworkDiv2>
          <FrameworkDiv2
            title={"Sponsorships Vs Rating"}
            data={XY4}
            labelX={labels}
            labelY={labels4}
            XCOLOR={XCOLOR4}
            YCOLOR={YCOLOR4}
            BCOLOR={BCOLOR4}
          ></FrameworkDiv2>

          <YoutubeEmbed
            embedId="rokGy0huYEA"
            link={"https://www.youtube.com/embed/"}
          />
        </Domain>
      </div>
    );
  }
}
