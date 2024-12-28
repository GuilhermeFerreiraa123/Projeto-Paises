var info_guilherme = document.getElementById('show-info-guilherme');
var info_miguel = document.getElementById('show-info-miguel');
var info_tiago = document.getElementById('show-info-tiago');

var seta_guilherme = document.getElementById('seta-guilherme');
var seta_miguel = document.getElementById('seta-miguel');
var seta_tiago = document.getElementById('seta-tiago');

$(document).ready(function () {
    naocarregainfo();
});


function naocarregainfo() {
    info_guilherme.hidden = true;
    info_miguel.hidden = true;
    info_tiago.hidden = true;
    seta_guilherme.innerHTML = '<li class="bold-text" onclick="show_guilherme()">Guilherme <i id="seta-guilherme" class="bi bi-arrow-right-short seta-membros"></i></li>';
    seta_miguel.innerHTML = '<li class="bold-text" onclick="show_miguel()">Miguel <i id="seta-miguel" class="bi bi-arrow-right-short seta-membros"></i></li>';
    seta_tiago.innerHTML = '<li class="bold-text" onclick="show_tiago()">Tiago <i id="seta-tiago" class="bi bi-arrow-right-short seta-membros"></i></li>';
}

function show_guilherme(){
    info_guilherme.hidden = false;
    seta_guilherme.innerHTML = '<li class="bold-text" onclick="hide_guilherme()"><b>Guilherme </b><i id="seta-guilherme" class="bi bi-arrow-left-short seta-membros"></i></li>';
}

function show_miguel(){
    info_miguel.hidden = false;
    seta_miguel.innerHTML = '<li class="bold-text" onclick="hide_miguel()"><b>Miguel </b><i id="seta-miguel" class="bi bi-arrow-left-short seta-membros"></i></li>';
}

function show_tiago(){
    info_tiago.hidden = false;
    seta_tiago.innerHTML = '<li class="bold-text" onclick="hide_tiago()"><b>Tiago </b><i id="seta-tiago" class="bi bi-arrow-left-short seta-membros"></i></li>';
}

function hide_guilherme(){
    seta_guilherme.innerHTML = '<li class="bold-text" onclick="show_guilherme()">Guilherme <i id="seta-guilherme" class="bi bi-arrow-right-short seta-membros"></i></li>';
    info_guilherme.hidden = true;
}

function hide_miguel(){
    seta_miguel.innerHTML = '<li class="bold-text" onclick="show_miguel()">Miguel <i id="seta-miguel" class="bi bi-arrow-right-short seta-membros"></i></li>';
    info_miguel.hidden = true;
}

function hide_tiago(){
    seta_tiago.innerHTML = '<li class="bold-text" onclick="show_tiago()">Tiago <i id="seta-tiago" class="bi bi-arrow-right-short seta-membros"></i></li>';
    info_tiago.hidden = true;
}