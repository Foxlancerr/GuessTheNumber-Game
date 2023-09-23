let currentScore = 20;
let attempt = 10;
let highestScore = 20;
let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);

let checkBtn = document.getElementById("#check1");
let inputText = document.querySelector("#input");
let att_lef = document.querySelector("#att_lef");

checkBtn.addEventListener("click", function () {
  if (attempt > 0) {
    attempt--;
    att_lef.textContent = attempt;
  } else {
    console.log("running");
  }
});
