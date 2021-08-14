let game = {

    movimentos: 0,

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function (id) {
        let carta = this.cartas.filter(carta => carta.id == id)[0];
        console.log(carta);
        if (carta.flipped || this.lockMode) {
            return false;
        }

        if (!this.firstCard) {
            this.firstCard = carta;
            this.firstCard.flipped = true;
            return true;
            
        } else {
            this.secondCard = carta;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    },

    unFlipCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver(){
        return this.cartas.filter(carta =>!carta.flipped).length == 0;
    },

    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false;
        }
        return this.firstCard.icone === this.secondCard.icone;
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],

    cartas: null,

    //Cria as cartas
    criarCartasDeTec: function () {

        this.cartas = [];
        this.techs.forEach((tech) => {
            this.cartas.push(this.criarParDeTec(tech));
        })


        //retorna as cartas e o flatMap separa os arrays. Envez de ter 10 arrays com 2 arrays em cada agora tenho 20 arrays separados
        this.cartas = this.cartas.flatMap(pair => pair);
        this.embaralharCartas();

        return this.cartas;

    },

    //Cria os pares das cartas
    criarParDeTec: function (tech) {
        return [{
            id: this.criarIdDaTech(tech),
            icone: tech,
            flipped: false,
        }, {
            id: this.criarIdDaTech(tech),
            icone: tech,
            flipped: false,
        }]
    },

    //cria o id das cartas
    criarIdDaTech: function (tech) {
        return tech = parseInt(Math.random() * 1000);
    },

    embaralharCartas: function (cartas) {
        let indexAtual = this.cartas.length;
        let indexAleatorio = 0;

        while (indexAtual !== 0) {
            indexAleatorio = Math.floor(Math.random() * indexAtual);
            indexAtual--;

            [this.cartas[indexAleatorio], this.cartas[indexAtual]] = [this.cartas[indexAtual], this.cartas[indexAleatorio]];
        }


    }

}