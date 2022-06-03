// const pessoa = new Object({
//   nome: 'André'
// });

// console.log(pessoa);

// const carro = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou';
//   }
// };

// const honda = Object.create(carro).init('Honda');

// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar());

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// Object.assign(moto, funcaoAutomovel, carro);
// console.log(moto);

// const moto = {
//   capacete: true,
// };

// Object.defineProperties(moto, {
//   rodas: {
//     enumerable: true,
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4; 
//     }
//   }
// });

// moto.rodas = 3;

// console.log(moto.rodas);

// const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');

// Object.getOwnPropertyNames(Array.prototype);

// const frutas = ['Banana', 'Uva'];

// console.log(Object.getPrototypeOf(frutas));
// console.log(Object.getPrototypeOf(''));

// const frutas1 = ['Banana', 'Pêra'];
// const frutas2 = ['Banana', 'Pêra'];
// const frutas3 = frutas1;

// console.log(Object.is(frutas1, frutas2));
// console.log(Object.is(frutas1, frutas3));

// const carro = {
//   marca: 'Ford',
//   ano: 2018,
// }
// Object.freeze(carro);
// carro.marca = 'Honda';

// delete carro.marca;

// carro.portas = 4;

// console.log(carro);
// console.log(Object.isFrozen(carro));
// console.log(Object.isExtensible(carro));
// console.log(Object.isSealed(carro));

const frutas = ['Banana', 'Uva'];
const frase  = 'Oi frase';
const somar = function(a, b) {
  return a + b;
}

const carro = {
  marca: 'Ford',
  ano: 2018,
};

console.log(frutas.toString());
console.log(frase.toString());
console.log(somar.toString());
console.log(carro.toString());

console.log(Object.prototype.toString.call(somar));