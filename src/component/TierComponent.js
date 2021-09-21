import React, { Component } from "react";
import PieChart from "./Charts/PieChart";
import { eduTier } from "../dataMiddleware/EduData";
import {
  GeneralHeaders,
  LargeBarGraph,
  LargeConatiner,
} from "./styles/app.styles";
import { GeneralDiv } from "./styles/education.styles";

export default class TierComponent extends Component {
  constructor() {
    super();
    this.state = {
      tier: "Tier 1",
      data: eduTier,
      tierData: undefined,
      lenData: undefined,
      label1: [">=350", "300-350", "250-300", "200-250", "150-200"],
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
  componentDidMount() {
    let XYAxsis = this.filterEduCredit(1);

    this.setState({
      tierData: [
        ...XYAxsis[0],
        ...XYAxsis[1],
        ...XYAxsis[2],
        ...XYAxsis[3],
        ...XYAxsis[4],
      ],
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
            <GeneralHeaders>Rating Wise Division</GeneralHeaders>
            {this.state.lenData && (
              <PieChart
                label={this.state.label1}
                tierData={this.state.tierData}
                lenData={this.state.lenData}
              />
            )}
          </GeneralDiv>
          <GeneralDiv
            width={"50%"}
            padding={"2%"}
            radius={"20px"}
            style={{
              height: "150px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <GeneralHeaders>Explain Here</GeneralHeaders>
          </GeneralDiv>
        </LargeBarGraph>
      </div>
    );
  }
}
