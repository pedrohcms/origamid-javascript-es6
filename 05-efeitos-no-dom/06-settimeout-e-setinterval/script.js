// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// let cor = 'red';
// setInterval(() => {
//   document.body.style.background = cor;
//   cor = (cor === 'red') ? 'blue' : 'red';
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const botaoIniciar = document.querySelector('#iniciar');
const botaoPausar  = document.querySelector('#pausar');
const timer        = document.querySelector('input');
let   tempo        = 0;
let   interval     = false;

function iniciarCronometro() {
  if(!interval) {
    interval = setInterval(function() {
      timer.value = ++tempo;
    }, 1000);
  }
}

function pausarCronometro() {
  clearInterval(interval);
  interval = false;
}

function resetarCronometro() {
  pausarCronometro();
  tempo       = 0;
  timer.value = 0;
}

botaoIniciar.addEventListener('click', iniciarCronometro);
botaoPausar.addEventListener('click', pausarCronometro);
botaoPausar.addEventListener('dblclick', resetarCronometro);