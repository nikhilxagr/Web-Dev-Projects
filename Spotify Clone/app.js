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


const playbackBar = document.querySelector(".playback-bar");
const currentTimeText = document.querySelectorAll(".time")[0];
const volumeBar = document.querySelector(".volumn-bar");

// default volume
audio.volume = 0.8;

volumeBar.addEventListener("input", () => {
    audio.volume = volumeBar.value / 100;
});

const durationText = document.querySelectorAll(".time")[1];

// When audio meta is loaded, show duration
audio.addEventListener("loadedmetadata", () => {
  playbackBar.max = audio.duration;
  durationText.textContent = formatTime(audio.duration);
});

// Update bar while playing
audio.addEventListener("timeupdate", () => {
  playbackBar.value = audio.currentTime;
  currentTimeText.textContent = formatTime(audio.currentTime);
});

// Seek
playbackBar.addEventListener("input", () => {
  audio.currentTime = playbackBar.value;
});

// Format time (helper function)
function formatTime(sec) {
  let m = Math.floor(sec / 60);
  let s = Math.floor(sec % 60);
  if (s < 10) s = "0" + s;
  return `${m}:${s}`;
}

const volumebar = document.querySelector(".volumn-bar");

// default volume
audio.volume = 0.8;

volumebar.addEventListener("input", () => {
    audio.volume = volumeBar.value / 100;
});
