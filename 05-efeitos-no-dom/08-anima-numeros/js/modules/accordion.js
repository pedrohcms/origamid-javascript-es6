export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-js="accordion"] dt');
  const activeClas    = 'ativo';

  if(accordionList.length) {
    accordionList[0].classList.add(activeClas);
    accordionList[0].nextElementSibling.classList.add(activeClas);

    function activeAccordion() {
      this.classList.toggle(activeClas);
      this.nextElementSibling.classList.toggle(activeClas);
    }

    accordionList.forEach(item => item.addEventListener('click', activeAccordion))
  }
}