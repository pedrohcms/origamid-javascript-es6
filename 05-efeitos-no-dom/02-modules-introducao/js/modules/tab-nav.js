export default function initTabNav() {
  const tabMenu    = document.querySelectorAll('[data-js="tabmenu"] li');
  const tabContent = document.querySelectorAll('[data-js="tabcontent"] section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach(section => section.classList.remove('ativo'));

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });
  }  
}