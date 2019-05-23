/*
GAME FUNCTION:
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if they lose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for Guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    // Diable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = "green";
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, "green");
  } else {
  }
});

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
