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

$('#btn-search').on('click', function () {
  var pesquisa = $('#titulo').val().trim();

  if (pesquisa === '') {
    carregarTodosPaises();
    return;
  }

  $('#countries-list').html('');

  $.ajax({
    method: 'GET',
    url: 'https://restcountries.com/v3.1/name/' + pesquisa
  }).done(function (dados) {
    exibirPaises(dados);
  }).fail(function () {

    erro_message.style.display = 'block';
  });
});

function exibirPaises(paises) {
  for (var i = 0; i < paises.length; i++) {
    var pais = paises[i];
    var cloneCard = $(cloneOriginalCard);

    $('.card-title', cloneCard).text(pais.name.common);
    $('.card-img-top', cloneCard).attr("src", pais.flags.png);
    $('.card-body', cloneCard).append('<p>Continente: ' + pais.region + '</p>');
    erro_message.style.display = 'none';

    var objectPais = {
      "nome": pais.name.common,
      "populacao": pais.population,
      "bandeira": pais.flags.png,
      "continente": pais.region
    };

    var stringObjectPais = JSON.stringify(objectPais);
    cloneCard.find('.btn-favoritos').attr("onclick", "addfavoritos(" + stringObjectPais + ")");

    $('#countries-list').append(cloneCard);
  }
}

function addfavoritos(pais) {
  var arrayfavoritos;
  
  if (localStorage.getItem("pais") === null) {
    arrayfavoritos = [];
  } else {
    arrayfavoritos = JSON.parse(localStorage.getItem("pais"));
  }

  arrayfavoritos.push(pais);

  var favoritosstorage = JSON.stringify(arrayfavoritos);
  localStorage.setItem("pais", favoritosstorage);
}
