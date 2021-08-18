let altura = null;
let largura = null;
let mosca = null;
var posicaoX = null;
var posicaoY = null;

let vidas = 0;
let tempo = 30;
let pontos = 1;

let codPonto = `<div class="cronometro">Pontos: ${pontos} </div>`


let intervalocronometro

const MOSCA = "mosca1"




function ajustaTamanhoDoJogo() {

    altura = window.innerHeight;
    largura = window.innerWidth;


}

ajustaTamanhoDoJogo()



//Aparecer mosca
function aparecerMosca() {

    removeMosca()

    posicaoX = Math.floor(Math.random() * (largura - 50));
    posicaoY = Math.floor(Math.random() * (altura - 50));

    if (posicaoX < 0) {
        posicaoX = 0
    } if (posicaoY < 0) {
        posicaoY = 0
    }


    mosca = document.createElement('img');
    mosca.src = 'assets/imagens/mosca.png'
    mosca.classList.add(MOSCA)

    criaMosca()

    document.body.appendChild(mosca)


}



let interval


function fim() {
    if (vidas < 3) {

        console.log(vidas)
        let coracoes = document.getElementById("v" + vidas)
        coracoes.src = "assets/imagens/coracao_vazio.png"
        vidas++

    } if (vidas >= 3) {
        clearTimeout(interval)
        let gameOverLayer = document.getElementById("gameOver");
        gameOverLayer.style.display = 'flex';
        tempo = 30
        pontos = 1

        clearInterval(intervalocronometro)

    }
}


function removeMosca() {
    if (document.getElementById('mosca')) {

        document.getElementById('mosca').remove()

        fim()

    }
}



function textPonto() {
    let ponto = document.getElementById("pontos");
    ponto.innerHTML = `<div class="cronometro">Pontos: ${pontos} </div>`
}


//Pontos

function pontuar() {
    textPonto()
    pontos++
}







// Cronometro

function cronometro() {

    tempo--
    let cronometro = document.getElementById("cronometro");
    cronometro.innerHTML = `<div class="cronometro">Tempo restante: ${tempo} </div>`

    if (tempo == 1) {
        clearTimeout(interval)
        let vitoriaLayer = document.getElementById("vitoria");
        vitoriaLayer.style.display = 'flex';

        tempo = 30
        pontos = 1

        clearInterval(intervalocronometro)
    }

}









// Botão restart

function vidaCheia() {
    document.getElementById("v0").src = "assets/imagens/coracao_cheio.png"
    document.getElementById("v1").src = "assets/imagens/coracao_cheio.png"
    document.getElementById("v2").src = "assets/imagens/coracao_cheio.png"
}


function restart() {

    let gameOverLayer = document.getElementById("gameOver");
    gameOverLayer.style.display = 'none';

    let vitoriaLayer = document.getElementById("vitoria");
    vitoriaLayer.style.display = 'none';

    textPonto()
    vidas = 0;
    pontos = 1;


    vidaCheia();


    interval = setInterval(() => {

        aparecerMosca()
        cronometro()

    }, 1500)
}



// Botão iniciar

function botaoIniciar() {

    let gameOverLayer = document.getElementById("gameOver");
    gameOverLayer.style.display = 'none';

    let vitoriaLayer = document.getElementById("vitoria");
    vitoriaLayer.style.display = 'none';

    let inicioLayer = document.getElementById("inicio");
    inicioLayer.style.display = 'none';

    vidas = 0;
    pontos = 1


    vidaCheia();

    interval = setInterval(() => {

        aparecerMosca()
        cronometro()


    }, 1500)

}


// Iniciando o jogo



function iniciar() {
    let gameOverLayer = document.getElementById("gameOver");
    gameOverLayer.style.display = 'none';

    let vitoriaLayer = document.getElementById("vitoria");
    vitoriaLayer.style.display = 'none';

    let inicioLayer = document.getElementById("inicio");
    inicioLayer.style.display = 'flex';
    vidas = 0;


    vidaCheia();

}



iniciar()


