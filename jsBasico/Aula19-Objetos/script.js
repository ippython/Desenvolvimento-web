function calcmedia(){
    return (this.notas[0] + this.notas[1] ) / 2;
}





var aluno = {
    nome: "Sergio",
    notas: [7, 8],

    media: calcmedia
    
}


var aluno2 = {
    nome: "Bruno",
    notas: [1, 8],
    
     media: calcmedia

}

console.log(aluno.nome);
console.log(aluno.media())

console.log(aluno2.nome);
console.log(aluno2.media())
