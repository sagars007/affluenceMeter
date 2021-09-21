import React, { Component } from "react";
import {
  Domain,
  DomainHeader,
  FrequencyDiv,
  GeneralHeaders,
  GraphContainerA,
  GraphContainerBody,
  GraphContainerHeader,
  Header,
  LargeBarGraph,
  LargeConatiner,
} from "./styles/app.styles";
import { Link } from "react-router-dom";
import { eduTier } from "../dataMiddleware/EduData";
import FreqencyBoxComponent from "./FreqencyBoxComponent";
import EducationBarChart from "./Charts/EducationBarChart";
import TierComponent from "./TierComponent";
import { IconCont } from "./styles/education.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
function filterEduCredit(tierNo) {
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

  let XYAxsis = [
    data1.length,
    data2.length,
    data3.length,
    data4.length,
    data5.length,
  ];
  return XYAxsis;
}
export default function DomainConatiner1() {
  const eduVscredTier1 = filterEduCredit(1);
  const eduVscredTier2 = filterEduCredit(2);
  const eduVscredTier3 = filterEduCredit(3);
  const eduVscredTier4 = filterEduCredit(4);
  const label1 = [">=350", "300-350", "250-300", "200-250", "150-200"];

  return (
    <div>
      <Domain>
        <Header>
          {" "}
          <Link to="/knowMore">
            {" "}
            <IconCont>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </IconCont>
          </Link>
          Learn How Our Education Model Works
        </Header>
        <DomainHeader>Ananlytics and Much More</DomainHeader>
        <FrequencyDiv>
          <FreqencyBoxComponent data={eduVscredTier1} name={"Tier 1"} />
          <FreqencyBoxComponent data={eduVscredTier2} name={"Tier 2"} />
          <FreqencyBoxComponent data={eduVscredTier3} name={"Tier 3"} />
          <FreqencyBoxComponent data={eduVscredTier4} name={"Tier 4"} />
        </FrequencyDiv>
        <LargeBarGraph>
          <EducationBarChart
            label={label1}
            data={[
              eduVscredTier1,
              eduVscredTier2,
              eduVscredTier3,
              eduVscredTier4,
            ]}
            title="College Tier Vs CreditScore"
          />
        </LargeBarGraph>
        <LargeConatiner>
          <GeneralHeaders>Know How Our Model Works</GeneralHeaders>
        </LargeConatiner>
        <GeneralHeaders style={{ marginTop: "80px" }}>
          Choose Tier And Visulaise Data
        </GeneralHeaders>
        <TierComponent
          data={[
            eduVscredTier1,
            eduVscredTier2,
            eduVscredTier3,
            eduVscredTier4,
          ]}
        />
      </Domain>
    </div>
  );
}
