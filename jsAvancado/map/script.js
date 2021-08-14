function novoAluno(nome, idade){
    return {nome, idade}
}

let aluno = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]


function nomeidade(aluno){
    return aluno.nome + " tem " + aluno.idade + " anos ";
 }

 console.log(aluno.map(nomeidade));