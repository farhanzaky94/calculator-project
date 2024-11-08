const display = document.getElementById("display");

function appendToDisplay(input) {
  const operators = ["+", "-", "*", "/"];

  const lastChar = display.value.slice(-1);

  const isOperator = operators.includes(input);

  const lastCharIsOperator = operators.includes(lastChar);

  if (isOperator && lastCharIsOperator) {
    return;
  }

  display.value += input;
}

function ClearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
