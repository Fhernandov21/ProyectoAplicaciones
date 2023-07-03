const media = document.getElementById('video-media');
const play = document.getElementById ("playBtn");
const pause = document.getElementById ("pauseBtn");
const rewind = document.getElementById ("rwBtn");

play.addEventListener('click', ()=> {
    media.play();
});

pause.addEventListener('click', ()=> {
    media.pause();
});

rewind.addEventListener('click', () => {
    media.load();
});