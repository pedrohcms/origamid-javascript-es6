// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinkInterno(event) {
  event.preventDefault();
  linksInternos.forEach(linksInterno => linksInterno.classList.remove('ativo'));

  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach(linksInterno => {
  linksInterno.addEventListener('click', handleLinkInterno);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

function handleElemento(event) {
  console.log(event.currentTarget);
}

const todosElementos = document.querySelectorAll('body *');

todosElementos.forEach(elemento => elemento.addEventListener('click', handleElemento));


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleElemento(event) {
  //event.target.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleKeyDown(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleKeyDown);