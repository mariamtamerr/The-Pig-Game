'use strict';
// first reset all --> scores to 0 and image to hidden

// Select score 0, score 1, and image
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');

let img = document.querySelector('.dice');

score0.textContent = 0;
score1.textContent = 0;
img.classList.add('hide');

// select roll dice button and other buttons

let rollDice = document.querySelector('.btn--roll');

//
// let currentScores = [0, 0];
// let activePlayer = 0;
// let nonActive = 0;

// current score of player 1
let current0 = document.getElementById('current--0');

// current score in the beginning for anyone
let currentScore = 0;

// construct an array. Active player equals to 0 which is also the first index. If not (activePlayer), then it's the second index which is still equal to 0
const scores = [0, 0];
let activePlayer = 0;
//

//
let hold = document.querySelector('.btn--hold');

// for toggling

let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

// /////////////////////////////////

// second

// PRESS Roll dice button
rollDice.addEventListener('click', function () {
  // Random Number
  let randomNumber = Math.trunc(Math.random() * 6) + 1;

  // Display the img with random number

  img.classList.remove('hide');
  img.src = `dice-${randomNumber}.png`;

  // 1 ?
  // --------------NO 1----------
  // current score = random number;
  //    display it

  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    hold.addEventListener('click', function () {
      document.getElementById(`score--${activePlayer}`).textContent =
        currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');

      //   activePlayer = activePlayer === 0 ? 1 : 0;
    });

    // // in case of PRESS hold button  ??
    // current score is added to score [i]
    // switch to next player

    // hold.addEventListener('click', function () {
    //   document.getElementById(`score--${activePlayer}`).textContent =
    //     currentScore;
    //   activePlayer = activePlayer === 0 ? 1 : 0;
    // });

    //   document
    //     .querySelector(`.player--${activePlayer}`)
    //     .classList.toggle('player--active');
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

// ---------- YES 1 ------------
//yes? then -->
//  current scpre = 0;
// and current score is added to score [i]
// switch to next player
