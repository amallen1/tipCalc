let billInput = document.getElementById("bill-input-el");
let customAmountEl = document.getElementById("custom-input");
let numPplEl = document.getElementById("people-input-el");
let tipEl = document.getElementById("tip");
let totalEl = document.getElementById("total");
let resetButtonEl = document.getElementById("reset");

let buttons = Array.from(document.getElementsByClassName("percent-btn"));

let bill = 0;
let defaultTip = 15;
let customTip = 0;
let tipAmt = 0;
let billAmt = 0;
let array = [];

billInput.addEventListener("change", function () {
  bill = billInput.value;
});

//for each button, add event listener

let percent = 0;
buttons.map((button) => {
  button.addEventListener("click", (e) => {

    switch (button.id) {
      case "5":
        percent = parseInt(button.id) / 100;
        array.push(percent);
        break;

      case "10":
        percent = parseInt(button.id) / 100;
        array.push(percent);
        break;

      case "15":
        percent = parseInt(button.id) / 100;
        array.push(percent);
        break;

      case "25":
        percent = parseInt(button.id) / 100;
        array.push(percent);
        break;

      case "50":
        percent = parseInt(button.id) / 100;
        array.push(percent);
        break;

      default:
        console.log("DEFAULT");
    }
  });
});

numPplEl.addEventListener("change", function () {
  let numPpl = parseInt(numPplEl.value);

  tipAmt = (bill * array[0]) / numPpl;
  billAmt = bill / numPpl;

  tipEl.innerText = "$" + tipAmt.toFixed(2);
  totalEl.innerText = "$" + (tipAmt + billAmt).toFixed(2);
});



