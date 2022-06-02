let firstInput = document.querySelector("#firstNumber");
let equBtn = document.querySelector("#equals");
let numButtons = document.querySelectorAll(".numButtons");
let operatorButtons = document.querySelectorAll(".operatorButtons");
let display = document.getElementById("numberBox");
let clearDisplayButton = document.getElementById("clearButton");
let periodButton = document.getElementById("period");
let memRecall = document.getElementById("memRecall");
let storageClear = document.getElementById("storageClear");
let storageSave = document.getElementById("storageSave");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let number = "";
let expression = "";

memRecall.addEventListener("click", resultMemorySave);

storageClear.addEventListener("click", clearStorage);

storageSave.addEventListener("click", (e) => {
  localStorage.setItem("Memory", document.getElementById("numberBox").value);
});

clearDisplayButton.addEventListener("click", (e) => {
  let display = document.getElementById("numberBox");
  display.innerHTML = "0";
});

numButtons.forEach((numberValue) => {
  numberValue.addEventListener("click", addingNumbersToCalculator);
});

operatorButtons.forEach((operatorValue) => {
  operatorValue.addEventListener("click", addingOperatorToLastNumber);
});

equBtn.addEventListener("click", () => {
  displayEqualAnswer();
  //   resultMemorySave();
});

// function clearDisplay () {
//    document.getElementById('numberBox').innerHTML = "0";

//  console.log("clear pressed");
//     }

function clearStorage() {
  localStorage.clear();
}

function addingNumbersToCalculator(e) {
  e.preventDefault();
  console.log("e parameter", e.target.value);
  if (firstNumber != "" && operator != "") {
    secondNumber = secondNumber + e.target.value;
    expression = operator + secondNumber;
    document.getElementById("numberBox").value = expression;
  } else {
    firstNumber = firstNumber + e.target.value;
    document.getElementById("numberBox").value = firstNumber;
    console.log(firstNumber);
  }
}

function addingOperatorToLastNumber(e) {
  e.preventDefault();
  const op = e.target.value;
  console.log(op);
  console.log("e parameter", e.target.value);
  if (firstNumber != "" && op != "" && secondNumber != "") {
    firstNumber = evaluation().toFixed(3);
    operator = firstNumber + op;
    secondNumber = "";
    console.log(operator);
  } else {
    operator = firstNumber + op;
    document.getElementById("numberBox").value = operator;
  }
}
// function addingOperatorToRecallNumber(e) {
//   e.preventDefault();
//   const op = e.target.value;
//   console.log(op);
//   console.log("e parameter", e.target.value);
//   if (firstNumber != "" && op != "" && secondNumber != "") {
//     firstNumber = evaluation().toFixed(3);
//     operator = firstNumber + op;
//     secondNumber = "";
//     console.log(operator);
//   } else {
//     operator = firstNumber + op;
//     document.getElementById("numberBox").value = operator;
//   }
// }

function displayEqualAnswer() {
  var newResult = evaluation();
  firstNumber = newResult;
  document.getElementById("numberBox").value = newResult.toFixed(3);
  secondNumber = "";
}

function resultMemorySave() {
  var savedNumber = localStorage.getItem("Memory");
  document.getElementById("numberBox").value = savedNumber;
  console.log(savedNumber);
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
