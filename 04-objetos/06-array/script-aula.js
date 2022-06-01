// const precos = [49, 99, 69, 89];

// const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

// const carros = new Array('Ford', 'Fiat', 'Honda');

// carros[2]  = 'Ferrari';
// carros[3]  = 'Kia';
// carros[20] = 'Fusca';

// console.log(carros.length);

// const li = document.querySelectorAll('li');

// const arrayLi = Array.from(li);

// const obj = {
//   0: 'André',
//   1: 'Rafael',
//   2: 'teste',
//   length: 3
// };

// const objArray = Array.from(obj);

// console.log(li);
// console.log(arrayLi);

// console.log(Array.isArray(li));
// console.log(Array.isArray(arrayLi));

// console.log(Array.of(10, 'teste', 'ola'));
// console.log(Array(10));

// const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
// console.log(frutas.length);

// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
// instrumentos.sort();

// const idades = [32,21,33,43,1,12,8];
// idades.sort();

// console.log(instrumentos);
// console.log(idades);

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrari');
carros.push('Paratti', 'Gol');

// console.log(carros);

// console.log(carros.shift());
// console.log(carros);

// console.log(carros.reverse());

// console.log(carros);
// carros.splice(2, 1, 'Fusca');
// console.log(carros);

// console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 2));

// console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 2));

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

// console.log(transporte1.concat(transporte2, 'olá', 'teste'));

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
// console.log(linguagens.includes('css'));
// console.log(linguagens.includes('ruby'));

// console.log(linguagens.indexOf('js'));
// console.log(linguagens.indexOf('asdfasdf'));

// let htmlString = '<h2>Título Principal</h2>';
// htmlString = htmlString.split('h2');
// htmlString = htmlString.join('h1');
// console.log(htmlString);

const clone = linguagens.slice();

linguagens.pop()
console.log(clone);