//inicar as variaveis

let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorVez = 0;
let fimJogo = false;
let jogador1 = 0;
let jogador2 = 0;

let simbulos = ['o', 'x'];

let estadoDeVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

//definindo a jogada
function movimento(position) {

    if (fimJogo) {
        return;
    }


    if (tabuleiro[position] === '') {
        tabuleiro[position] = simbulos[jogadorVez];

        fimJogo = eGanhou();
        
        if (!fimJogo) {
            
            if (jogadorVez == 0) {
                jogadorVez = 1;
            } else {
                jogadorVez = 0;
            }
        }
    }

    return fimJogo;
}

function eGanhou() {


    for(let i = 0; i < estadoDeVitoria.length; i++){
        let seq = estadoDeVitoria[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != '') {

            if (jogadorVez == 0) {
                jogador1++                
            }else{
                jogador2++
            }

            return true;
            
        }

    }

}

