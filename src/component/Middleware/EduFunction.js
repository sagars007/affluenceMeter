export function filterEduCredit(tierNo, eduTier) {
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
