const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const h2Left = primeiroH2.offsetLeft;
console.log(h2Left);

const h2Rect = primeiroH2.getBoundingClientRect();
console.log(h2Rect);

if(h2Rect.top < 0) {
  console.log('Passou do elemento');
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.scrollY
);

const small = window.matchMedia('(max-width: 600px)').matches;

if(small) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}