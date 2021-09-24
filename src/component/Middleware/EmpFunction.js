import data from "../../dataMiddleware/EmpData";

export function filterBand(band) {
  let band1 = data.filter((obj) => obj.Rating === band);
  return band1;
}

export function MatchSalaryToBand(
  band,
  upperlimit = undefined,
  lowelimit = undefined,
  index
) {
  let XY = undefined;

  if (upperlimit && lowelimit) {
    XY = band.filter((obj) => {
      return obj[index] >= lowelimit && obj[index] < upperlimit;
    });
  } else if (upperlimit) {
    XY = band.filter((obj) => {
      return obj[index] < upperlimit;
    });
  } else {
    XY = band.filter((obj) => {
      return obj[index] >= lowelimit;
    });
  }
  return XY;
}

export function returnAllBandWithDivision(band) {
  const AASals = [
    MatchSalaryToBand(band, undefined, 90000, "Income").length,
    MatchSalaryToBand(band, 90000, 60000, "Income").length,
    MatchSalaryToBand(band, 60000, 30000, "Income").length,
    MatchSalaryToBand(band, 30000, 0, "Income").length,
  ];
  return AASals;
}

export function returnAllBandWithDivision1(band) {
  const AASals = [
    MatchSalaryToBand(band, 10, 7.5, "Work Exp").length,
    MatchSalaryToBand(band, 7.5, 5, "Work Exp").length,
    MatchSalaryToBand(band, 5, 2.5, "Work Exp").length,
    MatchSalaryToBand(band, 2.5, 0, "Work Exp").length,
  ];
  return AASals;
}

export function graph1finalAxis(XYAxsis1, row, col) {
  let XY = new Array();
  for (let i = 0; i < col; i++) {
    let temp = [];
    for (let j = 0; j < row; j++) {
      temp.push(XYAxsis1[j][i]);
    }
    XY.push(temp);
  }
  return XY;
}

export function PoistionToBand(band, flag, index) {
  let XY = undefined;
  XY = band.filter((obj) => {
    return obj[index] === flag;
  });
  return XY;
}

export function returnAllBandWithDivision3(band) {
  const AASals = [
    PoistionToBand(band, 4, "Position").length,
    PoistionToBand(band, 3, "Position").length,
    PoistionToBand(band, 2, "Position").length,
    PoistionToBand(band, 1, "Position").length,
  ];
  return AASals;
}
export function returnAllBandWithDivision3C(band) {
  const AASals = [
    PoistionToBand(band, 4, "Company").length,
    PoistionToBand(band, 3, "Company").length,
    PoistionToBand(band, 2, "Company").length,
    PoistionToBand(band, 1, "Company").length,
  ];
  return AASals;
}
// Gap/Unemployed
export function returnAllBandWithDivision3D(band) {
  const AASals = [
    PoistionToBand(band, 5, "Gap/Unemployed").length,
    PoistionToBand(band, 4, "Gap/Unemployed").length,
    PoistionToBand(band, 3, "Gap/Unemployed").length,
    PoistionToBand(band, 2, "Gap/Unemployed").length,
    PoistionToBand(band, 1, "Gap/Unemployed").length,
    PoistionToBand(band, 0, "Gap/Unemployed").length,
  ];
  return AASals;
}
