const billInputEl = document.getElementById("bill-input-el");
const customTipEl = document.getElementById("custom-input");
const numPplEl = document.getElementById("people-input-el");
const tipEl = document.getElementById("tip");
const totalEl = document.getElementById("total");
const resetButtonEl = document.getElementById("reset");
const numPplLabel = document.getElementById('ppl-label')
const buttons = Array.from(document.getElementsByClassName("percent-btn"));

let bill = 0;
let percent = 0;
let numPpl = 0;

billInputEl.addEventListener("input", function () {
  bill = billInputEl.value;
  calculate();
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    
    buttons.forEach((e) => e.classList.remove("selected-btn"));
    e.target.classList.add("selected-btn");
    percent = parseInt(button.id) / 100;
    calculate();

  });
});

customTipEl.addEventListener("input", () => {
  buttons.forEach((button) => {
    button.classList.remove("selected-btn");
  });

  if (customTipEl.value === "") return;

  percent = parseInt(customTipEl.value) / 100;
  if (parseInt(numPplEl.value) > 0) calculate();
});

numPplEl.addEventListener("input", () => {
  numPpl = parseInt(numPplEl.value);
  if (numPpl === 0) {
    numPplEl.classList.add("input-focus");
    numPplLabel.classList.add('ppl-label');
  } else if (numPpl > 0) {
    numPplEl.classList.remove("input-focus");
    numPplLabel.classList.remove('ppl-label');
    calculate();
  }
});

const calculate = () => {
  resetButtonEl.classList.add("selected-reset");

  if (numPpl > 0 && bill > 0) {
    let tipAmt = (bill * percent) / numPpl;
    let billAmt = bill / numPpl;
    tipEl.innerText = `$${tipAmt.toFixed(2)}`;
    totalEl.innerText = `$${(tipAmt + billAmt).toFixed(2)}`;
  }
};

resetButtonEl.addEventListener("click", (e) => {
  resetButtonEl.classList.remove("selected-reset");

  buttons.forEach((button) => {
    button.classList.remove("selected-btn");
  });
  percent = 0;
  billInputEl.value = "";
  customTipEl.value = "";
  numPplEl.value = "";
  tipEl.innerText = "$0.00";
  totalEl.innerText = "$0.00";
});
