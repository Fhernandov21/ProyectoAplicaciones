let record = document.getElementById('record');
let stopRecord = document.getElementById('stopRecord');
let mensaje = document.getElementById('message');
const rec = new webkitSpeechRecognition();
rec.lang = "es-ES";
rec.continuous = true;
rec.interimResult = false;

record.addEventListener('click', () => {
    rec.start();
});

stopRecord.addEventListener('click', () => {
    rec.abort();
});

rec.onresult = (event) => {
    const texto = event.results[event.results.length - 1][0].transcript;
    mensaje.value = texto;
}