const div = document.querySelector('[data-cor]');

div.dataset.heigth = 1000;

delete div.dataset.width;

div.dataset.totalHeigth = 2000;

console.log(div.dataset);