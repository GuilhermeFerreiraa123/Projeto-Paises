var info_guilherme = document.getElementById('show-info-guilherme');
var info_miguel = document.getElementById('show-info-miguel');
var info_tiago = document.getElementById('show-info-tiago');

var title_guilherme = document.getElementById('title-guilherme');
var title_miguel = document.getElementById('title-miguel');
var title_tiago = document.getElementById('title-tiago');


$(document).ready(function () {
    naocarregainfo();
});


function naocarregainfo() {
    info_guilherme.innerHTML = '';
    info_miguel.innerHTML = '';
    info_tiago.innerHTML = '';
}

function show_guilherme(){
    info_guilherme.innerHTML = '<h3 class="info-membros-text-title">Guilherme Ferreira</h3> <br> <h4 class="info-membros-text"><b>Estudante no IPL   </b></h4> <h4 class="info-membros-text"><b>Número do Estudante: </b>2241869</h4> <h4 class="info-membros-text"><b>Curso do Estudante: </b>TeSP - Programação de Sistemas de Informação</h4>';
    title_guilherme.innerHTML = '';
    title_guilherme.style.setProperty('margin-top', '20%', 'important');
}

function show_miguel(){
    info_miguel.innerHTML = '<h3 class="info-membros-text-title">Miguel Ribeiro</h3><br><h4 class="info-membros-text"><b>Estudante no IPL   </b></h4><h4 class="info-membros-text"><b>Número do Estudante: </b>2241595</h4><h4 class="info-membros-text"><b>Curso do Estudante: </b>TeSP - Programação de Sistemas de Informação</h4>';
    title_miguel.innerHTML = '';
    title_miguel.style.setProperty('margin-top', '20%', 'important');
}

function show_tiago(){
    info_tiago.innerHTML = '<h3 class="info-membros-text-title">Tiago Carmo</h3><br><h4 class="info-membros-text"><b>Estudante no IPL   </b></h4><h4 class="info-membros-text"><b>Número do Estudante: </b>2241610</h4><h4 class="info-membros-text"><b>Curso do Estudante: </b>TeSP - Programação de Sistemas de Informação</h4>';
    title_tiago.innerHTML = '';
    title_tiago.style.setProperty('margin-top', '20%', 'important');
}