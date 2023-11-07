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
var correctSound = document.getElementById('correct');
var incorrectSound = document.getElementById('incorrect');

// Define global variables for timer and current question index
var questionIndex = 0;
var timeLeft = 60;
var timer = 0;

// The startQuiz function is called when startButton is clicked
function startQuiz() {
    startScreenEl.style.display = "none"; // hides the start screen DOM node
    questionsEl.setAttribute("class", "start"); // Shows the questions DOM node
    startCountdown(); // Starts the countdown timer function
    getQuestion(questionIndex); // Runs the function to get the first question
}

// The endQuiz function is called when the timer runs out or all the questions are answered
function endQuiz() {
    clearInterval(timer); // clears the timer
    timerEl.textContent = 0; // sets timer text to 0
    questionsEl.style.display = "none"; // hides the quesions DOM node
    endScreenEl.setAttribute("class", "start"); // shows the end-screen DOM node
    if (timeLeft < 0) { // Change the timer to 0 if it is a negative integer
        timeLeft = 0;
    }
        finalScoreEl.textContent = timeLeft;
}

// Timer that counts down from 60
function startCountdown() {
    timer = setInterval(function () { // The `setInterval()` method calls a function to be executed every 1000 milliseconds
        timeLeft--; // decrement 'timeLeft' by 1
        timerEl.textContent = timeLeft; // Set the `textContent` of `timerEL` to show the remaining seconds
        if (timeLeft <= 0) {  // Run the endQuiz() function if the score drops to 0 or below
            endQuiz();
        }
    }, 1000);
}

function getQuestion(currentQuestion) { // Function to get a question
    if (currentQuestion < questions.length) { // Display a question as long as the question index hasn't reached the end of the array
        questionsTitle.textContent = questions[currentQuestion].question; // display the current question in the question-title node
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) { // iterates through the answers for the length of the array
            var button = document.createElement("button"); // declares variable for the button and creates a button element
            button.setAttribute("data-state", i); // Sets data of each button to correspond to the index of it's answer
            button.textContent = questions[currentQuestion].answers[i]; // Sets text of each button to index of answer
            questionsChoices.appendChild(button);
        }
    } else {
        endQuiz(); // ends the quiz once all the questions have been iterated through
    }
}

function clearFeedback() {
    feedbackEl.setAttribute("class", "feedback hide"); // clears question feedback from the screen 
}

// Event listener for submit button, to submit the form
submitBtn.addEventListener("click", function (event) { // listens for click on submitBtn
    event.preventDefault(); // Prevents default form behaviour
    if(initialsInput.value === "") { // Alerts user if form is left blank
        alert("Initials can't be blank");
    } else {
      var initialsText = initialsInput.value.trim(); // Trims empty space from form input
      var scores = JSON.parse(localStorage.getItem("scores")) || []; // Gets scores from localStorage array
      scores.push({initialsText, timeLeft}) // Pushes scores to new object
      localStorage.setItem("scores", JSON.stringify(scores)); // Creates item in localStorage for scores
      document.location.assign("highscores.html") // Directs to high scores page
    }
});

// Event listener for questionChoices buttons and validation for whether answer is correct
questionsChoices.addEventListener("click", function (event) { // listens for click event on choices node
    feedbackEl.setAttribute("class", "feedback"); // shows the feedback node and applies it's CSS
    var chosenButton = event.target; // Variable created for the element where the click event ocurred
    if (chosenButton.matches("button")) { // Checks that click event is a button
        var answerData = chosenButton.getAttribute("data-state"); // Gets the answer index
        if (answerData == questions[questionIndex].correct) { // Checks answer against correct one and displays feedback
            feedbackEl.textContent = "Correct!"
            correctSound.play();
        } else {
            feedbackEl.textContent = "Wrong!"
            timeLeft -= 10; // decrements timer by 10 seconds if wrong answer is chosen
            incorrectSound.play();
        }
        questionIndex++; // adds 1 to the question index
        questionsChoices.textContent = ""; // resets choices node
        getQuestion(questionIndex); // runs getQuestion function to generate the next question
        setTimeout(clearFeedback, 1500); // Runs the clearFeedback function after 1.5 seconds
    }
});

// Attach event listener to start button to call startGame function on click
startBtn.addEventListener("click", startQuiz);