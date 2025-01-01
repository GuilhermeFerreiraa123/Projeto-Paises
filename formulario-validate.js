document.getElementById("formulario").addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {

    var mensgemerro = false;
    var primeironomevalido = false;
    var segundonomevalido = false;
    var emailvalido = false;
    var numerotelefonevalido = false;
    var primeironome = document.getElementById('campoPrimeiroNome');
    var segundonome = document.getElementById('campoSegundoNome');
    var email = document.getElementById('campoEmail');
    var telefone = document.getElementById('campoTelefone');
    var valide_text = document.getElementById('valide-text');

    if (primeironome.value.length < 3) {
        mensgemerro = "*Insira um Primeiro Nome Válido [min. 3 caracteres]";
        console.log(mensgemerro);
        showError("campoPrimeiroNome", mensgemerro);
    }
    else
    {
        hideError("campoPrimeiroNome");
        primeironomevalido = true;
    }

    if (segundonome.value.length < 3) {
        mensgemerro = "*Insira um Segundo Nome Válido [min. 3 caracteres]";
        console.log(mensgemerro);
        showError("campoSegundoNome", mensgemerro);
    }
    else
    {
        hideError("campoSegundoNome");
        segundonomevalido = true;
    }

    if ((validateemail(email.value)) == false) {
        mensgemerro = "*Email Inválido";
        console.log(mensgemerro);
        showError("campoEmail", mensgemerro);
    }
    else
    {
        hideError("campoEmail");
        emailvalido = true;
    }

    if (telefone.value.length < 9 || telefone.value.slice(0, 2) != 91 && telefone.value.slice(0, 2) != 96 && telefone.value.slice(0, 2) != 92) {
        mensgemerro = "*Insira um número de telefone válido";
        console.log(mensgemerro);
        showError("campoTelefone", mensgemerro);
    }
    else
    {
        hideError("campoTelefone");
        numerotelefonevalido = true;
    }

    if(primeironomevalido == true && segundonomevalido == true && emailvalido == true && numerotelefonevalido == true)
    {
        valide_text.textContent = ' - O seu formulário foi submetido';
        valide_text.style.display = "inline";
    }
}

function validateemail(email) {

    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function showError(campoId, mensagem) {
    var elemento = document.getElementById(campoId);
    if (elemento != null) {
        var feedbackDiv = document.querySelector(`#${campoId} ~ .invalid-feedback`);

        if (feedbackDiv != null) {
            feedbackDiv.textContent = mensagem;
            feedbackDiv.style.display = "inline";
        }
    }
}

function hideError(campoId) {
    var campo = document.getElementById(campoId);
    if (campo != null) {
        var feedbackDiv = document.querySelector(`#${campoId} ~ .invalid-feedback`);

        if (feedbackDiv != null) {
            feedbackDiv.textContent = '';
            feedbackDiv.style.display = "block";
        }
    }
}
