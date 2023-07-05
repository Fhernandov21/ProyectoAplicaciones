let userContent = document.getElementById('user-content');
let cameraButton = document.getElementById('cameraButton');
let originalUC = userContent.innerHTML;
let buttonPhoto = document.getElementById('button-photo');
let originalBP = buttonPhoto.innerHTML;
let takePhoto = document.getElementById('takePhotoButton');
let canvas = document.getElementById('canvas');
let video = document.getElementById('video-camera');
let userIcon = document.getElementById('user-icon');
let context = canvas.getContext('2d');
let streaming = null;

cameraButton.addEventListener("click", ()=>{
    cameraButton.classList.add('hidden');
    takePhoto.classList.remove('hidden');
    video.classList.remove('hidden');
    userIcon.classList.add('hidden');    

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream){
            streaming = stream;
            video.srcObject = stream;
            video.play();
        })
        .catch(function(error){
            console.log(error);
        });
    }
    else {
        alert('getUserMedia not supported :P');
    }
    
});

function stopCamera() {
    let track = streaming.getTracks()[0];
    track.stop();
    video.load();
    streaming = null;
}

takePhoto.addEventListener("click", function() {
    
    canvas.classList.remove('hidden');
    video.classList.add('hidden');
    context.drawImage(video, 0, 0, 112, 112);
    stopCamera();
});