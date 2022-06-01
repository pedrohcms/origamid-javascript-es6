// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatorio);

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(', ');

const resultado = numeros.reduce(function(a, b) {
  return Math.max(a, b);
}, -Infinity);

console.log(resultado);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = +preco.replaceAll(/[a-z\s$]/gi, '').replace(',', '.');
  preco = +preco.toFixed(2);

  return preco;
}

let total = 0;
listaPrecos.forEach((item) => total += limparPreco(item));

console.log(total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));