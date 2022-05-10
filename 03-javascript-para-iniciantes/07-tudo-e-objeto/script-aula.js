var nome          = 'André';
var nomeMinusculo = nome.toLowerCase();

var numero = 11.8;
numero.toFixed();
console.log(numero.toFixed());

var btn = document.querySelector('.btn');
btn.classList.add('azul');
console.log(btn.innerText);
btn.addEventListener('click', function() {
  console.log('Clicou');
});