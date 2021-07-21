let billInputEl = document.getElementById("bill-input-el");
let customAmountEl = document.getElementById("custom-input");
let numPplEl = document.getElementById("people-input-el");
let tipEl = document.getElementById("tip");
let totalEl = document.getElementById("total");
let resetButtonEl = document.getElementById("reset");
let buttons = Array.from(document.getElementsByClassName("percent-btn"));

let bill = 0;
let customTip = 0;
let tipAmt = 0;
let billAmt = 0;
let percent = 0;

billInputEl.addEventListener("change", function () {
  bill = billInputEl.value;
});

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    button.style.backgroundColor = "#26c0ab";
    percent = parseInt(button.id) / 100;
  });
});

numPplEl.addEventListener("change", function () {
  let numPpl = parseInt(numPplEl.value);
  tipAmt = (bill * percent) / numPpl;
  billAmt = bill / numPpl;

  tipEl.innerText = `$${tipAmt.toFixed(2)}`;
  totalEl.innerText = `$${(tipAmt + billAmt).toFixed(2)}`;
});

resetButtonEl.addEventListener("click", (e) => {
  billInputEl.value = "";
  numPplEl.value = "";
  tipEl.innerText = "$0.00";
  totalEl.innerText = "$0.00";
});
