let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password-2');
let result_name = document.getElementById('result-name');
let result_email = document.getElementById('result-email');
let result_pass = document.getElementById('result-password');
let result_pass2 = document.getElementById('result-password-2');
let btn = document.getElementById('btnDestacado');
let results = document.getElementsByClassName('results');

function validate() {
    clearResults();
    location.href = '#form-wrapper';
    
    if (!name.checkValidity()) {
        result_name.innerHTML = name.validationMessage;
    }

    if (!email.checkValidity()) {
        result_email.innerHTML = email.validationMessage;
    }

    if (!password.checkValidity()) {
        result_pass.innerHTML = password.validationMessage;
    }

    if (!password2.checkValidity()) {
        result_pass2.innerHTML = password2.validationMessage;
    }

    if (password.checkValidity() && password2.checkValidity() && password != password2) {
        result_pass2.innerHTML = "Las contraseñas no son iguales";
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