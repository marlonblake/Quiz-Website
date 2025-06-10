const questionBox = document.getElementById("question-box");
const showQuestion = document.getElementById("question");
const anwBtns = document.getElementsByClassName("btn");
const nextBtn = document.getElementById("next-btn");
const remainingQuestions = document.getElementById("remaining-questions");
const score = document.getElementById("score");
const current = document.getElementsByClassName("active");

let questionIndex = 0;
let result = 0;

// Rendering questions that saved in question.js as javascript objects.

function renderQuestion() {
    if (questionIndex > myQuestions.length) return;
      remainingQuestions.textContent = myQuestions.length - questionIndex;
      let q = myQuestions[questionIndex];
      showQuestion.innerHTML = q.question;
// Convert the object entries into an array and use forEach
      Object.entries(q.answers).forEach(([key, value]) => {
        let answersArray = document.getElementById(key);
        answersArray.textContent = value;
      });
    }
renderQuestion()

// Keeping clicked button/answer highlighted. CSS has also been used.

for (let i = 0; i < anwBtns.length; i++) {
  anwBtns[i].addEventListener("click", function() {
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
    this.className += " active";
  });
}

// Click function for go to next question. 

nextBtn.addEventListener("click", function () {
  
    let q = myQuestions[questionIndex];
    let answer = current[0];
    let correct = document.getElementById(q.correctAnswer);

    if (answer === correct) {
        result++;
        correct.style.removeProperty("background-color");
    }

    current[0].className = current[0].className.replace(" active", "");
    questionIndex++;

    if (questionIndex === myQuestions.length) {
        questionBox.textContent = "Well Done!!";
        nextBtn.textContent = "AGAIN";
        remainingQuestions.textContent = 0;
    } else {
        renderQuestion();
    }

    score.textContent = result;
});
