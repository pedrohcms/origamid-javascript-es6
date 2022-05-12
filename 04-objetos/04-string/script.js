// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let valorTaxa        = 0;
let valorRecebimento = 0;
transacoes1.forEach(item => {
  item.valor = +(item.valor.replace(/\D/g, ''));

  if(item.descricao.toLowerCase().includes('taxa')) {
    valorTaxa += item.valor;
  } else if(item.descricao.toLowerCase().includes('recebimento')) {
    valorRecebimento += item.valor;
  }
});

console.log(valorTaxa);
console.log(valorRecebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'));

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.replace(/span/g, 'a'));

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let total = 0;
transacoes2.forEach(item => {
  // if(item.toLowerCase().trim().includes('taxa')) total++;
  const regex = new RegExp('taxa', 'i');

  if(regex.test(item)) total++;
});

console.log(total);