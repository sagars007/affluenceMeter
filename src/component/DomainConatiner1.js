import React, { Component } from "react";
import {
  Domain,
  FrequencyDiv,
  GeneralHeaders,
  LargeBarGraph,
  LargeConatiner,
} from "./styles/app.styles";
import { eduTier } from "../dataMiddleware/EduData";
import { filterEduCredit } from "./Middleware/EduFunction";
import FreqencyBoxComponent from "./generalComponent/FreqencyBoxComponent";
import EducationBarChart from "./Charts/EducationBarChart";
import TierComponent from "./TierComponent";
import PageHeader from "./generalComponent/PageHeader";
import { GeneralDiv } from "./styles/education.styles";
import Table from "./Table";

export default function DomainConatiner1() {
  const eduVscredTier1 = filterEduCredit(1, eduTier);
  const eduVscredTier2 = filterEduCredit(2, eduTier);
  const eduVscredTier3 = filterEduCredit(3, eduTier);
  const eduVscredTier4 = filterEduCredit(4, eduTier);
  const label1 = [">=350", "300-350", "250-300", "200-250", "150-200"];
  const sum1 = eduVscredTier1.reduce((a, b) => a + b, 0);
  const sum2 = eduVscredTier2.reduce((a, b) => a + b, 0);
  const sum3 = eduVscredTier3.reduce((a, b) => a + b, 0);
  const sum4 = eduVscredTier4.reduce((a, b) => a + b, 0);
  return (
    <div className = "newdiv1">
      <Domain>
        <PageHeader title={"Know How Education Model Works"}></PageHeader>
        <FrequencyDiv>
          <FreqencyBoxComponent
            data={eduVscredTier1}
            sum={sum1}
            name={"Tier 1"}
          />
          <FreqencyBoxComponent
            data={eduVscredTier2}
            sum={sum2}
            name={"Tier 2"}
          />
          <FreqencyBoxComponent
            data={eduVscredTier3}
            sum={sum3}
            name={"Tier 3"}
          />
          <FreqencyBoxComponent
            data={eduVscredTier4}
            sum={sum4}
            name={"Tier 4"}
          />
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
        <LargeConatiner
          style={{ height: "auto", minHeight: "920px", paddingBottom: "50px" }}
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
            }}
            padding={"30px"}
          >
            For education domain for credit rating and analysis we have divided
            it into 4 categories namely college tier, course, graduation marks
            and internship/experience. <br /> <br />
            In India colleges are divided into several tiers based on their
            teaching, research, infrastructure and outcome. We have taken this
            into account as for a student/new employee who seek for credit score
            college will play crucial role in determining their credibility.{" "}
            <br /> <br />
            Similarly, courses which student/user are opting for also determines
            their career growth and outcome. For example, master degrees such as
            MBA, MSC, MD have huge scope in current market. Likewise, all the
            possible courses are categorized into 4 sections from 1 to 4, 1
            being best.
            <br />
            <br />
            Student’s performance in college can only be measured by marks/ CGPA
            they achieve during their course which again plays a vital role
            during credit rating. We have also taken internship/any experience
            as a criteria while evaluating credit as it indicates one’s
            performance and experience in corporates and market.
          </GeneralDiv>
          <GeneralDiv
            style={{
              height: "200px",
              width: "50%",
              background: "inherit",
              boxShadow: "none",
              marginLeft: "24%",
            }}
          >
            <Table />
          </GeneralDiv>
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
