var cloneOriginalCard = $('#country-card-template').html();
var erro_message = document.getElementById('Erro-Message');
var card_info = document.getElementsByClassName('card-info-paises');
var checkbox_europe = document.getElementById('europebox');
const radios = document.getElementsByName('countriesoptions');
var selectedValue = null;
var arrayfavoritos;

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

  if (localStorage.getItem("pais") === null) {
    arrayfavoritos = [];
  } else {
    arrayfavoritos = JSON.parse(localStorage.getItem("pais"));
  }

  for (var i = 0; i < paises.length; i++) {
    var pais = paises[i];
    var cloneCard = $(cloneOriginalCard);
    console.log(checkbox_europe.value);
    $('.card-title', cloneCard).text(pais.name.common);
    $('.card-img-top', cloneCard).attr("src", pais.flags.png);
    $('.card-body', cloneCard).append('<p>Continente: ' + pais.region + '</p>');
    var estrelaicon = $('#estrela', cloneCard).attr("class", "bi bi-star icon-favorites btn-favoritos");
    erro_message.style.display = 'none';

    var objectPais = {
      "nome": pais.name.common,
      "populacao": pais.population,
      "bandeira": pais.flags.png,
      "continente": pais.region
    };

    var stringObjectPais = JSON.stringify(objectPais);
    $('.btn-favoritos', cloneCard).attr("onclick", "addfavoritos(" + stringObjectPais + ", this)");

    ispaisfavoritos(pais, estrelaicon);
    $('#countries-list').append(cloneCard);
  }
}

function addfavoritos(pais, iconestrelaElement) {
  var existe = false;

  if (localStorage.getItem("pais") === null) {
    arrayfavoritos = [];
  } else {
    arrayfavoritos = JSON.parse(localStorage.getItem("pais"));
  }


  for (let i = 0; i < arrayfavoritos.length; i++) {
    if (arrayfavoritos[i].nome === pais.nome) {
      arrayfavoritos.splice(i, 1);
      existe = true;
      $(iconestrelaElement).attr("class", "bi bi-star icon-favorites");
    }
  }

  if (!existe) {
    arrayfavoritos.push(pais);
    $(iconestrelaElement).attr("class", "bi bi-star-fill icon-favorites");
  }

  localStorage.setItem("pais", JSON.stringify(arrayfavoritos));

}


function ispaisfavoritos(pais, estrelaElement) {

  var encontrado = false;

  if (localStorage.getItem("pais") === null) {
    return;
  }


  for (let i = 0; i < arrayfavoritos.length; i++) {
    if (arrayfavoritos[i].nome === pais.name.common) {
      $(estrelaElement).attr("class", "bi bi-star-fill icon-favorites");
      encontrado = true;
    }
  }

  if (!encontrado) {
    $(estrelaElement).attr("class", "bi bi-star icon-favorites");
  }
}


/*function submitfilter() {
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }

  console.log('Valor selecionado:', selectedValue);
}*/