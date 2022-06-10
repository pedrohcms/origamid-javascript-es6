// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if(condicao) {
//     setTimeout(() => {
//       resolve({nome: 'Pedro', idade: 23});
//     }, 1000);
//   } else {
//     reject(Error('Um erro ocorreu.'));
//   }
// });

// const retorno = promessa
// .then(resultado => {
//   resultado.profissao = 'Programador';
//   return resultado;
// })
// .then(resultado => {
//   console.log(resultado);
// }, erro => {
//   console.log(erro);
// })
// .finally(() => {
//   console.log('Acaboouuuu!');
// });

// console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado');
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then(resultado => {
  console.log(resultado);
})