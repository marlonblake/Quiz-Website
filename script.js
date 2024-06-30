const questionBox = document.getElementById("question-box");
const showQuestion = document.getElementById("question");
const anwBtns = document.getElementsByClassName("btn");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
let current = document.getElementsByClassName("active");

let result = "";
let questionIndex = 0;

// Rendering questions that saved in question.js as javascript objects.

function renderQuestion() {
    if (questionIndex > myQuestions.length) return; 
      let q = myQuestions[questionIndex];
      showQuestion.innerHTML = q.question;
// Convert the object entries into an array and use forEach
      Object.entries(q.answers).forEach(([key, value]) => {
        let q = document.getElementById(key);
        q.textContent = value;
      });
    }
renderQuestion()

// Click function for go to next question.

nextBtn.addEventListener("click", function() {

  if (myQuestions.length === questionIndex + 1) {
    questionBox.textContent = "Well Done!!";
    nextBtn.textContent = "AGAIN";
    resultBox.textContent = "END.";

  } else {
    questionIndex++;
    resultBox.textContent = "Click to Check!";
    current[0].className = current[0].className.replace(" active", "");
    renderQuestion();
  }
});

// Keeping clicked button/answer highlighted. CSS has also been used.

for (let i = 0; i < anwBtns.length; i++) {
  anwBtns[i].addEventListener("click", function() {
    if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
    this.className += " active";
  });
}

// Check function that campare that selected answer and the correct answer when button was clicked. 

checkBtn.addEventListener("click", function(){
    let q = myQuestions[questionIndex];
    let answer = current[0].textContent;
    let correct = document.getElementById(q.correctAnswer).textContent;
    if (answer === correct) {
        result = "Correct :)";
    } else {
        result = "Incorrect :(";   
    }
    resultBox.textContent = result;
});
