const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10, 7, 9, 6]

//Includes retora um booleano (verdadeiro ou falso)
//IndexOf retorna um número, que é um número referente ao número do índice no caso Ana é índice 3 
//Índice é 3

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        // chama o índice 3 da const alunos e depois o índice 3 da const mediaDosAlunos
        return listaDeNotasEAlunos[0][indice] + ' ,sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}
console.log(exibeNomeNota('Ana'))