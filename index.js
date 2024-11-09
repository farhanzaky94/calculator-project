const display = document.getElementById("display");

function appendToDisplay(input) {
  const operators = ["+", "-", "*", "/"];

  const lastChar = display.value.slice(-1);

  const isOperator = operators.includes(input);

  const lastCharIsOperator = operators.includes(lastChar);

  if (isOperator && lastCharIsOperator) {
    return;
  }

  if (display.value === "0" && !isOperator) {
    display.value = input;
  } else {
    display.value += input;
    display.scrollLeft = display.scrollWidth;
  }
}

function ClearDisplay() {
  display.value = "0";
}

function calculate() {
  try {
    const result = Function('"use strict"; return (' + display.value + ")")();
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
