let record = document.getElementById('record');
let stopRecord = document.getElementById('stopRecord');
let mensaje = document.getElementById('message');

const rec = new webkitSpeechRecognition();
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();
rec.lang = "es-ES";
rec.continuous = true;
rec.interimResult = false;

record.addEventListener('click', () => {
    mensaje.value = "";
    rec.start();
});

stopRecord.addEventListener('click', () => {
    rec.abort();
});

rec.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;

    mensaje.value = texto;
    mensaje.value += texto;
}