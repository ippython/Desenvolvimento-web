var segundos = 1;
var minutos = 0;
var horas = 0;
var intervaloS;
var intervaloM;
var intervaloH;

function segundo(){    

    let display = document.getElementById('display')
    display.innerHTML = horas + ":" + minutos + ":" +segundos

    if (segundos >= 60) {
        
        segundos = 0;
        
    }else {
        
        segundos++;
    }
}
function minuto(){
    if (minutos >= 60) {                
        minutos = 0;                
    }else {                
        minutos++;
    }
}
function hora(){
    if (horas >= 24) {
        
        horas = 0;
        
    }else {
        
        horas++;

    }
}

function iniciar(){
    if (!intervaloS) {        
        intervaloS = setInterval(segundo, 1000);
        intervaloM = setInterval(minuto, 60000);
        intervaloH = setInterval(hora, 3600000);
    }

}

function parar(){
    clearInterval(intervaloS);
    clearInterval(intervaloM);
    clearInterval(intervaloH);
    intervaloS = undefined;
}

function zerar(){
    segundos = 0;
    minutos = 0;
    horas = 0;
    let display = document.getElementById('display')
    display.innerHTML = horas + ":" + minutos + ":" +segundos
    clearInterval(intervaloS);
    clearInterval(intervaloM);
    clearInterval(intervaloH);
    intervaloS = undefined;
}
