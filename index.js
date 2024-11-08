const display = document.getElementById(`display`);

function appendToDisplay(input) {
  const.operators = ["+", "-", "*", "/"];
}

const lastChar = display.value.slice(-1);

const isOperator = operators.includes(input);

cons isOperator = operators.includes(input);

cons lastCharIsOperator = operators.includes(input);

cons lastCharIsOperator = operators.includes(lastChar);


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