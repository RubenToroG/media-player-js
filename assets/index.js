const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config) {
  this.miVideo = config.element;
}

MediaPlayer.prototype.playVideo = function () {
  this.miVideo.playVideo();
};

MediaPlayer.prototype.pauseVideo = function () {
  this.miVideo.pauseVideo();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.miVideo.paused) {
    this.miVideo.play();
  } else {
    this.miVideo.pause();
  }
};

const player = new MediaPlayer({ element: video });

button.onclick = () => player.togglePlay();
