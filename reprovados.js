const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

// Filtra na const nomes de acordo com os mesmos índices entre nomes e notas
const reprovados = nomes.filter((aluno,indice) => notas [indice]<5)
console.log(`reprovados ${reprovados}`)