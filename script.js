'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔️ No number!`);

    // When player wins
  } else if (secretNumber === guess) {
    displayMessage(`🎉 Correct Number!`);
    document.querySelector('body').style.backgroundColor = '#1c7700';
    document.querySelector('.number').style.width = '70%';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (secretNumber !== guess) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`)
      document.querySelector('.score').textContent = --score;
    } else {
      displayMessage(`💥 You lost the game!`);
      document.querySelector('.score').textContent = 0;
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '40%';
  document.querySelector('.guess').disabled = false;
  displayMessage(`Start guessing...`);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
})