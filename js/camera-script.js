let userContent = document.getElementById('user-content');
let cameraButton = document.getElementById('cameraButton');
let originalUC = userContent.innerHTML;

cameraButton.addEventListener("click", ()=>{
    userContent.innerHTML = `<video id="video-camera" autoplay="true"></video>`;
    let video = document.getElementById('video-camera');

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream){
            video.srcObject = stream;
        })
        .catch(function(error){
            console.log(error);
        });
    }
    else {
        alert('getUserMedia not supported :P');
    }
});