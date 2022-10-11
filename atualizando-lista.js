const listaDeChamada = [ 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

//remove Ana e Caio e adiciona Rodrigo
//listaDeChamada.splice(1,2, 'Rodrigo')

//não remove ninguem apenas adiciona Rodrigo no indice 2
listaDeChamada.splice(2,0, 'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)