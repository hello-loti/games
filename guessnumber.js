const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const resultDisplay = document.getElementById('result');
const submitButton = document.getElementById('submitGuess');
const guessInput = document.getElementById('guess');

submitButton.addEventListener('click', () => {
    const guess = Number(guessInput.value);
    if (guess === randomNumber) {
        resultDisplay.textContent = 'Congratulations! You guessed the number!';
    } else if (guess < randomNumber) {
        resultDisplay.textContent = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        resultDisplay.textContent = 'Too high! Try again.';
    }
});
