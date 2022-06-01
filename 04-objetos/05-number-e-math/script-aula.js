console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));
console.log(Number.isNaN('ds'));

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

console.log(parseFloat('23423.22'));
console.log(parseFloat('100 reais'));

console.log(parseInt('100.35 reais'));
console.log(parseInt(59.99, 10));

const preco = 10.32323;
console.log(preco.toFixed(2));

console.log((99.99).toFixed());

let valor = 48.49;
valor = valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
console.log(valor);

console.log(Math.PI);

console.log(Math.abs(4 - 10));
console.log(Math.round(4.4));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

console.log(Math.max(5,3,10,42,2));
console.log(Math.min(5,3,10,42,2));

const aleatorio = Math.floor(Math.random() * 10);
console.log(aleatorio);

console.log(Math.floor(Math.random() * (40 - 20 + 1)) + 20);