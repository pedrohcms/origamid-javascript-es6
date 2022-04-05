// window.alert('Fala dev');

const href = window.location.href;
console.log(href);

if(href === 'http://127.0.0.1:5500/02-dom-para-iniciantes/01-o-que-e-o-dom/') {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes     = h1Selecionado.classList;
console.log(h1Classes);

function callbackH1() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackH1);