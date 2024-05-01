let questions = [
  {
    prompt: `Inside which HTML
				element do we put
				the JavaScript?`,
    options: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>",
  },

  {
    prompt: `How do you call a
				function named
				myFunction?`,
    options: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction",
      "Call.myFunction",
    ],
    answer: "myFunction()",
  },

  {
    prompt: `How does a for loop
				start?`,
    options: [
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
      " for (i <= 5; i++)",
    ],
    answer: "for (i = 0; i <= 5; i++)",
  },

  {
    prompt: `In JavaScript, which
				of the following is
				a logical operator?`,
    options: ["|", "&&", "%", "/"],
    answer: "&&",
  },

  {
    prompt: `A named element in a
				JavaScript program that
				is used to store and
				retrieve data is a _____.`,
    options: ["method", "assignment operator", "variable", "string"],
    answer: "variable",
  },
];

// Get Dom Elements
const btnStartQuiz = document.getElementById("start");
const quizStartDiv = document.getElementById("quiz-start");
const quizEndDiv = document.getElementById("quiz-end");
const finalScore = document.querySelector("#score-final");
const questionsDiv = document.getElementById("questions");
const questionsWordsHeader = document.getElementById("question-words");
const optionsDiv = document.querySelector(".options");
const timerEl = document.getElementById("timer");
const feedbackDiv = document.getElementById("feedback");
const nameDiv = document.getElementById("name");
const btnSubmit = document.getElementById("submit-score");

let counterIndex = 0;
let timerId;
let time = 100;
let score = 0;

//Function for starting the quiz
function startQuiz() {
  quizStartDiv.classList.add("hide");
  questionsDiv.classList.remove("hide");
  loadQuestions(counterIndex);
  timer();
}

//Function for loading and displaying questions
function loadQuestions(index) {
  if (questions[counterIndex]) {
    optionsDiv.innerHTML = "";
    questionsWordsHeader.textContent = questions[index].prompt;
    questions[index].options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", function () {
        check(button);
        counterIndex++;
        loadQuestions(counterIndex);
      });
      optionsDiv.appendChild(button);
    });
  } else {
    endQuiz();
  }
}

//Function for setting timer
function timer() {
  timerId = setInterval(function () {
    timerEl.innerText = time;
    time--;
    if (time < 0) {
      clearInterval(timerId);
      endQuiz();
    }
  }, 1000);
}

//Function for checking answers
function check(btn) {
  const isCorrect = btn.innerText === questions[counterIndex].answer;
  let feedbackMessage;
  if (isCorrect) {
    feedbackMessage = "Correct!";
    score++;
  } else {
    feedbackMessage = '<p style="color: red;">Wrong answer!</p>';
    time -= 10;
  }

  feedbackDiv.classList.remove("hide");
  feedbackDiv.innerHTML = feedbackMessage;

  setTimeout(() => {
    feedbackDiv.classList.add("hide");
  }, 1000);
}

//Function for ending the quiz;
function endQuiz() {
  clearInterval(timerId);
  questionsDiv.classList.add("hide");
  quizEndDiv.classList.remove("hide");
  finalScore.innerText = score;
}

//Saving highscores in the localstorage
function highScores() {
  let name = nameDiv.value.trim();
  if (name !== "") {
    let highScores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    let newScore = {
      score: score,
      name: name,
    };
    highScores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highScores));
    alert("Your score has been submitted");
  }
}

// function checkForEnter(event) {
//   if (event.key === "Enter") {
//     highScores();
//     alert("Your Score has been Submitted");
//   }
// }
// nameDiv.onkeyup = checkForEnter;
btnSubmit.onclick = highScores;
btnStartQuiz.onclick = startQuiz;
