// const carro = {
//   marca: 'Honda',
//   ano: 2018
// }

// const { marca, ano, portas } = carro;

// console.log(carro);
// console.log(marca);
// console.log(ano);
// console.log(portas);

// const cliente = {
//   nome: 'Andre',
//   compras: {
//     digitais: {
//       livros: ['Livro 1', 'Livro 2'],
//       videos: ['Video JS', 'Video HTML']
//     },
//     fisicas: {
//       cadernos: ['Caderno 1']
//     }
//   }
// }

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// // const { livros, videos } = cliente.compras.digitais;
// // console.log(livros, videos);

// const { digitais, fisicas, digitais: { livros, videos } } = cliente.compras;
// console.log(livros);

// const cliente = {
//   nome: 'Andre',
//   compras: 10,
//   email: 'teste@teste.com'
// }

// const {nome: nomeAndre, email = 'teste@gmail.com'} = cliente;
// console.log(nomeAndre, email);

// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeira, segunda, terceira] = frutas;

// console.log(frutas[0]);
// console.log(primeira);

// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3'];
// console.log(terceiro);

function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard);