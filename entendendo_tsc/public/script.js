// pegar os id e criou os elementos .
var numero1 = document.getElementById('numero1'); // modificando elemento
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
//criar uma função para calcular  .
function calcular(n1, n2) {
    return n1 + n2;
}
//criar as ações do elemtos botao 
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString(); // adicionamos "+" nos numeros1 e numeros 2 para converter para numeoros
}); // adicionamos o .ToString(); para falar com innerHTML que vamos trabalhar com string
//Quando executarmos esse código ele não fará uma soma dos valores.
// ele vai concatnar , pois quando tenho um elemento de texto idependente do tipo
// ele sempre vai retornar uma string ... Podemos resolver isso fazendo uma verificação
// Porém vamos utilizar o Typescript para fazermos isso .
// com tsc vamos isolar os erros, usar a function da forma correta , proteger o código
/* Para converter o código  - terminal , digite tsc nome do arquivo "script.ts" */
// toda vez que for testar o código , devemos converter ele .
