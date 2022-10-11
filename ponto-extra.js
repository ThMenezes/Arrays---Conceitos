const notas = [10, 9, 8, 7, 6]

//map retorna uma array com novos valores.
// ++nota -> o sinal antes do elemento, ele vai adicionar um e retorna.
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)