function calcMedia(){
    return (this.nota1 + this.nota2) / 2;
}


/* function criarAluno(nome, n1, n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: calcMedia
    }
} */


function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = function(){
        return (this.nota1 + this.nota2) / 2
    }
}


var a = new aluno("Bruno", 5, 5);
var b = new aluno("Sergio", 6, 7); 

console.log(a)



/* var turma = [
    criarAluno("Sergio", 6, 8),
    criarAluno("Bruno", 5, 5)
]

turma.forEach(function(elemento){
    console.log(elemento);
}  ) */




/* console.log(turma); */
