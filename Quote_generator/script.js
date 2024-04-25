const quoteBox = document.querySelectorAll(".quote-box");
const quoteBtn = document.querySelectorAll(".new-quote");
const authorBox = document.querySelectorAll(".author");
const quoteSpan = document.querySelectorAll(".text");

//Global variable;
let front = true;

//Function for fetching API
function fetchApi() {
  fetch("https://api.quotable.io/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      const content = data[0].content;
      const author = data[0].author;

      if (front) {
        quoteSpan[0].innerHTML = content;
        authorBox[0].innerHTML = author;
      } else {
        quoteSpan[1].innerHTML = content;
        authorBox[1].innerHTML = author;
      }
      front = !front;
    });
}

function randomQuote() {
  quoteBox[0].classList.toggle("rotateF");
  quoteBox[1].classList.toggle("rotateB");
  fetchApi();
}

document.addEventListener("DOMContentLoaded", function () {
  fetchApi();
});

quoteBtn.forEach((el) =>
  el.addEventListener("click", function () {
    randomQuote();
  })
);
