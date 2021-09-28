import React, { Component } from "react";
import BarChart from "../EmploymentDomain/Chart/BarChart";
import PieChart from "../EmploymentDomain/Chart/PieChart";
import { BCOLOR4, XCOLOR4, YCOLOR4 } from "../EmploymentDomain/colors.style";
import FrameworkDiv1 from "../generalComponent/FrameworkDiv1";
import FreqencyBoxComponent from "../generalComponent/FreqencyBoxComponent";
import PageHeader from "../generalComponent/PageHeader";
import {
  COLORS,
  Domain,
  FrequencyDiv,
  GeneralHeaders,
  LargeBarGraph,
  LargeConatiner,
} from "../styles/app.styles";
import { GeneralDiv } from "../styles/education.styles";
import {
  filterBand,
  graph1finalAxis,
  MarryMiddleWare,
  returnAllBandWithDivision1,
  returnAllBandWithDivision2,
} from "./middleware";

export default class Module4 extends Component {
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

    const data1 = [band1.length, band2.length, band3.length, band4.length];
    const XYAxsis1 = [
      returnAllBandWithDivision1(band1),
      returnAllBandWithDivision1(band2),
      returnAllBandWithDivision1(band3),
      returnAllBandWithDivision1(band4),
    ];
    const XYAxsis2 = [
      returnAllBandWithDivision2(band1),
      returnAllBandWithDivision2(band2),
      returnAllBandWithDivision2(band3),
      returnAllBandWithDivision2(band4),
    ];
    const XYAxsis3 = [
      MarryMiddleWare(band1),
      MarryMiddleWare(band2),
      MarryMiddleWare(band3),
      MarryMiddleWare(band4),
    ];
    const XY1 = graph1finalAxis(XYAxsis1, 4, 4);
    const XY2 = graph1finalAxis(XYAxsis2, 4, 4);
    const label = ["AA", "A", "BB", "B"];
    const label1 = ["3", "2", "1", "0"];
    const label2 = ["4", "3", "2", "1"];
    const label3 = [
      "MARRIED",
      "UNMARRIED",
      "MARRIED && SPOUSE IS EMPLOYED",
      "MARRIED && SPOUSE IS UNEMPLOYED",
    ];
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
          <LargeConatiner
            style={{
              height: "auto",
              minHeight: "1020px !important",
              paddingBottom: "50px",
            }}
            id="lrgContEdu"
          >
            <GeneralHeaders>Know How Our Model Works</GeneralHeaders>
            <GeneralDiv
              style={{
                background: "inherit",
                boxShadow: "none",
                minheight: "70%",
                height: "auto",
                fontFamily: `"Heebo", sans-serif`,
                fontSize: "18px",
                wordBreak: "break-all",
              }}
              padding={"30px"}
            >
              The analysis and survey were done on 150 middle class people
              varying from having their hometown in state/national capitals to
              rural areas. Hometown, is considered as one’s owned housing
              property hence having a house in high end cities like Mumbai,
              Delhi etc will be given high points in credit rating. <br />
              <br />
              Current town means current living position of the user. Generally
              these days one’s current city and hometown aren’t same. Current
              city is considered for credit rating as it show one’s capability
              to sustain in the city and bear the living expenses.
              <br />
              <br />
              Martial status and spouse job are also considered for credit
              rating. If one’s martial status is single then his/her credit
              rating won’t be affected but if someone is married and spouse is
              working and earning then extra points have been allotted whereas
              if spouse is dependent on the user then points are deducted in
              credit rating. OTT platforms owned by the user is also considered.
              Many platforms like Netflix, Amazon Prime have Facebook signups
              which makes analysis more diverse. User having multiple OTT are
              awarded points as their income allows them to spend on
              entertainment hence this could also be considered in credit
              rating.
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
            title1={"No. Of OTT Connection Frequency Distribution"}
            data={XY1}
            pieData={XYAxsis1[this.state.domain]}
            data1={XYAxsis1}
            label1={label}
            label2={label1}
            data21={XY2}
            data22={XYAxsis2}
            label22={label2}
            XCOLOR={XCOLOR4}
            YCOLOR={YCOLOR4}
            BCOLOR={BCOLOR4}
            pieContent={`
            The pie chart shows the distribution of frequency for different no subscription for selected tier. For 
            example there are 15 individuals with 3 subscription who fall under band AA
            `}
            title2={"Current Location Vs Band Division"}
          ></FrameworkDiv1>
          <GeneralDiv
            style={{
              height: "auto",
              minHeight: "150px",
              marginLeft: "11%",
              borderRadius: "20px",
            }}
            width={"80%"}
            padding={"1%"}
          >
            <GeneralHeaders>Current Location Vs Band Division</GeneralHeaders>
            <GeneralDiv
              style={{
                height: "10%",
                background: "inherit",
                boxShadow: "none",
                color: COLORS.color1,
                marginTop: "10px",
              }}
            >
              Current town means current living position of the user. Generally
              these days one’s current city and hometown aren’t same. Current
              city is considered for credit rating as it show one’s capability
              to sustain in the city and bear the living expenses.We have mapped
              geographical location and devided it into 4 bands numbered from
              (1-4) 1 being the highest
            </GeneralDiv>
          </GeneralDiv>
          <GeneralDiv
            width={"80%"}
            padding={"2%"}
            style={{ height: "400px", marginTop: "80px", marginLeft: "11%" }}
            radius={"20px"}
          >
            <GeneralHeaders></GeneralHeaders>
            <PieChart
              data={XYAxsis3[this.state.domain]}
              labels={label3}
              XCOLOR={XCOLOR4}
            ></PieChart>
          </GeneralDiv>
          <GeneralDiv
            style={{
              height: "auto",
              minHeight: "150px",
              marginLeft: "11%",
              borderRadius: "20px",
              marginTop: "100px",
            }}
            width={"80%"}
            padding={"1%"}
          >
            <GeneralHeaders>Marital Status Vs Band Division</GeneralHeaders>
            <GeneralDiv
              style={{
                height: "10%",
                background: "inherit",
                boxShadow: "none",
                color: COLORS.color1,
                marginTop: "10px",
              }}
            >
              Martial status and spouse job are also considered for credit
              rating. If one’s martial status is single then his/her credit
              rating won’t be affected but if someone is married and spouse is
              working and earning then extra points have been allotted whereas
              if spouse is dependent on the user then points are deducted in
              credit rating. For each selected band rating the above pie chart
              can show how many indivials are married, unmarried, whether their
              spouse's are having job or not
            </GeneralDiv>
          </GeneralDiv>
          <YoutubeEmbed
            embedId="rokGy0huYEA"
            link={"https://www.youtube.com/embed/"}
          />
        </Domain>
      </div>
    );
  }
}
