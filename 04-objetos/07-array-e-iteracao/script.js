// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos      = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
  return {
    titulo: curso.querySelector('h1').innerText,
    descricao: curso.querySelector('p').innerText,
    aulas: curso.querySelector('.aulas').innerText,
    horas: curso.querySelector('.horas').innerText 
  };
});
console.log(objetosCurso);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter(n => n > 100);
console.log(maiorQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some(instrumento => instrumento === 'Baixo');
console.log(possuiBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
];

const valorTotal = compras.reduce((total, item) => {
  return total + +item.preco.replace('R$ ', '').replace(',', '.');
}, 0);
console.log(valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));