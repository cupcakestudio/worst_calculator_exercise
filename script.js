//variables
let onenumber = document.querySelector("#firstnumber");
let twonumber = document.querySelector("#secondnumber");
let arithOperator = document.querySelector("#operator");
let subOneNumber; // the new firstnumber after a calculation
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
  document
    .querySelector("#calculate")
    .addEventListener("click", () => calculate());
  // arithOperator.addEventListener("input", () => console.log("plus"));
}

function calculate() {
  subOneNumber =
    // read the numbers from input field and calc_add them together into a new var
    Number.parseInt(onenumber.value, 10) +
    // String(arithOperator.value) + // add operator here fron string conversion to arith Operators
    Number.parseInt(twonumber.value, 10);
  //after calculation, set #firstnumber input value to be the result of prev calculation,
  //clear inputfield for #secondnumber
  onenumber.value = subOneNumber;
  twonumber.value = "";
}
