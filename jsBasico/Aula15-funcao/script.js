function media(nota1, nota2){
    var media = (nota1 + nota2) / 2;
    console.log(media);
}


media(5, 10);



function mediaAvancada(n1, n2, n3){
    var mediaAvancada = (n1 + n2 + n3) / 3
    if (mediaAvancada < 5) {
        console.log("Tem que estudar mais")        
    }if (mediaAvancada <= 7) {
        console.log("Razoavel")
    } else {
        console.log("Muito bom")
    }
}


mediaAvancada(10, 10, 10);