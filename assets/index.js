import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const myVideo = document.querySelector("video");
const buttonPlay = document.getElementById("buttonPlay");
const buttonMute = document.getElementById("buttonMute");

const player = new MediaPlayer({
  myVideo,
  plugins: [new AutoPlay(myVideo)],
});

buttonPlay.onclick = () => player.togglePlayPause();
buttonMute.onclick = () => player.toggleMutedUnmuted();
