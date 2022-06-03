// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const total = Array.prototype.reduce.call(paragrafos, (total, item) => {
  return total + item.innerText.length;
}, 0);

console.log(total);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  
  if(classe !== undefined && classe !== null) elemento.classList.add(classe);
  if(conteudo !== undefined && conteudo !== null) elemento.appendChild(conteudo);
  
  return elemento;
}

const elementoGerado = criarElemento('div');
console.log(elementoGerado);


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criarH1 = criarElemento.bind(null, 'h1', 'titulo');
const h1Gerado = criarH1(document.createTextNode('Teste'));
console.log(h1Gerado);