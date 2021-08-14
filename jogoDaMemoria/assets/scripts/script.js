const FRENTE = "carta_frente"
const TRAS = "carta_tras"
const CARTA = "carta"
const ICONE = "icone"





iniciarJogo();

function iniciarJogo() {
    iniciarCartas(game.criarCartasDeTec());
}

function iniciarCartas(cartas) {
    let tabuleiroJogo = document.getElementById("tabuleiroJogo");
    tabuleiroJogo.innerHTML = '';

    game.cartas.forEach(carta => {

        let elementoCartas = document.createElement('div');
        elementoCartas.id = carta.id;
        elementoCartas.classList.add(CARTA);
        elementoCartas.dataset.icone = carta.icone;

        criarConteudoCarta(carta, elementoCartas);

        elementoCartas.addEventListener('click', virarCarta)
        tabuleiroJogo.appendChild(elementoCartas);
    })


}

function criarConteudoCarta(carta, elementoCartas) {

    criarFaceCarta(FRENTE, carta, elementoCartas);
    criarFaceCarta(TRAS, carta, elementoCartas);

}

function criarFaceCarta(face, carta, elemento) {
    let elementoFaceCarta = document.createElement('div');
    elementoFaceCarta.classList.add(face);

    if (face === FRENTE) {
        let elementoIcone = document.createElement('img');
        elementoIcone.classList.add(ICONE);
        elementoIcone.src = "./assets/images/" + carta.icone + ".png";
        elementoFaceCarta.appendChild(elementoIcone);

    } else {
        elementoFaceCarta.innerHTML = "&lt/&gt";
    }

    elemento.appendChild(elementoFaceCarta);
}






function virarCarta() {
    if (game.setCard(this.id)) {

        this.classList.add('flip');
        if (game.secondCard) {
            
            jogadas();
            if (game.checkMatch()) {
                game.clearCards();
                
                
                if(game.checkGameOver()){
                    let gameOverLayer = document.getElementById("fimJogo");
                    gameOverLayer.style.display = 'flex';
                }
            } else {
                setTimeout(() => {
                    
                    let firstCardView = document.getElementById(game.firstCard.id);
                    let secondCardView = document.getElementById(game.secondCard.id);
                    
                    firstCardView.classList.remove('flip');
                    secondCardView.classList.remove('flip');
                    game.unFlipCards();
                    
                }, 1000);
            };
        }
    }
}

function jogadas(){
    game.movimentos++
    let jogadas = document.getElementById("jogadas");
    jogadas.innerHTML = `<h2 id="jogadas">${game.movimentos}</h2>`
}

function restart(){
    iniciarCartas(game.criarCartasDeTec());
    let gameOverLayer = document.getElementById("fimJogo");
    gameOverLayer.style.display = 'none';
    game.movimentos = -1;
    jogadas();

}