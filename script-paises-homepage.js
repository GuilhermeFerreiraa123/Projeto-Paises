var cloneOriginalCard = $('#country-card-template').html();
var erro_message = document.getElementById('Erro-Message');
var card_info = document.getElementsByClassName('card-info-paises');
let numeroAleatorio1 = Math.floor(Math.random() * 249);
let numeroAleatorio2 = Math.floor(Math.random() * 249);
let numeroAleatorio3 = Math.floor(Math.random() * 249);

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


    var pais = paises[numeroAleatorio1];
    var cloneCard = $(cloneOriginalCard).clone();
    $('.card-title', cloneCard).text(pais.name.common);
    $('.card-img-top', cloneCard).attr("src", pais.flags.png);
    $('#countries-list').append(cloneCard);

    var pais = paises[numeroAleatorio2];
    var cloneCard = $(cloneOriginalCard).clone(); 
    $('.card-title', cloneCard).text(pais.name.common);
    $('.card-img-top', cloneCard).attr("src", pais.flags.png);
    $('#countries-list').append(cloneCard);
    
    var pais = paises[numeroAleatorio3];
    var cloneCard = $(cloneOriginalCard).clone();
    $('.card-title', cloneCard).text(pais.name.common);
    $('.card-img-top', cloneCard).attr("src", pais.flags.png);
    $('#countries-list').append(cloneCard);
    erro_message.style.display = 'none';
}
