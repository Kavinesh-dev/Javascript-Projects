const api =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple";
const questionDiv = document.querySelector(".question");
const optionDiv = document.querySelector(".options");
const scoresDiv = document.querySelector("#score");
const submitBtn = document.querySelector("#btn");

let questions = [];

//Fetching data from api
async function fetchData() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    questions = data.results;
  } catch (error) {
    console.log(error.message);
  }
}
fetchData();

let counter = 0;
let score = 0;

if (questions.length === 0) {
  questionDiv.innerHTML = `<h5>Please Wait!! 
    Loading Questions...</h5>`;
}

function loadQuestions() {
  const currentQuestion = questions[counter].question;
  questionDiv.innerText = currentQuestion;

  optionDiv.innerHTML = "";
  const correctAnswer = questions[counter].correct_answer;
  const incorrectAnswers = questions[counter].incorrect_answers;
  const options = [correctAnswer, ...incorrectAnswers];
  options.sort(() => Math.random() - 0.5);
  options.forEach((option) => {
    const choicesdiv = document.createElement("div");
    const choice = document.createElement("input");
    const choiceLabel = document.createElement("label");
    choice.type = "radio";
    choice.name = "answer";
    choice.value = option;
    choiceLabel.textContent = option;
    choicesdiv.appendChild(choice);
    choicesdiv.appendChild(choiceLabel);
    optionDiv.appendChild(choicesdiv);
  });
}

setTimeout(() => {
  loadQuestions();
  if (questions.length === 0) {
    ques.innerHTML = `<h5 style='color: red'>Unable
        to fetch data, Please try again!!</h5>`;
  }
}, 2000);

function loadScore() {
  scoresDiv.textContent = `You scored ${score} out
   of ${questions.length}`;
  scoresDiv.innerHTML += "<h3>All answers</h3>";
  questions.forEach((el, index) => {
    scoresDiv.innerHTML += `<p>${index + 1}.
         ${el.correct_answer}</p>`;
  });
}

function nextQuestion() {
  if (counter < questions.length - 1) {
    counter++;
    loadQuestions();
  } else {
    document.getElementById("opt").remove();
    document.getElementById("ques").remove();
    document.getElementById("btn").remove();
    loadScore();
  }
}

function checkAns() {
  const selectedAns = document.querySelector(
    'input[name = "answer"]:checked'
  ).value;
  if (selectedAns === questions[counter].correct_answer) {
    score++;
    nextQuestion();
  } else {
    nextQuestion();
  }
}

submitBtn.addEventListener("click", function () {
  checkAns();
});
