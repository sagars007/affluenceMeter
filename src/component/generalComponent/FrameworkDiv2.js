import React from "react";
import BarChart from "../EmploymentDomain/Chart/BarChart";
import { LargeBarGraph, GeneralHeaders } from "../styles/app.styles";
import { GeneralDiv } from "../styles/education.styles";
export default function FrameworkDiv2(props) {
  let { title, labelX, labelY, XCOLOR, YCOLOR, BCOLOR, data } = props;
  return (
    <div>
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
          <GeneralHeaders>{title}</GeneralHeaders>
          <BarChart
            data={data}
            labels={labelX}
            YDIVISION={labelY}
            XCOLOR={XCOLOR}
            YCOLOR={YCOLOR}
            BCOLOR={BCOLOR}
          ></BarChart>
        </GeneralDiv>

        <GeneralDiv
          width={"30%"}
          padding={"2%"}
          style={{ background: "inherit" }}
          className="divLeft"
        >
          <GeneralHeaders>{title}</GeneralHeaders>
          <GeneralDiv
            style={{
              height: "80%",
              background: "inherit",
              boxShadow: "none",
              marginTop: "30px",
              fontSize: "18px",
            }}
          >
            {props.content}
          </GeneralDiv>
        </GeneralDiv>
      </LargeBarGraph>
    </div>
  );
}
