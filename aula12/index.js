let varA = 'A'
let varB = 'B'
let varC = 'C'

// SOLUÇÃO MAIS FÁCIL E SIMPLES
const varAtemp = varA
varA = varB
varB = varC
varC = varAtemp

//MODO MAIS MODERNO
//[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)