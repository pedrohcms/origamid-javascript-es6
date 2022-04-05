'use strict';
var carro = 'Fusca';

function mostrarCarro() {
  //var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if(false) {
  var mes = 'Dezembro'; // Var vaza o bloco
  console.log(mes);
}

console.log(mes);

{
  var carro2 = 'Fusca 2';
  const ano = 2018;
}
console.log(carro); // Carro
// console.log(ano); // erro ano is not defined

// for(let i = 0; i < 10; i++) {
//   console.log(`Número ${i}`);
// }

// console.log(i); // erro i is not defined

const semana = 'Sexta';
// semana = 'Quinta';
console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro'
};

data.ano = 2019;
data.dia = 25;
//data = 'teste';

console.log(data);