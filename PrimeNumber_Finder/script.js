const inputArea = document.querySelector(".input-field");
const clearBtn = document.querySelector("#id-clear");
const submitBtn = document.querySelector("#sub-id");
const msgArea = document.querySelector(".message");

//function for finding the prime number
function isPrime(num) {
  num = +inputArea.value;
  if (num <= 1) return false;
  if (num % 2 === 0) return false;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

//Function for display result in the msgArea
function showResult(value) {
  value = +inputArea.value;
  msgArea.textContent = isPrime(value)
    ? `${value} is a Prime number`
    : `${value} is not a Prime Number`;
}

submitBtn.addEventListener("click", function () {
  showResult();
  inputArea.value = "";
});
