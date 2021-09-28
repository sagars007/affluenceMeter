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
export function returnAllBandWithDivision2(band) {
  const AASals = [
    OttToBand(band, 4, "Current Town").length,
    OttToBand(band, 3, "Current Town").length,
    OttToBand(band, 2, "Current Town").length,
    OttToBand(band, 1, "Current Town").length,
  ];
  return AASals;
}

export function MarryMiddleWare(band) {
  let data1 = band.filter((obj) => {
    return obj["Martial Status"] == 1;
  });
  let data2 = band.filter((obj) => {
    return obj["Martial Status"] == 0;
  });
  let data3 = band.filter((obj) => {
    return obj["Martial Status"] == 1 && obj["Spouse job"] == 1;
  });
  let data4 = band.filter((obj) => {
    return obj["Martial Status"] == 1 && obj["Spouse job"] == 0;
  });
  return [data1.length, data2.length, data3.length, data4.length];
}
