class MediaPlayer {
  constructor({ myVideo, plugins }) {
    this.media = myVideo;
    this.plugins = plugins || [];
    this.__initPlugins();
  }

  __initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run();
    });
  }

  togglePlayPause() {
    this.media.paused ? this.media.play() : this.media.pause();
  }

  toggleMutedUnmuted() {
    this.media.muted = !this.media.muted;
  }
}

export default MediaPlayer;
