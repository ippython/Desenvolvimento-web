/* Fazer uma lista que vai ter o nome do aluno, nota 1, nota 2, média e se ele ta aprovado ou reprovado */

var nomes = ["Bruno", "Sergio", "Ana", "Vitória"];
var notas1 = [1, 2, 10, 0];
var notas2 = [2, 1, 4, 4];

function media(n1, n2){
    return (n1 + n2)/2
}

function situacao(media){
    if (media <= 5) {
        return "Tomo no cu"
    }else
        return "Aprovado"
}

for(i in nomes){

    var m = media(notas1[i], notas2[i]);
    console.log(nomes[i] + " - " + notas1[i] + " - " + notas2[i] + " - " + m + " - " + situacao(m))
}