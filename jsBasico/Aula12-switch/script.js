/*
Desenvolvendo um sistema para saber se a média das notas passadas esta boa
*/

var nota1 = 9;
var nota2 = 9;
var nota3 = 6;
var nota4 = 7;

var media = (nota1 + nota2 + nota3 + nota4) / 4;
var msg = ""

//console.log(media);

if (media <= 4) {
    msg = "horrivel";
}if (media <= 7) {
    msg = "regular"
} else {
    msg = "otima"
}


switch (msg) {
    case "horrivel":
        console.log("Nota horrível, estude mais!")
        break;
    
    case "regular":
        console.log("Você foi bem mas precisa estudar mais")
        break;

    default:
        console.log(msg)
        break;
}