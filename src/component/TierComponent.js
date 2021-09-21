import React, { Component } from "react";
import PieChart from "./Charts/PieChart";
import { eduTier } from "../dataMiddleware/EduData";
import { GeneralHeaders, LargeBarGraph } from "./styles/app.styles";
import { GeneralDiv } from "./styles/education.styles";
import SimpleBarChart from "./Charts/SimpleBarChart";
import EduBarChart2 from "./Charts/eduBarChart2";
import YoutubeEmbed from "./YouTube";

export default class TierComponent extends Component {
  constructor() {
    super();
    this.state = {
      tier: 1,
      data: eduTier,
      tierData: undefined,
      lenData: undefined,
      label1: [">=350", "300-350", "250-300", "200-250", "150-200"],
      label2: [">=89", "75-89", "59-75"],
      label3: ["0", "1", "2", "3", "4", "5", "6"],
      intern: undefined,
      markArray: undefined,
    };
  }
  filterEduCredit = (tierNo) => {
    let data1 = eduTier.filter((obj) => {
      return obj["Credit Score"] >= 350 && obj["College Tier"] === tierNo;
    });
    let data2 = eduTier.filter((obj) => {
      return (
        obj["Credit Score"] >= 300 &&
        obj["Credit Score"] < 350 &&
        obj["College Tier"] === tierNo
      );
    });
    let data3 = eduTier.filter((obj) => {
      return (
        obj["Credit Score"] >= 250 &&
        obj["Credit Score"] < 300 &&
        obj["College Tier"] === tierNo
      );
    });
    let data4 = eduTier.filter((obj) => {
      return (
        obj["Credit Score"] >= 200 &&
        obj["Credit Score"] < 250 &&
        obj["College Tier"] === tierNo
      );
    });
    let data5 = eduTier.filter((obj) => {
      return (
        obj["Credit Score"] >= 150 &&
        obj["Credit Score"] < 200 &&
        obj["College Tier"] === tierNo
      );
    });

    let XYAxsis = [data1, data2, data3, data4, data5];
    return XYAxsis;
  };

  InternFilter = (data) => {
    let internArr = [];
    data.forEach((element) => {
      let arr = [0, 0, 0, 0, 0, 0, 0];
      element.forEach((obj) => {
        arr[obj.Intership]++;
      });
      internArr.push(arr);
    });
    return internArr;
  };

  MarksFilter = (data) => {
    let arr = [];

    data.forEach((element) => {
      let mark1 = 0,
        mark2 = 0,
        mark3 = 0;
      element.forEach((obj) => {
        if (obj["Marks%"] >= 89) {
          mark1++;
        } else if (obj["Marks%"] >= 75 && obj["Marks%"] < 89) {
          mark2++;
        } else {
          mark3++;
        }
      });
      arr.push({ mark1, mark2, mark3 });
    });
    return arr;
  };

  componentDidMount() {
    let XYAxsis = this.filterEduCredit(1);
    let markArray = this.MarksFilter(XYAxsis);
    let internArr = this.InternFilter(XYAxsis);
    this.setState({
      tierData: [
        ...XYAxsis[0],
        ...XYAxsis[1],
        ...XYAxsis[2],
        ...XYAxsis[3],
        ...XYAxsis[4],
      ],
      intern: internArr,
      markArray: markArray,
      lenData: [
        XYAxsis[0].length,
        XYAxsis[1].length,
        XYAxsis[2].length,
        XYAxsis[3].length,
        XYAxsis[4].length,
      ],
    });
  }
  toggleTier = (e) => {
    let XYAxsis = this.filterEduCredit(parseInt(e.target.value));
    let markArray = this.MarksFilter(XYAxsis);
    let internArr = this.InternFilter(XYAxsis);
    this.setState({
      tierData: [
        ...XYAxsis[0],
        ...XYAxsis[1],
        ...XYAxsis[2],
        ...XYAxsis[3],
        ...XYAxsis[4],
      ],
      intern: internArr,
      markArray: markArray,
      lenData: [
        XYAxsis[0].length,
        XYAxsis[1].length,
        XYAxsis[2].length,
        XYAxsis[3].length,
        XYAxsis[4].length,
      ],
    });
  };
  render() {
    return (
      <div>
        <GeneralHeaders
          style={{ marginTop: "20px", fontSize: "20px", color: "#8F8F8F" }}
        >
          Currently Visulaising{" "}
          <select onChange={(e) => this.toggleTier(e)} className="drpDwn">
            <option value="1">Tier 1</option>
            <option value="2">Tier 2</option>
            <option value="3">Tier 3</option>
            <option value="4">Tier 4</option>
          </select>{" "}
          Data
        </GeneralHeaders>
        <LargeBarGraph
          style={{
            marginTop: "80px",
            background: "inherit",
            boxShadow: "none",
            display: "flex",
            flexDirection: "row",
            height: "600px",
            justifyContent: "space-between",
          }}
        >
          <GeneralDiv width={"40%"} padding={"2%"} radius={"20px"}>
            <GeneralHeaders>
              Rating Wise Division Vs No of People
            </GeneralHeaders>
            {this.state.lenData && (
              <PieChart
                label={this.state.label1}
                tierData={this.state.tierData}
                lenData={this.state.lenData}
              />
            )}
          </GeneralDiv>
          <GeneralDiv
            style={{
              display: "flex",
              flexDirection: "column",
              height: "500px",
              padding: "0%",
              background: "inherit",
              boxShadow: "none",
            }}
            width={"50%"}
          >
            <GeneralDiv
              width={"100%"}
              padding={"2%"}
              radius={"0px"}
              style={{
                height: "180px",
                display: "flex",
                flexDirection: "column",
                background: "inherit",
              }}
            >
              <GeneralHeaders>Explain Here</GeneralHeaders>
            </GeneralDiv>
            <GeneralDiv
              width={"100%"}
              padding={"0%"}
              style={{ background: "inherit" }}
            >
              {this.state.markArray && (
                <SimpleBarChart
                  markArray={this.state.markArray}
                  label1={this.state.label1}
                  label2={this.state.label2}
                />
              )}
            </GeneralDiv>
          </GeneralDiv>
        </LargeBarGraph>
        <LargeBarGraph
          style={{
            marginTop: "80px",
            background: "inherit",
            boxShadow: "none",
            display: "flex",
            flexDirection: "row",
            height: "600px",
            justifyContent: "space-between",
          }}
        >
          <GeneralDiv width={"65%"} padding={"2%"} radius={"20px"}>
            <GeneralHeaders>No Internship Vs Credit Rating</GeneralHeaders>
            {this.state.intern && (
              <EduBarChart2
                data={this.state.intern}
                label3={this.state.label3}
                label1={this.state.label1}
              ></EduBarChart2>
            )}
          </GeneralDiv>
          <GeneralDiv
            width={"30%"}
            padding={"2%"}
            style={{ background: "inherit" }}
          >
            <GeneralHeaders>Explain Here</GeneralHeaders>
          </GeneralDiv>
        </LargeBarGraph>
        <LargeBarGraph
          style={{
            marginTop: "30px",
            borderRadius: "30px",
            height: "600px",
            background: "inherit",
          }}
        >
          <GeneralHeaders>Explain Here</GeneralHeaders>
          <GeneralDiv style={{ height: "80%", background: "inherit" }}>
            <YoutubeEmbed embedId="rokGy0huYEA" />
          </GeneralDiv>
        </LargeBarGraph>
      </div>
    );
  }
}
