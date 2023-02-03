"use strict";
//variables
let onenumber = document.querySelector("#firstnumber");
let twonumber = document.querySelector("#secondnumber");
let arithOperator = document.querySelector("#operator");
let subOneNumber; // the new firstnumber after a calculation
let dropdownOperator = "undefined"; //dropdownOperator var storing arithOperators indicies.
//dropdown menu value set to undefined, if no input on dropdown has been detected, shows + by default, but no 'add' operation is occuring unless input changed
let listofCalc = document.querySelector("#results"); //list of finished calcs

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  //MDN docs: eventListener input activates/fires when the value of an <input> , <select> or <textarea> element has been changed
  onenumber.addEventListener("input", () => {
    onenumber.value;
    console.log(onenumber.value); //how to get the value from input field and write to input field
  });
  twonumber.addEventListener("input", () => {
    twonumber.value;
    console.log(twonumber.value); //how to get the value from input field and write to input field
  });
  arithOperator.addEventListener("input", () => {
    //read an dropdown value
    dropdownOperator = arithOperator.value;
    console.log(arithOperator.value);
  });
  document
    .querySelector("#calculate")
    .addEventListener("click", () => calculate(dropdownOperator)); //parse the operator over to calc() in order to compare
}

function calculate(dropdownOperator) {
  //if-statements that parses input-selected operator value and compares with the dropdown menues values.
  if (dropdownOperator === "add" || dropdownOperator === "undefined") {
    subOneNumber =
      // read the numbers from input field and calc_add them together into a new var
      Number.parseInt(onenumber.value, 10) +
      // add operator here fron string conversion to arith Operators
      Number.parseInt(twonumber.value, 10);
  } else if (dropdownOperator === "sub") {
    subOneNumber =
      // read the numbers from input field and subtract them together into a new var
      Number.parseInt(onenumber.value, 10) -
      // add operator here fron string conversion to arith Operators
      Number.parseInt(twonumber.value, 10);
  } else if (dropdownOperator === "mul") {
    subOneNumber =
      // read the numbers from input field and multiply them together into a new var
      Number.parseInt(onenumber.value, 10) *
      // add operator here fron string conversion to arith Operators
      Number.parseInt(twonumber.value, 10);
  } else {
    // read the numbers from input field and divide them together into a new var
    subOneNumber =
      Number.parseInt(onenumber.value, 10) /
      // add operator here fron string conversion to arith Operators
      Number.parseInt(twonumber.value, 10);
  }

  //after calculation, set #firstnumber input value to be the result of prev calculation,
  //clear inputfield for #secondnumber
  onenumber.value = subOneNumber;
  twonumber.value = "";

  //append result of prev calc to list#results
  listofCalc.innerHTML += "<li>" + subOneNumber + "</li>";
}
