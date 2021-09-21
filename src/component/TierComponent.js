import React, { Component } from "react";
import PieChart from "./Charts/PieChart";
import { eduTier } from "../dataMiddleware/EduData";
import {
  GeneralHeaders,
  LargeBarGraph,
  LargeConatiner,
} from "./styles/app.styles";
import { GeneralDiv } from "./styles/education.styles";
import SimpleBarChart from "./Charts/SimpleBarChart";

export default class TierComponent extends Component {
  constructor() {
    super();
    this.state = {
      tier: "Tier 1",
      data: eduTier,
      tierData: undefined,
      lenData: undefined,
      label1: [">=350", "300-350", "250-300", "200-250", "150-200"],
      label2: [">=89", "75-89", "59-75"],
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
    this.setState({
      tierData: [
        ...XYAxsis[0],
        ...XYAxsis[1],
        ...XYAxsis[2],
        ...XYAxsis[3],
        ...XYAxsis[4],
      ],
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
  render() {
    return (
      <div>
        <GeneralHeaders
          style={{ marginTop: "20px", fontSize: "20px", color: "#8F8F8F" }}
        >
          Currently Visulaising {this.state.tier} Data
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
      </div>
    );
  }
}
