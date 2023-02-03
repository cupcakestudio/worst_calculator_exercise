"use strict";
//variables
let onenumber = document.querySelector("#firstnumber");
let twonumber = document.querySelector("#secondnumber");
let arithOperator = document.querySelector("#operator");
let roundingCheckBox = document.querySelector("#doround"); //#doround is the id for input type="checkbox"
let clearList = document.querySelector("#clear");
let subOneNumber; // the new firstnumber after a calculation
let dropdownOperator = "undefined"; //dropdownOperator variable storing arithOperators indicies.
//dropdown menu value set to undefined, if no input on dropdown has been detected, shows + by default, but no 'add' operation is occuring unless input changed

let roundingNumber = document.querySelector("#decimals"); //a variable storing which decimal number the program should round
let roundTo = "undefined";
let listofCalcContainer = document.querySelector("#results"); //list of finished calcs

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  //EVENTLISTENERS
  //MDN docs: eventListener input activates/fires when the value of an <input> , <select> or <textarea> element has been changed
  onenumber.addEventListener("input", () => {
    onenumber.value;
    console.log(onenumber.value); //how to get the value from input field and write to input field
  });
  twonumber.addEventListener("input", () => {
    twonumber.value;
    console.log(twonumber.value); //how to get the value from input field and write to input field
  });
  //eventListener on dropdown menu for operators
  arithOperator.addEventListener("input", () => {
    //read an dropdown value
    dropdownOperator = arithOperator.value;
    console.log(arithOperator.value);
  });
  //eventListener on dropdown menu for rounding numbers
  roundingCheckBox.addEventListener("change", () => {
    //.checked built.in () to see if checkbox is bool true
    if (roundingCheckBox.checked) {
      console.log("roundingNumber.value");
      //get the number rounding value
      roundingNumber.addEventListener("input", () => {
        roundTo = roundingNumber.value;
      });
    }
  });
  clearList.addEventListener("click", clearResults);
  document
    .querySelector("#calculate")
    .addEventListener("click", () => calculate(dropdownOperator, roundTo)); //parse the operator over to calc() in order to compare
}

function calculate(dropdownOperator, roundTo) {
  console.log("This is the rounding number");
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
  // check if result should be rounded, round it and then add corresponding result to list
  //missing to add float numbers in decimals, find an easy way to do it
  if (roundingCheckBox.checked) {
    //append result of prev calc to list#results
    listofCalcContainer.innerHTML +=
      "<li>" + subOneNumber.toFixed(roundTo) + "</li>";

    //after calculation, set #firstnumber input value to be the result of prev calculation,
    //clear inputfield for #secondnumber
    onenumber.value = subOneNumber.toFixed(roundTo);
    twonumber.value = "";
    console.log("decimal placed");
  } else {
    //append result of prev calc to list#results
    listofCalcContainer.innerHTML += "<li>" + subOneNumber + "</li>";

    //after calculation, set #firstnumber input value to be the result of prev calculation,
    //clear inputfield for #secondnumber
    onenumber.value = subOneNumber;
    twonumber.value = "";
  }
  //make list of results scrollable
  //get content of 'results' list in order to set scroll to the last added li item
  let listofCalc = listofCalcContainer.querySelectorAll("li");
  let lastAddednewNumber = listofCalc[listofCalc.length - 1];
  console.log(lastAddednewNumber);
  lastAddednewNumber.scrollIntoView(false, { behaviour: "smooth" });
}
function clearResults() {
  listofCalcContainer.innerHTML = "";
  twonumber.value = "";
}
