'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = `⛔️ No number!`;

    // When player wins
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = `🎉 Correct Number!`;
    document.querySelector('body').style.backgroundColor = '#1c7700';
    document.querySelector('.number').style.width = '70%';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📈 Too high!`;
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = `💥 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📉 Too low!`;
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = `💥 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '40%';
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
})