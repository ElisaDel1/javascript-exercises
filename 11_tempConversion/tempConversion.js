const convertToCelsius = function(tempFahr) {
  let tempCelcius = ((tempFahr - 32) * (5/9));
  return +tempCelcius.toFixed(1);
};

const convertToFahrenheit = function(tempCelcius) {
  let tempFahr = (tempCelcius * (9/5) + 32);
  return +tempFahr.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
