// Verifique a distância da primeira imagem
// em relação ao topo da página
const distancia = document.querySelector('img').offsetTop;
console.log(distancia);

// Retorne a soma da largura de todas as imagens
window.onload = () => {
  let   totalLargura = 0;
  const imagens      = document.querySelectorAll('img');

  imagens.forEach(imagem => totalLargura += imagem.offsetWidth);
  console.log(totalLargura);
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach(link => {
  if(link.offsetWidth >= 48 && link.offsetHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade');
  } else {
    console.log(link, 'Não possui boa acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  document.querySelector('.menu').classList.add('menu-mobile');
}