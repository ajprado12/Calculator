let firstInput = document.querySelector("#firstNumber");
let equBtn = document.querySelector("#equals");
let numButtons = document.querySelectorAll(".numButtons");
let operatorButtons = document.querySelectorAll(".operatorButtons");
let clearButton = document.getElementById("clearButton");
let memory = document.getElementById("memRecall");
let storageClear = document.getElementById("storageClear");
let storageSave = document.getElementById("storageSave");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let number = "";
let expression = "";

memory.addEventListener('click',(e)=> {
    var savedNumber = localStorage.getItem('newResult');
    document.getElementById("numberBox").value = savedNumber;
    console.log(savedNumber);
})

storageClear.addEventListener('click', (e) => {
    localStorage.clear();
})

// storageSave.addEventListener('click', (e) => {
//     localStorage.setItem("newResult", document.getElementById('numberBox').value)
// })

numButtons.forEach((numberValue) => {
  numberValue.addEventListener("click", (e) => {
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
  });
});
operatorButtons.forEach((operatorValue) => {
  operatorValue.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("e parameter", e.target.value);
    const op = e.target.value;
    if (firstNumber != "" && op != "" && secondNumber != "") {
      firstNumber = evaluation().toFixed(3);
      operator = firstNumber + op;
      secondNumber = "";
      console.log(operator);
    } else {
      operator = firstNumber + op;
      document.getElementById("numberBox").value = operator;
      console.log(operator);
    }
    
  });
});
equBtn.addEventListener("click", (e) => {
  var newResult = evaluation();
  firstNumber = newResult;
  document.getElementById("numberBox").value = newResult.toFixed(3);
  secondNumber = "";
//   localStorage.setItem("newResult", document.getElementById('numberBox').value)
storageSave.addEventListener('click', (e) => {
    localStorage.setItem("newResult", document.getElementById('numberBox').value)
})

});


function evaluation() {
  var firstInteger = parseFloat(expression);
  var firstIntegerString = firstInteger.toString();
  var firstIntegerStringlength = firstIntegerString.length;
  let slicedExpression = expression.slice(firstIntegerStringlength);
  var newOperator = slicedExpression[0];
  var nextNumber = slicedExpression.slice(1);
  var secondInteger = parseFloat(nextNumber);
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
