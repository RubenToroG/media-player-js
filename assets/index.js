const video = document.querySelector("video")
const button = document.querySelector('button')

function MediaPlayer(configuracion) {
    this.miVideo = configuracion.paso

}

MediaPlayer.prototype.avanza = function(){
    this.miVideo.play()
}

const comienza = new MediaPlayer({ paso: video })

button.onclick = () => comienza.avanza()