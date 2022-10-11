const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// notas.length  = 4
for(let i = 0; i < notas.length; i++) {
// += soma das notas mais igual, faz a parte do somar ela própria sozinho.
    somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length

console.log(media)
