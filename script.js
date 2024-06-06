// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="Correct Number!";

// document.querySelector('.number').value=13;
// document.querySelector('.score').value = 10;

// // console.log(document.querySelector('.guess').value );
// document.querySelector('.guess').value = 23;

// // event listener
// click is the type of the event
// the other function the the event handler function
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent=secretNumber;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const guess = Number(document.querySelector('.guess').value);
  if (guess === secretNumber) {
    // bacgound and the width of secretnumber
    document.querySelector('body').style.backgroundColor = ' #222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  }

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    // when no input is there

    document.querySelector('.message').textContent = 'Please type a number!';
  } else if (guess === secretNumber) {
    // when the guess is correct

    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30 rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    // when the guess is too high

    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game!';
      score = 0;
    }
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    // whent the guess is too low

    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
    } else {
      document.querySelector('.message').textContent =
        'You have lost the game!';
      score = 0;
    }
    document.querySelector('.score').textContent = score;
  }
});
