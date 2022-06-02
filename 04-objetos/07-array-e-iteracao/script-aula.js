// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll('li');

// const retornoForeach = li.forEach(i => {
//   i.classList.add('ativa')
// });

// console.log(retornoForeach);

// const carros = ['Ford', 'Fiat', 'Honda'];

// const novaArray = carros.map((item) => {
//   return item.toUpperCase();
// });

// novaArray[1] = 'teste';

// console.log(novaArray);
// console.log(carros);

// const numeros = [2, 4, 5, 6, 78];
// const numerosX2 = numeros.map(n => n * 2);

// console.log(numerosX2);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ];

// const tempoAulas = aulas.map(aula => aula.min);
// console.log(tempoAulas);

// // function nomeAulas(aula) {
// //   return aula.nome;
// // }

// const nomeAulas = aula => aula.nome;

// const arrayNomeAulas = aulas.map(nomeAulas);
// console.log(arrayNomeAulas);

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   return acumulador + item;
// }, 0);

// console.log(reduceAulas);

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0);

// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   console.log(acumulador);
//   return acumulador;
// }, {});

// console.log(listaAulas);

// const frutas = ['Banana', '', 'Pêra', 'Uva'];

// const temUva = frutas.some(item => {
//   return item === 'Uva';
// });

// console.log(temUva);

// const every = frutas.every(fruta => {
//   console.log(fruta);
//   return fruta;
// });

// console.log(every);

// const indexUva = frutas.find(item => {
//   return item === 'Uva';
// })

// console.log('Index: ' + indexUva);

// const numeros = [6, 43, 22, 88, 101, 29];
// const maiorQue3 = numeros.every(n => n > 3);
// console.log(maiorQue3);

// const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

// const arrayFrutas = frutas.filter(item => {
//   console.log(item);
//   return item;
// });

// console.log(arrayFrutas);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
];

const maiores15 = aulas.filter(aula => aula.min > 15);

console.log(maiores15);