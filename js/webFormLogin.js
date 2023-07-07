let name = document.getElementById('name');
let password = document.getElementById('password');
let result_name = document.getElementById('result-name');
let result_pass = document.getElementById('result-password');
let btn = document.getElementById('btnDestacado');
let results = document.getElementsByClassName('results');

function validate() {
    clearResults();
    location.href = '#form-colab';
    if (!name.checkValidity()) {
        result_name.innerHTML = name.validationMessage;
    }

    if (!password.checkValidity()) {
        result_pass.innerHTML = password.validationMessage;
    }

    visibleResults();
    // Los mensajes de validación se borrarán en 5 segundos
    setTimeout(clearResults, 5000);
}

btn.addEventListener('click', validate);

function visibleResults() {
    let n = results.length;
    for (let i = 0; i < n; i++)
    {
        results[i].classList.remove('hidden');
    }
}

function clearResults() {
    let n = results.length;
    for (let i = 0; i < n; i++)
    {
        results[i].innerHTML = "";
        results[i].classList.add('hidden');
    }
}