const nomes = [ 'João' , 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjore', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']


//slice significa -> cortar | 0 é o primeiro elemento no caso João | nomes.length é a quantidade de elementos / 2
const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
