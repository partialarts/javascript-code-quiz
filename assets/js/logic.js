// define variables for all required DOM nodes
var timerEl = document.getElementById('time');
var startScreenEl = document.getElementById('start-screen');
var startBtn = document.getElementById('start');
var questionsEl = document.getElementById('questions');
var questionsTitle = document.getElementById('question-title');
var questionsChoices = document.getElementById('choices');
var endScreenEl = document.getElementById('end-screen');
var finalScoreEl = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var submitBtn = document.getElementById('submit');
var feedbackEl = document.getElementById('feedback');

// Define global variables for timer and current question
var questionIndex = 0;
var timeLeft = 60;


// The startQuiz function is called when startButton is clicked
function startQuiz() {
  startScreenEl.style.display = "none";
  questionsEl.setAttribute("class", "start");
  getQuestion(questionIndex);
  startCountdown();
}

function endQuiz() {
    questionsEl.style.display = "none"
    endScreenEl.setAttribute("class", "start");
    finalScoreEl.textContent = timeLeft;
  }

function getQuestion(currentQuestion) {
  if (currentQuestion < questions.length) {
    questionsTitle.textContent = questions[currentQuestion].question;
    feedbackEl.setAttribute("class", "feedback");
      for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var button = document.createElement("button");
        button.setAttribute("data-state", i);
        button.textContent = questions[currentQuestion].answers[i];
        questionsChoices.appendChild(button);
      }
  } else 
      endQuiz();
}   

// Timer that counts down from 60
function startCountdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timer = setInterval(function() {
    // Set the `textContent` of `timerEL` to show the remaining seconds and decrement 'timeLeft' by 1
    timeLeft--;
    timerEl.textContent = timeLeft;
    // Conditional statement to show the remaining time left as long as countdownTimer is greater than 1
    if(timeLeft === 0) {
      clearInterval(timer)
      endQuiz();
    }
  }, 1000);
}

// Attach event listener to questionChoices buttons and validate whether answer is correct
questionsChoices.addEventListener("click", function(event) {
    var chosenButton = event.target;
    if (chosenButton.matches("button")) {
        var answerData = chosenButton.getAttribute("data-state");
        if (answerData == questions[questionIndex].correct) {
            feedbackEl.textContent = "Correct!"
        } else {
            feedbackEl.textContent = "Wrong!"
            timeLeft -= 10;
        }
        questionIndex++;
        getQuestion(questionIndex);
    }
});

// Attach event listener to start button to call startGame function on click
startBtn.addEventListener("click", startQuiz);





// If statement for questions
// if questions[array number].answers === questions[array number].correct === 2; set #start screen: ""
// else --10 from timer variables

// create function with number parameter for button within "questions" div in HTML
// Use for loop to iterate buttonEL and create