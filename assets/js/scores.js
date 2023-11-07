// Define variables for required DOM nodes
var highScoresEl = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");


// Event listener to clear scores
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Get high scores from local storage
var highScores = JSON.parse(localStorage.getItem("scores")) || [];

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

for (var i = 0; i < highScores.length; i++) { // iterates through the answers for the length of the array
    var initialsLi = document.createElement("li");
    initialsLi.textContent = highScores[i].initialsText + " - " + highScores[i].timeLeft;
    highScoresEl.appendChild(initialsLi);
}