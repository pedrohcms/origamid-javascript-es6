// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach(itemMenu => itemMenu.classList.add('ativo'));

console.log(itensMenu);

// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(itemMenu => itemMenu.classList.remove('ativo'));

itensMenu[0].classList.add('ativo');

console.log(itensMenu);

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach(imagem => {
  if(!imagem.hasAttribute('alt')) {
    console.log(`A imagem ${imagem.getAttribute('src')} não possui o atributo alt`);
  }
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]')

link.setAttribute('href', 'https://www.google.com');