const bill = document.querySelector(".bill-input");
const fivePercent = document.querySelector(".five");
const tenPercent = document.querySelector(".ten");
const fifteenPercent = document.querySelector(".fifteen");
const twentyFivePercent = document.querySelector(".twenty-five");
const fiftyPercent = document.querySelector(".fifty");
const customPercent = document.querySelector(".custom");
const people = document.querySelector(".people-input");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset");
const form = document.querySelector("form");

reset.addEventListener("click", () => {
  form.reset();
  bill.innerHTML = "";
  people.innerHTML = "";
  customPercent.nodeValue = "";
  total.lastChild.nodeValue = "0.00";
  tip.lastChild.nodeValue = "0.00";
});
