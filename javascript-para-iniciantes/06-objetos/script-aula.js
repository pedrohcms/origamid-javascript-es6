var pessoa = {
  nome: 'André',
  idade: 28,
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

var heigth = 120;
var menu = {
  width: 800,
  heigth: 50,
  backgroundColor: '#84E',
  metadeHeigth() {
    return this.heigth / 2;
  }
};

menu.backgroundColor = '#000';

menu.escoder = function() {
  console.log('Escondi');
};

var bg = menu.backgroundColor;
console.log(bg);