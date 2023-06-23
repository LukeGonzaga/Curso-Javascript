/*alert('Mensagem')
prompt('Outra Mensagem')
confirm('Nova Mensagem')*/

let num1 = prompt('Digitite um Número')
let num2 = prompt('Digite outro Número')
num1=Number(num1)
num2=Number(num2)
const resultado = num1 + num2

//alert('O resultado da soma dos número escolhidos foi:  '+ resultado)

alert(`O resultado da soma dos número escolhidos foi: ${resultado}`)// -> Melhor forma <-

//alert(`O resultado da soma dos número escolhidos foi: ${num1 + num2}`) -> Sem a const 'resultado' <-