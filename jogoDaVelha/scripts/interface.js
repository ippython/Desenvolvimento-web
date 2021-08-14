document.addEventListener('DOMContentLoaded', () => {
    let posicao = document.querySelectorAll(".posicao");
    posicao.forEach((posicao) => {
        posicao.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    
    let posicao = event.target;
    let position = posicao.id;
    
    if(movimento(position)){
        
        setTimeout(()=>{
            alert("O jogo acabou - O vencedor foi o jogador " + (jogadorVez+1))
            
        }, 100)
        
    }
    atualizarPosicao();
    placar();
}

function atualizarPosicao(){
    let posicao = document.querySelectorAll(".posicao");
    posicao.forEach((posicao) => {
        let position = posicao.id;
        let simbulos = tabuleiro[position];

        if (simbulos != '') {
            posicao.innerHTML = `<div class='${simbulos}'></div>`
        }
    })
    
}


//Codigo do botão de reset
function reset(){

    //Acesso todas as posições do tabuleiro
    let posicao = document.querySelectorAll(".posicao");
    posicao.forEach((posicao) => {

        //Zero as classes das posições
        posicao.innerHTML = `<div class=''></div>`


        //Zero todas as variaveis
        tabuleiro = ['', '', '', '', '', '', '', '', ''];
        jogadorVez = 0;
        fimJogo = false;
        
    })
}

//Placar

function placar(){
    if (fimJogo == true) {
        let player1 = document.getElementById("jogador1")
        player1.innerHTML = `<p id="jogador1">${jogador1}</p>`
        let player2 = document.getElementById("jogador2")
        player2.innerHTML = `<p id="jogador1">${jogador2}</p>`
        
        
    }
}

