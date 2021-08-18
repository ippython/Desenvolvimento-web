let tamanhoMosca = null;
var posicaoX = null;
var posicaoY = null;







function tamanhoDaMosca() {
    tamanhoMosca = Math.floor(Math.random() * 50)
    if (tamanhoMosca < 25) {
        tamanhoMosca = 50;
    }

}

function click() {
    removeMosca()
}


function ladoAleatorio() {
    if ((posicaoX / 2) % 1) {
        mosca.style.transform = "rotateY(180deg)";
    }
}


function localizacaoAleatoria(){
    posicaoX = Math.floor(Math.random() * (largura - 50));
    posicaoY = Math.floor(Math.random() * (altura - 50));

    if (posicaoX < 0) {
        posicaoX = 0
    } if (posicaoY < 0) {
        posicaoY = 0
    }
}



function criaMosca() {

    ladoAleatorio()
    tamanhoDaMosca()
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';
    mosca.style.width = tamanhoMosca + "px";
    mosca.style.height = tamanhoMosca + "px";
    mosca.id = "mosca"
    mosca.onclick = function(){
        this.remove()
        pontuar()
    }

    

}





