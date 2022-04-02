function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if(cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

function mostraConsole() {
  console.log('oi');
}

addEventListener('click', mostraConsole);

function imc2(peso, altura) {
  var imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(20, 1.8);

function terceiraIdade(idade) {
  console.log(typeof idade);
  if(typeof idade !== 'number') {
    return 'Por favor preencha um número.';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(123));

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
  return `Faltam visitar ${totalPaises - paisesVisitados}`;
}

console.log(faltaVisitar(23));

console.log(totalPaises);

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro
