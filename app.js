let randomNumber;
let minRange = 1;
let maxRange = 100;

// DOM Elements
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const startBtn = document.getElementById("start-btn");
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const feedback = document.getElementById("feedback");
const minRangeElement = document.getElementById("min-range");
const maxRangeElement = document.getElementById("max-range");

// Initialize game
function startGame() {
  randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  console.log("Random Number (For Debug):", randomNumber);
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  feedback.innerText = "";
  guessInput.value = "";
}

// Handle Guess
function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (!userGuess) {
    alert("Please enter a valid number.");
    return;
  }

  if (userGuess === randomNumber) {
    feedback.innerText = `🎉 Congratulations! You guessed the correct number: ${randomNumber}!`;
    feedback.style.color = "green";
    showPopup("success", "You guessed the number correctly!");
    resetGame();
  } else if (userGuess < randomNumber) {
    feedback.innerText = "📉 Too low! Try again.";
    feedback.style.color = "orange";
  } else {
    feedback.innerText = "📈 Too high! Try again.";
    feedback.style.color = "red";
  }
}

// Reset Game
function resetGame() {
  setTimeout(() => {
    feedback.innerText = "";
    guessInput.value = "";
    startScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
  }, 3000); // Reset game after 3 seconds
}

// Show Popup
function showPopup(type, message) {
  alert(message);
}

// Event Listeners
startBtn.addEventListener("click", startGame);
guessBtn.addEventListener("click", checkGuess);

// Set Range Display
minRangeElement.innerText = minRange;
maxRangeElement.innerText = maxRange;
