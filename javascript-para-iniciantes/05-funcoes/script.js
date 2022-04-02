// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
  return !!valor;
}

console.log(isTruthy(123));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function montaNome(nome, sobreNome) {
  return `${nome} ${sobreNome}`;
}

console.log(montaNome('Pedro Henrique', 'Correa Mota da Silva'));

// Crie uma função que verifica se um número é par
function verificarNumeroPar(numero) {
  return numero % 2 === 0;
}

console.log(verificarNumeroPar(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificarTipo(argumento) {
  return typeof argumento;
}

console.log(verificarTipo('asdfasd'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', () => {
  console.log('Pedro Herique Correa Mota da Silva');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
