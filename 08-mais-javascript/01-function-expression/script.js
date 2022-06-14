// Remova o erro
priceNumber('R$ 99,99');

function priceNumber(n) {
  return +n.replace('R$', '').replace(',', '.');
}

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function() {
  const nome = 'André';
  console.log(nome);
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(() => {
  console.log('teste');
});