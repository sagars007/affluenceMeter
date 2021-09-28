import { data } from "../../dataMiddleware/mod4";

export function filterBand(band) {
  let band1 = data.filter((obj) => obj.Rating === band);
  return band1;
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
export function OttToBand(band, flag, index) {
  let XY = undefined;
  XY = band.filter((obj) => {
    return obj[index] === flag;
  });
  return XY;
}

export function returnAllBandWithDivision1(band) {
  const AASals = [
    OttToBand(band, 3, "OTT").length,
    OttToBand(band, 2, "OTT").length,
    OttToBand(band, 1, "OTT").length,
    OttToBand(band, 0, "OTT").length,
  ];
  return AASals;
}
