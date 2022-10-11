const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10, 7, 9, 6]

//Uma lista que contem outras listas, nessa nova lista o alunos é índice 0 e mediaAlunos índice 1
let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

//chama o primeiro índice da nova lista + índice 0 (João) da const alunos
// depois chama o índice 1 da nova lista + índice 0 (10) da const mediaDosAlunos 
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)