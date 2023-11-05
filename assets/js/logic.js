// define variables for all required DOM nodes
var timerEl = document.getElementById('#time');
var startScreenEl = document.getElementById('#start-screen');
var startBtn = document.getElementById('#start');
var questionsEl = document.getElementById('#questions');
var questionsTitle = document.getElementById('#question-title');
var questionsChoices = document.getElementById('#choices');
var endScreenEl = document.getElementById('#end-screen');
var finalScoreEl = docunment.getElementById('#final-score');
var initialsInput = document.getElementById('#initials');
var submitBtn = document.getElementById('#submit');
var feedbackEl = document.getElementById('#feedback');

// define global variables for timer and current question
var currentQuestion = 0;

function startQuiz() {
    startBtn.style.display = "none";
    showQuestion();
    startTimer();
  }

// Timer that counts down from 60
function Countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var countdownInterval = setInterval(function() {
    // Set the `textContent` of `timerEL` to show the remaining seconds and decrement 'timeLeft' by 1
    timerEl.textContent = timeLeft;
    timeLeft--;
    // Conditional statement to show the remaining time left as long as countdownTimer is greater than 1
    if(timeLeft === 0) {
      clearInterval(countdownInterval);
      finalScoreEl.textContent = timeLeft;
    }
  }, 1000);
}




// If statement for questions
// if questions[array number].answers === questions[array number].correct === 2; set #start screen: ""
// else --10 from timer variables

// create function with number parameter for button within "questions" div in HTML
// Use for loop to iterate buttonEL and create 