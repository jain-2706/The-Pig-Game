"use strict";
const image = document.querySelector(".alag");
let current_score, active_player, score, t, t1, playing;
const init = function () {
  current_score = 0;
  playing = true;
  score = 0;
  t = 0;
  t1 = 0;
  active_player = 1;
  image.classList.add("hidden");
  document.querySelector("#current_score0e1").textContent = current_score;
  document.querySelector("#current_score1e2").textContent = current_score; // Corrected ID
  document.getElementById("score0e1").textContent = score;
  document.getElementById("score1e2").textContent = score;
  document.querySelector(".left").id = "player_active";
  document.querySelector(".right").id = "";
  document.querySelector(".left").classList.remove("player_winner");
  document.querySelector(".right").classList.remove("player_winner"); // Corrected class removal
};
init();
const new_game = function () {
  current_score = 0;
  document.getElementById(
    `current_score${active_player - 1}e${active_player}`
  ).textContent = current_score;
  active_player = active_player === 1 ? 2 : 1;
  document.querySelector(".left").id =
    active_player === 1 ? "player_active" : "";
  document.querySelector(".right").id =
    active_player === 2 ? "player_active" : "";
};

document.getElementById("roll").addEventListener("click", function () {
  if (playing) {
    let random_Number = Math.trunc(Math.random() * 6) + 1;
    console.log(random_Number);
    image.classList.remove("hidden");
    image.src = `dice-${random_Number}.png`;
    if (random_Number !== 1) {
      current_score += random_Number;
      document.getElementById(
        `current_score${active_player - 1}e${active_player}`
      ).textContent = current_score;
    } else {
      new_game();
    }
  }
});

document.querySelector("#pataka").addEventListener("click", function () {
  if (playing) {
    if (active_player === 1) {
      t += current_score;
      score = t;
    } else {
      t1 += current_score;
      score = t1;
    }
    document.getElementById(
      `score${active_player === 1 ? 0 : 1}e${active_player}`
    ).textContent = score;

    if (score < 100) {
      new_game();
    } else {
      playing = false;
      image.classList.add("hidden");
      document.querySelector(".left").id = "";
      document.querySelector(".right").id = "";
      if (active_player === 1) {
        document.querySelector(".left").classList.add("player_winner");
      } else {
        document.querySelector(".right").classList.add("player_winner");
      }
    }
  }
});
document.getElementById("reset").addEventListener("click", init);
