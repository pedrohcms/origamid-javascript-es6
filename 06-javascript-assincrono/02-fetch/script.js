// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const formCep      = document.querySelector('#formCep');
const cepResultado = document.querySelector('.cep-resultado');

function buscarCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(r => r.json())
    .then(r => {
      cepResultado.innerText = `${r.logradouro}, ${r.bairro}, ${r.localidade} - ${r.uf}`;
    });
}

formCep.addEventListener('submit', function(e) {
  e.preventDefault();

  const cep = document.querySelector("input[name='cep']").value;
  
  buscarCep(cep);
});

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const valorBitcoin = document.querySelector('.valor-bitcoin');

setInterval(() => {
  fetch('https://blockchain.info/ticker')
    .then(r => r.json())
    .then(body => {
      valorBitcoin.innerText = body.BRL.buy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    });
}, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const botaoProximaPiada = document.querySelector('.proxima-piada');
const piada             = document.querySelector('.piada');

function buscarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(body => {
      piada.innerText = body.value;
    });
}

botaoProximaPiada.addEventListener('click', buscarPiada);

buscarPiada();