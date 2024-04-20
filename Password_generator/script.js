const inputPassword = document.querySelector(".password input");
const rangeValue = document.querySelector(".range input");
const rangeSpan = document.querySelector(".range span");
const checkbox = document.querySelector("checkbox");
const lowerCb = document.getElementById("lowercaseCb");
const upperCb = document.getElementById("uppercaseCb");
const digitsCb = document.getElementById("digitsCb");
const specialCb = document.getElementById("specialsCb");
const copyBtn = document.querySelector(".password button");
const generateBtn = document.querySelector(".generate");

//Arrays containinig all the values!
// Array of lowercase letters
const lowercaseLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
const uppercaseLetters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
const numbers = Array.from({ length: 10 }, (_, i) =>
  String.fromCharCode(48 + i)
);
const specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "|",
  "\\",
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
  "`",
];

//Function for changing the span value based on range value;
function changeSpanValue() {
  rangeSpan.innerHTML = this.value;
}

//A single function that works for all
function generateGeneral(array, num, checkbox) {
  const arr = [];
  const shuffle = array.sort((a, b) => 0.5 - Math.random());
  arr.push(...shuffle);
  if (checkbox.checked) return arr.slice(0, num).join("");
  else return [];
}

//Function for generating password
function generatePassword() {
  const passArr = [];
  const words = Number(rangeSpan.innerHTML);
  passArr.push(
    ...generateGeneral(numbers, words, digitsCb),
    ...generateGeneral(lowercaseLetters, words, lowerCb),
    ...generateGeneral(specialCharacters, words, specialCb),
    ...generateGeneral(uppercaseLetters, words, upperCb)
  );
  const result = passArr.sort((a, b) => 0.5 - Math.random()).join("");
  return result;
}

//Function for copying the text in the input field
function copyText() {
  const text = inputPassword.value;
  navigator.clipboard.writeText(text);
  copyBtn.innerHTML = "copied!";
  setTimeout(() => {
    document.querySelector("div.password button").innerHTML = "copy";
  }, 1500);
}

//A final function for updating password in the input area
function updatePassword() {
  generateBtn.addEventListener("click", function () {
    inputPassword.value = generatePassword();
  });
  rangeValue.addEventListener("input", changeSpanValue);
  copyBtn.addEventListener("click", copyText);
}
updatePassword();

// //Function for generating random small case passwords based on the rangeValue
// function generateSmallCase(array, words) {
//   const lowerArr = [];
//   const shuffleLower = array.sort((a, b) => 0.5 - Math.random());
//   lowerArr.push(...shuffleLower);
//   if (lowerCb.checked) return lowerArr.slice(0, words).join("");
//   else return [];
// }

// //Function for generating random capital case passswords based on the range value
// function generateUpperCase(array, words) {
//   const upperArr = [];
//   const shuffleUpper = array.sort((a, b) => 0.5 - Math.random());
//   upperArr.push(...shuffleUpper);
//   if (upperCb.checked) return upperArr.slice(0, words).join("");
//   else return [];
// }

// //Function for generating random number password based on the range value
// function generateNumeric(array, num) {
//   const numArr = [];
//   const shuffleNum = array.sort((a, b) => 0.5 - Math.random());
//   numArr.push(...shuffleNum);
//   if (digitsCb.checked) return numArr.slice(0, num).join("");
//   else return [];
// }

//Function for generating random special char based on the range value;
// function generateSpecialChar(array, num, checkbox) {
//   const specialArr = [];
//   const shuffleSpecial = array.sort((a, b) => 0.5 - Math.random());
//   specialArr.push(...shuffleSpecial);
//   if (checkbox.checked) return specialArr.slice(0, num).join("");
//   else return [];
// }
