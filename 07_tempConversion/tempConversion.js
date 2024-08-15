const convertToCelsius = function(fahr) {
  toCels = (fahr - 32)/9 * 5;
  return Number.isInteger(toCels) ? toCels : Number.parseFloat(toCels.toFixed(1));
};

const convertToFahrenheit = function(cels) {
  toFahr = (cels)/5 * 9 + 32;
  return Number.isInteger(toFahr) ? toFahr : Number.parseFloat(toFahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
