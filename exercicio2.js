animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

// Não remove, apenas adiciona o peixe-dourado no indice 1
animaisDoAquario.splice(1,0,'peixe-dourado')

//Remove indice 3 e 4  ou seja dois elementos e adiciona peixe-azul
animaisDoAquario.splice(3,2,'peixe-azul')

console.log(animaisDoAquario)