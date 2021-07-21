const billInputEl = document.getElementById("bill-input-el");
const customAmountEl = document.getElementById("custom-input");
const numPplEl = document.getElementById("people-input-el");
const tipEl = document.getElementById("tip");
const totalEl = document.getElementById("total");
const resetButtonEl = document.getElementById("reset");
const buttons = Array.from(document.getElementsByClassName("percent-btn"));

let bill = 0;
let customTip = 0;
let percent = 0;

billInputEl.addEventListener("input", function () {
  bill = billInputEl.value;
  calculate();
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((e) => e.classList.remove("selected-btn"));
    e.target.classList.add("selected-btn");
    percent = parseInt(button.id) / 100;

    console.log(numPplEl.value);
    if (bill !== 0) calculate();
  });
});

numPplEl.addEventListener("input", () => {
  calculate();
});

const calculate = () => {
  resetButtonEl.classList.remove('unselected-reset');
  let numPpl = parseInt(numPplEl.value);
  if (numPpl > 0) {
    let tipAmt = (bill * percent) / numPpl;
    let billAmt = bill / numPpl;
    tipEl.innerText = `$${tipAmt.toFixed(2)}`;
    totalEl.innerText = `$${(tipAmt + billAmt).toFixed(2)}`;
  }
};

resetButtonEl.addEventListener("click", (e) => {
  resetButtonEl.classList.add('unselected-reset');
  buttons.forEach((button) => {
    button.classList.remove("selected-btn");
  });
  billInputEl.value = "";
  numPplEl.value = "";
  tipEl.innerText = "$0.00";
  totalEl.innerText = "$0.00";
});
