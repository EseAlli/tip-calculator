const bill = document.querySelector(".bill-input");
const customPercent = document.querySelector(".custom");
const people = document.querySelector(".people-input");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const reset = document.querySelector(".reset");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".people span");
const buttons = Array.from(document.querySelectorAll(".percent button"));
let percent;

function calculator(event) {
  event.preventDefault();
  if (bill.value !== "" && (people.value !== "" || 0) && percent) {
    let tipValue = (bill.value * (percent / 100)) / people.value;
    tip.lastChild.nodeValue = tipValue;
    total.lastChild.nodeValue = bill.value / 2 + tipValue;
  }
}

form.addEventListener("submit", calculator);

people.addEventListener("change", errorFunc);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    percent = btn.firstChild.nodeValue;
  });
});

customPercent.addEventListener("focus", () => {
  percent = customPercent.value;
  if (bill.value !== "" && (people.value !== "" || 0) && percent) {
    let tipValue = (bill.value * (percent / 100)) / people.value;
    tip.lastChild.nodeValue = tipValue;
    total.lastChild.nodeValue = bill.value / 2 + tipValue;
  }
});

reset.addEventListener("click", () => {
  form.reset();
  bill.innerHTML = "";
  people.innerHTML = "";
  customPercent.nodeValue = "";
  total.lastChild.nodeValue = "0.00";
  tip.lastChild.nodeValue = "0.00";
});

function errorFunc() {
  if (people.value <= 0) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
}
