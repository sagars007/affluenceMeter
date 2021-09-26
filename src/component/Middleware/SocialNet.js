import { data } from "../../dataMiddleware/mod 3";

export function filterBand(band) {
  let band1 = data.filter((obj) => obj.Rating === band);
  return band1;
}

export function MatchNoOfConToBand(
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

export function SSreturnAllBandWithDivision(band) {
  const AASals = [
    MatchNoOfConToBand(band, 5000, 4000, "No. of Connections").length,
    MatchNoOfConToBand(band, 4000, 3000, "No. of Connections").length,
    MatchNoOfConToBand(band, 3000, 2000, "No. of Connections").length,
    MatchNoOfConToBand(band, 2000, 0, "No. of Connections").length,
  ];
  return AASals;
}

export function SSreturnAllBandWithDivision1(band) {
  const AASals = [
    MatchNoOfConToBand(band, 30, 25, "Posts(past month)").length,
    MatchNoOfConToBand(band, 25, 20, "Posts(past month)").length,
    MatchNoOfConToBand(band, 20, 10, "Posts(past month)").length,
    MatchNoOfConToBand(band, 10, 0, "Posts(past month)").length,
  ];
  return AASals;
}

export function SSreturnAllBandWithDivision3(band) {
  const AASals = [
    MatchNoOfConToBand(band, 10, 7.5, "Check Ins(past month)").length,
    MatchNoOfConToBand(band, 7.5, 5, "Check Ins(past month)").length,
    MatchNoOfConToBand(band, 5, 2.5, "Check Ins(past month)").length,
    MatchNoOfConToBand(band, 2.5, 0, "Check Ins(past month)").length,
  ];
  return AASals;
}
export function PoistionToBand(band, flag, index) {
  let XY = undefined;
  XY = band.filter((obj) => {
    return obj[index] === flag;
  });
  return XY;
}

export function returnAllBandWithDivision4(band) {
  const AASals = [
    PoistionToBand(band, 1, "Sponsorships").length,
    PoistionToBand(band, 0, "Sponsorships").length,
  ];
  return AASals;
}
