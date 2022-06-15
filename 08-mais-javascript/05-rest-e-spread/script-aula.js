// function perimetroForma(lado, totalLados, ...listaArgumentos) {
//   console.log(listaArgumentos);
//   listaArgumentos.forEach(item => console.log(item));
//   return lado * totalLados;
// }

// console.log(perimetroForma(10, 20, 30, 'oi', 'Teste'));

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}

const ganhadores = [ 'Pedro', 'Marta', 'Maria', 'Beto'];

anunciarGanhadores('Carro', ...ganhadores);

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas);

const todosOsNumeros = [3, 4, 5, 4, 56, 77, 192];
const numeroMaximo = Math.max(...todosOsNumeros);
console.log(numeroMaximo);

const btns = document.querySelectorAll('button');
console.log(btns);
const btnArray = [...btns];
console.log(btnArray);