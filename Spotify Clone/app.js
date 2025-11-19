// Select elements
const playBtn = document.querySelector(".play");
const audio = new Audio("audio/daylight.mp3"); // put your correct file path
let isPlaying = false;

// Play / Pause Logic
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    playBtn.src = "./assets/player_icon_pause.png"; // add your pause icon
  } else {
    audio.pause();
    isPlaying = false;
    playBtn.src = "./assets/player_icon3.png"; // your play icon
  }
});
