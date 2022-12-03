const player0El = document.querySelector(".player0");
const player1El = document.querySelector(".player1");
const score0El = document.querySelector("#scoreid0");
const score1El = document.getElementById("scoreid1");
const curruntScore1El = document.getElementById("current--0");
const curruntScore2El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const winner = document.querySelector(".winner");

score0El.textContent = 0;
score1El.textContent = 0;

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.innerText = 0;
  score1El.innerText = 0;
  curruntScore1El.innerText = 0;
  curruntScore2El.innerText = 0;
  winner.classList.add("hidden");
};

init();

const btnew = document.querySelector(".bnew");
const btdice = document.querySelector(".bdice");
const bhold = document.querySelector(".bhold");

playerSwitch = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player-active");
  player1El.classList.toggle("player-active");
};
btdice.addEventListener("click", function () {
  if (playing) {
    //get dice number randomly
    const diceno = Math.trunc(Math.random() * 6 + 1);

    // dice showing

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${diceno}.png`;

    if (diceno !== 1) {
      // if we found not 1 as result

      currentScore += diceno;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } // if found 1 as result
    else {
      playerSwitch();
    }
  }
});

bhold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.querySelector(`#scoreid${activePlayer}`).innerText =
      scores[activePlayer];

    if (document.querySelector(`#scoreid${activePlayer}`).innerText >= 20) {
      playing = false;
      winner.classList.remove("hidden");
    }

    playerSwitch();
  }
});

// for new game

btnew.addEventListener("click", init);
