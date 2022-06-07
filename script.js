let firstInput = document.querySelector("#firstNumber");
let equBtn = document.querySelector("#equals");
let numButtons = document.querySelectorAll(".numButtons");
let operatorButtons = document.querySelectorAll(".operatorButtons");
let display = document.getElementById("numberBox");
let resetDisplayButtonToZero = document.getElementById("resetButton");
let periodButton = document.getElementById("period");
let memRecall = document.getElementById("memRecall");
let storageClear = document.getElementById("storageClear");
let storageSave = document.getElementById("storageSave");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let number = "";
let expression = "";
let newResult = "";

memRecall.addEventListener("click", resultMemorySave);

storageClear.addEventListener("click", clearStorage);

storageSave.addEventListener("click", saveStorage);

resetDisplayButtonToZero.addEventListener("click", () => {
  resetToZero();
  cChangeToCe();
});

numButtons.forEach((numberValue) => {
  numberValue.addEventListener("click", addingNumbersToCalculator);
});

operatorButtons.forEach((operatorValue) => {
  operatorValue.addEventListener("click", addingOperatorToLastNumber);
});

equBtn.addEventListener("click", () => {
  displayEqualAnswer();
});

function resetToZero() {
  if (document.getElementById("numberBox").value !== "") {
    location.reload();
  }
}

function cChangeToCe() {
  const buttonText = document.getElementById("resetButton");
  if (buttonText.innerText === "C") {
    buttonText.innerText = "CE";
  }
}
function clearStorage() {
  localStorage.clear();
}

function addingNumbersToCalculator(e) {
  e.preventDefault();
  if (firstNumber != "" && operator != "") {
    secondNumber = secondNumber + e.target.value;
    expression = operator + secondNumber;
    document.getElementById("numberBox").value = secondNumber;
  } else {
    firstNumber = firstNumber + e.target.value;
    document.getElementById("numberBox").value = firstNumber;
  }
}

function addingOperatorToLastNumber(e) {
  e.preventDefault();
  const op = e.target.value;
  if (firstNumber != "" && op != "" && secondNumber != "") {
    firstNumber = evaluation();
    operator = firstNumber + op;
    secondNumber = "";
  } else {
    operator = firstNumber + op;
    document.getElementById("numberBox").value = op;
  }
}

function displayEqualAnswer() {
  var newResult = evaluation();
  firstNumber = newResult;
  secondNumber = "";
  while (
    newResult[newResult.length - 1] === "0" &&
    newResult[newResult.length - 1] === "."
  ) {
    newResult = newResult.slice(0, -1);
    if (newResult[newResult.length - 1] !== "0") {
      break;
    }
    if (newResult[newResult.length - 3] === ".") {
      break;
    }
  }
  firstNumber = "";
  document.getElementById("numberBox").value = newResult;
  newResult = "";
}

function resultMemorySave() {
  let savedNumber = localStorage.getItem("Memory");
  document.getElementById("numberBox").value = savedNumber;
  secondNumber = "";
}
function saveStorage() {
  localStorage.setItem("Memory", document.getElementById("numberBox").value);
}

function evaluation() {
  const firstInteger = parseFloat(expression);
  const firstIntegerString = firstInteger.toString();
  const firstIntegerStringlength = firstIntegerString.length;
  const slicedExpression = expression.slice(firstIntegerStringlength);
  const newOperator = slicedExpression[0];
  const nextNumber = slicedExpression.slice(1);
  const secondInteger = parseFloat(nextNumber);
  let result = 0;
  if (newOperator == "+") {
    result = firstInteger + secondInteger;
    console.log();
  } else if (newOperator == "-") {
    result = firstInteger - secondInteger;
  } else if (newOperator == "*") {
    result = firstInteger * secondInteger;
  } else if (newOperator == "/") {
    result = firstInteger / secondInteger;
  }
  return result;
}
