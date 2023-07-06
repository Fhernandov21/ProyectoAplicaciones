const media = document.getElementById('video-media');
const play = document.getElementById ("playBtn");
const pause = document.getElementById ("pauseBtn");
const rewind = document.getElementById ("rwBtn");
const forward = document.getElementById ("fwBtn");
const fullscreen = document.getElementById ("fsBtn");

const seekBar = document.getElementById("seek-bar");
const volumeBar = document.getElementById("volume-bar");

play.addEventListener('click', ()=> {
    play.classList.add('hidden')
    pause.classList.remove('hidden')
    media.play();
});

pause.addEventListener('click', ()=> {
    pause.classList.add('hidden')
    play.classList.remove('hidden')
    media.pause();
});

rewind.addEventListener('click', () => {
    media.currentTime -=5;
});

forward.addEventListener('click', () => {
    media.currentTime +=5;
});

fullscreen.addEventListener("click", function() {
    if (media.requestFullscreen) {
        media.requestFullscreen();
    } else if (media.mozRequestFullScreen) {
        media.mozRequestFullScreen(); // Firefox
    } else if (media.webkitRequestFullscreen) {
        media.webkitRequestFullscreen(); // Chrome and Safari
    }
});

function volverVideos(){
    window.location.href = "videos.html"; 
}

media.addEventListener('timeupdate', () => {

    seekBar.value = media.currentTime / media.duration * seekBar.max;
  })
  
  seekBar.addEventListener('change', () => {
    media.currentTime = media.duration * seekBar.value / seekBar.max
  })