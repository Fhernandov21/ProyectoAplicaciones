const media = document.getElementById('video-media');
const play = document.getElementById ("playBtn");
const pause = document.getElementById ("pauseBtn");
const rewind = document.getElementById ("rwBtn");

const seekBar = document.getElementById("seek-bar");
const volumeBar = document.getElementById("volume-bar");

play.addEventListener('click', ()=> {
    media.play();
});

pause.addEventListener('click', ()=> {
    media.pause();
});

rewind.addEventListener('click', () => {
    media.currentTime -=5;
});


function volverVideos(){
    window.location.href = "videos.html"; 
}

seekBar.addEventListener("change", function() {
    // Calculate the new time
    let time = media.duration * (seekBar.value / 100);

    // Update the video time
    media.currentTime = time;
});