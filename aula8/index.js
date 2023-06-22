/*MINHA SOLUÇÃO

const nome = 'Enzo Lucca'
const sobreNome = 'Rodrigues Gonzaga'
const idade = 6
const peso = 25
const altura = 1.30
const IMC = peso / (altura * altura)

console.log(nome,sobreNome, 'tem',idade, 'anos,', 'pesa', peso, 'Kg, tem', altura, 'altura e seu IMC é de', IMC )*/




/* PRIMEIRA SOLUÇÃO

const nome = 'Enzo Lucca'
const sobreNome = 'Rodrigues Gonzaga'
const idade = 6
const peso = 25
const altura = 1.30 // em METROS
let IMC = peso / (altura * altura)
let anoNascimento = 2023 - idade

console.log(nome,sobreNome, 'tem' ,idade, 'anos,','pesa', peso, 'Kg, tem',altura, 'altura e seu IMC é de', IMC,'.', nome, 'nasceu em', anoNascimento,'.')*/


// SOLUÇÃO MAIS USUAL,SIMPLE E MODERNA

const nome = 'Enzo Lucca'
const sobreNome = 'Rodrigues Gonzaga'
const idade = 6
const peso = 25
const altura = 1.30 // em METROS
let IMC = peso / (altura * altura)
let anoNascimento = 2023 - idade

console.log(`${nome} ${sobreNome}, tem ${idade} anos, pesa ${peso}Kg e tem ${altura} altura, seu IMC é de ${IMC}. ${nome} nasceu no ano de ${anoNascimento}`)