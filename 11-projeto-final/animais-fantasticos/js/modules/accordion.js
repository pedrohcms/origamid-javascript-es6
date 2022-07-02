export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClas = 'ativo';
  }

  toogleAccordion(item) {
    item.classList.toggle(this.activeClas);
    item.nextElementSibling.classList.toggle(this.activeClas);
  }

  // Adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => item.addEventListener('click', () => this.toogleAccordion(item)));
  }

  // Iniciar função
  init() {
    if (this.accordionList.length) {
      // Ativar primeiro item
      this.toogleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }

    return this;
  }
}
