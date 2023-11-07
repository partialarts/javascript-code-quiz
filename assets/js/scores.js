// Define variables for required DOM nodes
var highScoresEl = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");


// Event listener to clear local storage when "Clear Highscores" is clicked
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Get high scores from local storage
var highScores = JSON.parse(localStorage.getItem("scores")) || [];

// Sort high scores from highest to lowest
highScores.sort(function (a, b) {
    if (a.timeLeft > b.timeLeft) {
        return -1;
    }
    if (a.timeLeft === b.timeLeft) {
        return 0;
    }
    if (a.timeLeft < b.timeLeft) {
        return 1;
    }
});

// iterates through the high scores for the length of the array
for (var i = 0; i < highScores.length; i++) { 
    var initialsLi = document.createElement("li"); // creates list node for each answer
    initialsLi.textContent = highScores[i].initialsText + " - " + highScores[i].timeLeft; // appends initials to score and returns it to the node
    highScoresEl.appendChild(initialsLi);
}