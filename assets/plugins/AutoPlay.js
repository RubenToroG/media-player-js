class AutoPlay {
  constructor(myVideo) {
    this.player = myVideo;
  }
  run() {
    this.player.muted = true;
    this.player.play();
  }
}

export default AutoPlay;
