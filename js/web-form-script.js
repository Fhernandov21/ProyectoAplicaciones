let submit = document.getElementById('submit-btn');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let direction = document.getElementById('direction');
let result_name = document.getElementById('result-name');
let result_email = document.getElementById('result-email');
let result_message = document.getElementById('result-message');
let result_dir = document.getElementById('result-dir');
let results = document.getElementsByClassName('results');

function validate() {
    // Valida (casi) todos los campos del form
    location.href = '#form-colab';
    if (!name.checkValidity()) {
        result_name.innerHTML = name.validationMessage;
    }

    if (!email.checkValidity()) {
        result_email.innerHTML = email.validationMessage;
    }

    if (!message.checkValidity()) {
        result_message.innerHTML = message.validationMessage;
    }

    if (!direction.checkValidity()) {
        result_dir.innerHTML = direction.validationMessage;
    }


    // Los mensajes de validación se borrarán en 5 segundos
    setTimeout(clearResults, 5000);
}

submit.addEventListener('click', validate);

function clearResults() {
    let n = results.length;
    for (let i = 0; i < n; i++)
    {
        results[i].innerHTML = "";
    }
}