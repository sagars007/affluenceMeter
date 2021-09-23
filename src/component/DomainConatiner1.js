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
    <div>
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
