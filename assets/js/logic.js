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
var timer = 0;


// The startQuiz function is called when startButton is clicked
function startQuiz() {
    startScreenEl.style.display = "none"; // hides the start screen DOM node
    questionsEl.setAttribute("class", "start"); // Shows the questions DOM node
    getQuestion(questionIndex); // Runs the function to get the first question
    startCountdown(); // Starts the countdown timer function
}

// The endQuiz function is called when the timer runs out or all the questions are answered
function endQuiz() {
    clearInterval(timer); // clears the timer
    timerEl.textContent = 0; // sets timer text to 0
    questionsEl.style.display = "none"; // hides the quesions DOM node
    endScreenEl.setAttribute("class", "start"); // shows the end-screen DOM node
    if (timeLeft < 0) { // Conditional to change the score to 0 if it is a negative integer
        finalScoreEl.textContent = 0;
    } else { // Otherwise display the score using the timeLeft variable.
        finalScoreEl.textContent = timeLeft;
    }
}

// Timer that counts down from 60
function startCountdown() {
    timer = setInterval(function () { // The `setInterval()` method calls a function to be executed every 1000 milliseconds
        timeLeft--; // decrement 'timeLeft' by 1
        timerEl.textContent = timeLeft; // Set the `textContent` of `timerEL` to show the remaining seconds
        // Conditional statement to run the endQuiz() function if the score drops to 0
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}


function getQuestion(currentQuestion) {
    if (currentQuestion < questions.length) {
        questionsTitle.textContent = questions[currentQuestion].question;
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
            var button = document.createElement("button");
            button.setAttribute("data-state", i);
            button.textContent = questions[currentQuestion].answers[i];
            questionsChoices.appendChild(button);
        }
    } else {
        endQuiz();
    }
}

function clearFeedback() {
    feedbackEl.setAttribute("class", "feedback hide"); // clears question feedback from the screen 
}

// Attach event listener to questionChoices buttons and validate whether answer is correct
questionsChoices.addEventListener("click", function (event) {
    feedbackEl.setAttribute("class", "feedback");
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
        questionsChoices.textContent = "";
        getQuestion(questionIndex);
        setTimeout(clearFeedback, 1000); // Runs the clearFeedback function after 1 second
    }
});

// Attach event listener to start button to call startGame function on click
startBtn.addEventListener("click", startQuiz);