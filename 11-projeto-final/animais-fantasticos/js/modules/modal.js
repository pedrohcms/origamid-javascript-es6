export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // Bind this ao callback para fazer referência ao objeto da classe
    this.eventToogleModal = this.eventToogleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // Abre ou fecho o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // Adiciona o evento de toggle ao modal
  eventToogleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // Fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  // Adiciona os eventos ao modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToogleModal);
    this.botaoFechar.addEventListener('click', this.eventToogleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }

    return this;
  }
}
