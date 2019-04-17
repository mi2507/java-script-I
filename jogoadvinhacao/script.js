// window.addEventListener('DOMContentLoaded', function (event) {

var musica = document.getElementById('tocarMusica')
var botaoplay = document.getElementById('botao')
var mostarTexto = document.getElementById('texto1')
var mostarTexto1 = document.getElementById('texto2')
let musicas = [
    `<audio src="./musica/titanic.mp3" id="audio"> </audio>`,
    `<audio src="./musica/Comoeueraantesdevocêviolino.mp3"></audio>`
]
let frases = [
    `<p>titanic</p>`,
    `<p>como eu era antes de vc</p>`
]
botaoplay.addEventListener("click", function () {
    musica.innerHTML = musicas[0]
    musica.children[0].play()
    setTimeout(function () {
        musica.innerHTML = musicas[1]
        musica.children[0].play()
    }, 30000);
    setTimeout(function () { 
        musica.innerHTML = ""
        mostarTexto.innerHTML = frases[0]; 
    }, 50000);
    setTimeout(function () { mostarTexto1.innerHTML = frases[1]; }, 50000);
});

