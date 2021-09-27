import React, { Component } from "react";
import PieChart from "./Charts/PieChart";
import { eduTier } from "../dataMiddleware/EduData";
import { COLORS, GeneralHeaders, LargeBarGraph } from "./styles/app.styles";
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
          Currently Visualising{" "}
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
            minHeight: "600px",
            height: "auto",

            justifyContent: "space-between",
          }}
          className="pieHolder"
        >
          <GeneralDiv
            width={"40%"}
            padding={"2%"}
            radius={"20px"}
            className="divLeft"
          >
            <GeneralHeaders>
              Rating Wise Division Vs No. of People
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
            className="divLeft"
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
              <GeneralDiv
                style={{
                  height: "100%",
                  background: "inherit",
                  boxShadow: "none",
                  color: COLORS.color5,
                }}
                padding={"5%"}
              >
                The pie chart on left hand side shows rating wise division of
                total no. of people in selected tier with the corresonding
                rating, for example for tier A there are 4 users above 350
                rating.
              </GeneralDiv>
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
          <GeneralHeaders>
            Mark Distribution Vs Credit Distribution
          </GeneralHeaders>
          <GeneralDiv
            style={{
              height: "10%",
              background: "inherit",
              boxShadow: "none",
              color: COLORS.color1,
              marginTop: "10px",
            }}
          >
            This chart shows the mark wise distribution for each credit range.
            For exmaple there are 2 users with 89 or above marks and 2 users
            with marks ranging between 79 to 89 for credit rating 350 and above
            for tier 1 college. This helps us to understand the relationship
            between marks ,tier of college and credit rating. This also
            establishes the trend that tier 1 students dont have rating lower
            than 200
          </GeneralDiv>
        </GeneralDiv>

        <LargeBarGraph
          style={{
            marginTop: "80px",
            background: "inherit",
            boxShadow: "none",
            display: "flex",
            flexDirection: "row",
            minHeight: "600px",
            height: "auto",
            justifyContent: "space-between",
          }}
          className="pieHolder"
        >
          <GeneralDiv
            width={"65%"}
            padding={"2%"}
            radius={"20px"}
            className="divLeft"
          >
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
            className="divLeft"
          >
            <GeneralHeaders>No Internship Vs Credit Rating</GeneralHeaders>
            <GeneralDiv
              style={{
                height: "80%",
                background: "inherit",
                boxShadow: "none",
                marginTop: "30px",
                fontSize: "16px",
              }}
            >
              It shows frequency division of no of internship done by the user
              to the credit range they are falling in, these distribution vary
              with change in college tier. General trend which we can identify
              from these graph is that higher the no of internship higher will
              be credit rating. For example those who have done 4 or more
              internship have high affluence score. Those who have done 6
              internhip and belong to tier 1 have rating higher than 300
            </GeneralDiv>
          </GeneralDiv>
        </LargeBarGraph>

        <YoutubeEmbed
          link={"https://www.youtube.com/embed/"}
          embedId="rokGy0huYEA"
        />
      </div>
    );
  }
}
