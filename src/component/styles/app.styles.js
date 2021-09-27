import styled from "styled-components";
export const COLORS = {
  domain1BackGround1: "#1b1919",
  color1: "snow",
  color2: "#8F8F8F",
  color3: "#424242",
  color4: "#222020",
  color5: "#8b3845",
  shapdow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)`,
};

export const Fonts = {
  numito: `'Nunito', sans-serif`,
  popins: `"Poppins", sans-serif`,
};

export const Domain = styled.section`
  background-color: ${COLORS.domain1BackGround1};
  min-height: 100vh;
  height: auto;
  width: 100vw;
  padding: 5%;
`;

export const Header = styled.div`
  color: ${COLORS.color2};
  font-family: ${Fonts.popins};
  font-size: 20px;
`;

export const DomainHeader = styled.div`
  color: ${COLORS.color2};
  font-family: ${Fonts.numito};
  width: 94%;
  margin-top: 30px;
  margin-left: 5%;
  border-bottom: 1px solid ${COLORS.color3};
  padding: 1%;
`;
export const AnanlyticsDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  width: 98%;
  margin-left: 2%;
  margin-top: 20px;
  justify-content: space-around;
`;

export const GraphContainerA = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 500px;
  margin-left: 5px;
  margin-top: 20px;
  background-color: ${COLORS.color4};
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  padding: 30px;
`;
export const GraphContainerHeader = styled.div`
  height: 40px;
  width: 100%;
  color: ${COLORS.color2};
  font-family: ${Fonts.numito};
`;

export const GraphContainerBody = styled.div`
  height: 60%;
  padding: 2%;
  width: 100%;
`;

export const FrequencyDiv = styled.div`
  width: 100%;
  margin-left: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const FrequencyBox = styled.div`
  height: 120px;
  width: 200px;
  padding: 10%;
  margin-top: 10%;
  background: ${COLORS.color4};
  color: ${COLORS.color5};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 900px) {
    width: 250px;
  }
`;

export const FrequencyBoxLeft = styled.div`
  height: 100%;
  width: 50%;
  font-family: ${Fonts.numito};
`;

export const LargeBarGraph = styled.div`
  height: 500px;
  background: ${COLORS.color4};
  width: 80%;
  margin-left: 10%;
  @media (-webkit-max-device-pixel-ratio: 1.5) {
    width: 90%;
    margin-left: 4%;
  }
  box-shadow: ${COLORS.shapdow};
  padding: 2%;
`;

export const GeneralHeaders = styled.div`
  text-align: center;
  font-size: 30px;
  color: ${COLORS.color5};
  font-family: ${Fonts.numito};
`;

export const LargeConatiner = styled.div`
  font-family: ${Fonts.popins};
  color: ${COLORS.color2};
  font-size: 20px;
  height: 500px;
  background: ${COLORS.color4};
  width: 80%;
  margin-top: 80px;
  margin-left: 10%;
  box-shadow: ${COLORS.shapdow};
  border-radius: 30px;
  padding: 3%;
`;
