// script.js

// Initialize variables
let count = 0;
let timeLeft = 60;
let timerStarted = false; // Flag to track if timer has started
const timerDisplay = document.getElementById("timerDisplay");
const countDisplay = document.getElementById("count");
const counterButton = document.getElementById("counterButton");
const resetButton = document.getElementById("resetButton");
const gameOverModal = document.getElementById("gameOverModal");
const finalScore = document.getElementById("finalScore");
const closeModalButton = document.getElementById("closeModalButton");

let timerInterval;

// Handle button clicks
counterButton.addEventListener("click", () => {
    if (!timerStarted) {
        startTimer(); // Start the timer only on the first click
        timerStarted = true; // Set the flag to true to prevent starting the timer again
    }
    if (timeLeft > 0) {
        count++;
        countDisplay.textContent = count;
    }
});

// Start the timer when the button is clicked
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

        // End the game when time runs out
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up!";
            showGameOver();
        }
    }, 1000);
}

// Reset game
resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    count = 0;
    timeLeft = 60;
    countDisplay.textContent = count;
    timerDisplay.textContent = "Time left: 60 seconds";
    timerStarted = false; // Reset the timer start flag
    gameOverModal.style.display = "none"; // Close the modal when resetting the game
});

// Show the Game Over modal
function showGameOver() {
    finalScore.textContent = `Bitcoins Collected: ${count}`;
    gameOverModal.style.display = "flex"; // Display the modal
}

// Close the Game Over modal
closeModalButton.addEventListener("click", () => {
    gameOverModal.style.display = "none"; // Close the modal
});
