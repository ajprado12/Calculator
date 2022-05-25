let firstInput = document.querySelector('#firstNumber');
// let secondInput = document.querySelector('#secondNumber');
let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#subtract');
let mulBtn = document.querySelector('#multiply');
let divBtn = document.querySelector('#divide');
let equBtn = document.querySelector('#equals');
let oneBtn = document.querySelector('#one');
let twoBtn = document.querySelector('#two');
let threeBtn = document.querySelector('#three');
let fourBtn = document.querySelector('#four');
let operatorButtons = document.getElementsByClassName('operatorButtons');
// operatorButtons.addEventListener('click', ()=> console.log("I am working."))

// for (var i=0; i < operatorButtons.length; i++) {
//     operatorButtons[i].addEventListener('click', ()=> console.log(80+ 90));
// }
// console.log(10 + 80)
[document.querySelector('#add'), document.querySelector('#subtract'), document.querySelector('#multiply'), 
document.querySelector('#divide')].forEach(element => {
    element.addEventListener('click', ()=> console.log(((80) + element.value + (80))));
});
