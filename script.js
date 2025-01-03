var cloneOriginalCard = $('#country-card-template').html();
var cloneFavoritosCard = $('#country-card-favoritos-template').html();
var erro_message = document.getElementById('Erro-Message');
var checkbox_europe = document.getElementById('europebox');
const radios = document.getElementsByName('countriesoptions');
var selectedValue = null;
var arrayfavoritos;


$(document).ready(function () {
  carregarTodosPaises();
  exibirFavoritosPaises(arrayfavoritos);
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
  if (localStorage.getItem("pais") === null) {
    arrayfavoritos = [];
  } else {
    arrayfavoritos = JSON.parse(localStorage.getItem("pais"));
  }

  for (var i = 0; i < paises.length; i++) {
    var pais = paises[i];
    var cloneCard = $(cloneOriginalCard);
    $('.card-title', cloneCard).text(pais.name.common);
    $('.card-img-top', cloneCard).attr("src", pais.flags.png);
    $('.card-body', cloneCard).append('<p>Continente: ' + pais.region + '</p>');
    var estrelaicon = $('#estrela', cloneCard).attr("class", "bi bi-star icon-favorites btn-favoritos");
   
    var objectPais = {
      "nome": pais.name.common,
      "populacao": pais.population,
      "bandeira": pais.flags.png,
      "continente": pais.region
    };

    var stringObjectPais = JSON.stringify(objectPais);
    $('.btn-favoritos', cloneCard).attr("onclick", "addfavoritos(" + stringObjectPais + ", this)");
    $('#btn-detalhes', cloneCard).attr("onclick", "exibirDetalhesPaises(" + i + ", " + paises +")");

    ispaisfavoritos(pais, estrelaicon);
    $('#countries-list').append(cloneCard);
  }
}


function exibirFavoritosPaises(arrayfavoritos) {
  if (localStorage.getItem("pais") === null) {
    arrayfavoritos = [];
  } else {
    arrayfavoritos = JSON.parse(localStorage.getItem("pais"));
  }

  // Certifique-se de usar o contêiner correto
  $('#countries-list-favoritos').html('');

  for (var i = 0; i < arrayfavoritos.length; i++) {
    var paisFavorito = arrayfavoritos[i];
    var cloneCard = $($('#country-card-favoritos-template').html());
    $('.card-favoritos-title', cloneCard).text(paisFavorito.nome); // Use 'nome'
    $('.card-favoritos-img-top', cloneCard).attr('src', paisFavorito.bandeira); // Use 'bandeira'
    $('.card-favoritos-body', cloneCard).html('<p>Continente: ' + paisFavorito.continente + '</p>');
    var estrelaicon = $('#estrela', cloneCard).attr("class", "bi bi-star-fill icon-favorites btn-favoritos");

    var stringObjectPais = JSON.stringify(paisFavorito);
    $('.btn-favoritos', cloneCard).attr("onclick", "addfavoritos(" + stringObjectPais + ", this)");


    $('#countries-list-favoritos').append(cloneCard);
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


function submitfilter() {
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }

  var pesquisa = $('#titulo').val().trim();

  $('#countries-list').html('');

  let url = 'https://restcountries.com/v3.1/all';


  if (selectedValue && pesquisa) {

    url = `https://restcountries.com/v3.1/region/${selectedValue}`;
  } else if (selectedValue) {

    url = `https://restcountries.com/v3.1/region/${selectedValue}`;
  } else if (pesquisa) {

    url = `https://restcountries.com/v3.1/name/${pesquisa}`;
  }

  $.ajax({
    method: 'GET',
    url: url,
  })
    .done(function (dados) {
      let paisesFiltrados = dados;


      if (selectedValue && pesquisa) {
        paisesFiltrados = paisesFiltrados.filter((pais) =>
          pais.name.common.toLowerCase().includes(pesquisa.toLowerCase())
        );
      }

      exibirPaises(paisesFiltrados);
    })
    .fail(function () {
      alert('Erro ao buscar informações dos países.');
    });
}

/*                                       DETALHES DOS PAISES                                    */

function exibirDetalhesPaises(indice, paises) {
  
  console.log(indice);
  if (localStorage.getItem("pais") === null) {
    arrayfavoritos = [];
  } else {
    arrayfavoritos = JSON.parse(localStorage.getItem("pais"));
  }
  var pais = paises[indice];

  $('.nomedopais', cloneCard).text(pais.nome);

  

  nomedopais
}