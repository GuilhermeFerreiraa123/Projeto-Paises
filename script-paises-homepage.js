var cloneOriginalCard = $('#country-card-template').html();
var erro_message = document.getElementById('Erro-Message');
var card_info = document.getElementsByClassName('card-info-paises');

$(document).ready(function () {
    carregarTodosPaises();
});

function carregarTodosPaises() {
    $('#countries-list').html('');

    $.ajax({
        method: 'GET',
        url: 'https://restcountries.com/v3.1/all'
    }).done(function (dados) {
        exibirPaises(dados);
    }).fail(function () {
        alert('Erro ao buscar informações dos países.');
    });
}

function exibirPaises(paises) {

    var pais = paises[62];
    var cloneCard = $(cloneOriginalCard).clone(); // Clone o template do card

    // Preencha o card com as informações do país
    $('.card-title', cloneCard).text(pais.name.common);
    $('.card-img-top', cloneCard).attr("src", pais.flags.png);
    $('#countries-list').append(cloneCard);
    var pais = paises[177];
    var cloneCard = $(cloneOriginalCard).clone(); // Clone o template do card

    // Preencha o card com as informações do país
    $('.card-title', cloneCard).text(pais.name.common);
    $('.card-img-top', cloneCard).attr("src", pais.flags.png);
    $('#countries-list').append(cloneCard);
    var pais = paises[108];
    var cloneCard = $(cloneOriginalCard).clone(); // Clone o template do card

    // Preencha o card com as informações do país
    $('.card-title', cloneCard).text(pais.name.common);
    $('.card-img-top', cloneCard).attr("src", pais.flags.png);
    $('#countries-list').append(cloneCard);
    erro_message.style.display = 'none';
}
