function calcmedia(){
    return (this.aluno.notas[0], this.aluno.notas[1] ) / 2;
}





var aluno = {
    nome: "Sergio",
    notas: [7, 8],

    media: calcmedia
    
}


var aluno2 = {
    nome: "Bruno",
    notas: [6, 8],
    
     media: calcmedia()

}

console.log(aluno.nome);
console.log(aluno.media)

console.log(aluno2.nome);
console.log(aluno2.media)
