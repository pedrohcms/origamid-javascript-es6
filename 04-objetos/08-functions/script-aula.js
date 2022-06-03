// const perimetro = new Function('lado', 'return lado * 4');

// console.log(perimetro(4));

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar(3, 3));
// console.log(somar.length);
// console.log(somar.name);

// function darOi(nome, idade) {
//   console.log('Oi para você ' + nome + idade);
// }

// darOi.call(null, 'Pedro', 28);

// function descricaoCarro(velocidade) {
//   console.log(this.marca + ' ' + this.ano + ' ' + velocidade);
// }

// descricaoCarro();
// descricaoCarro.call({ marca: 'Honda', ano: 2015 }, 100);

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pera'];

// // carros.forEach.call(frutas, item => {
// //   console.log(item);
// // });

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   console.log(this);
//   this.element.classList.add(classe);
// }

// // const ul = new Dom('ul');

// const li = {
//   element: document.querySelector('li')
// };

// Dom.prototype.ativo.call(li, 'ativar');

// ul.ativo.call(li, 'ativar');
// ul.ativo('ativar');

// const frutas = ['Banana', 'Uva', 'Pera'];

// Array.prototype.pop.call(frutas);

// console.log(frutas);

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains('ativo');
});

const outroFiltro = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains('ativo');
});

// console.log(filtro);
// console.log(li);
console.log(outroFiltro());

const numeros = [3, 23, 44, 234, 2745];
console.log(Math.max.apply(null, numeros));

const $ = document.querySelectorAll.bind(document);
console.log($('li'));

const carro = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
};

console.log(carro.acelerar(100, 10));

const honda = {
  marca: 'Honda',
};

const acelerarHonda = carro.acelerar.bind(honda);
console.log(acelerarHonda(300, 20));