const fromValueInput = document.getElementById("fromValue");
const fromUnitSelect = document.getElementById("fromUnit");
const toValueInput = document.getElementById("toValue");
const toUnitSelect = document.getElementById("toUnit");
const resultText = document.getElementById("resultText");
const outputText = document.getElementById("outputText");

function convertTemperature() {
  const fromValue = parseFloat(fromValueInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  if (!isNaN(fromValue)) {
    let convertedValue = 0;
    let resultTextValue = "";

    switch (fromUnit) {
      case "kelvin":
        convertedValue = fromValue;
        resultTextValue = `${fromValue} Kelvin`;
        break;
      case "celsius":
        convertedValue = fromValue + 273.15;
        resultTextValue = `${fromValue} Celsius`;
        break;
      case "fahrenheit":
        convertedValue = ((fromValue + 459.67) * 5) / 9;
        resultTextValue = `${fromValue} Fahrenheit`;
        break;
      case "rankine":
        convertedValue = (fromValue * 5) / 9;
        resultTextValue = `${fromValue} Rankine`;
        break;
      case "reaumur":
        convertedValue = (fromValue * 5) / 4 + 273.15;
        resultTextValue = `${fromValue} Reaumur`;
        break;
      case "triple":
        convertedValue = fromValue * 273.16;
        resultTextValue = `${fromValue} Triple point of water`;
        break;
    }

    switch (toUnit) {
      case "kelvin":
        toValueInput.value = convertedValue.toFixed(2);
        resultTextValue += ` = ${convertedValue.toFixed(2)} Kelvin`;
        break;
      case "celsius":
        toValueInput.value = (convertedValue - 273.15).toFixed(2);
        resultTextValue += ` = ${(convertedValue - 273.15).toFixed(2)} Celsius`;
        break;
      case "fahrenheit":
        toValueInput.value = ((convertedValue * 9) / 5 - 459.67).toFixed(2);
        resultTextValue += ` = ${((convertedValue * 9) / 5 - 459.67).toFixed(
          2
        )} Fahrenheit`;
        break;
      case "rankine":
        toValueInput.value = ((convertedValue * 9) / 5).toFixed(2);
        resultTextValue += ` = ${((convertedValue * 9) / 5).toFixed(
          2
        )} Rankine`;
        break;
      case "reaumur":
        toValueInput.value = (((convertedValue - 273.15) * 4) / 5).toFixed(2);
        resultTextValue += ` = ${(((convertedValue - 273.15) * 4) / 5).toFixed(
          2
        )} Reaumur`;
        break;
      case "triple":
        toValueInput.value = (convertedValue / 273.16).toFixed(2);
        resultTextValue += ` = ${(convertedValue / 273.16).toFixed(
          2
        )} Triple point of water`;
        break;
    }

    resultText.textContent = resultTextValue;
    outputText.value = resultTextValue;
  } else {
    toValueInput.value = "";
    resultText.textContent = "";
    outputText.value = "";
  }
}

fromValueInput.addEventListener("input", convertTemperature);
fromUnitSelect.addEventListener("change", convertTemperature);
toUnitSelect.addEventListener("change", convertTemperature);
