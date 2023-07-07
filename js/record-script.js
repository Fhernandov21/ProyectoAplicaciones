let record = document.getElementById('record');
let stopRecord = document.getElementById('stopRecord');
let mensaje = document.getElementById('message');

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();
rec.lang = "es-ES";
rec.continuous = true;
rec.interimResult = false;

record.addEventListener('click', () => {
    mensaje.value = "";
    record.innerHTML = "Grabando";
    rec.start();
});

stopRecord.addEventListener('click', () => {
    record.innerHTML = "Grabar";
    rec.abort();
});

rec.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;
    mensaje.value += texto;
}