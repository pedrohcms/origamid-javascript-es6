var videoGames = ['Switch', 'PS4', 'Xbox'];

var ultimoItem = videoGames.pop();
videoGames.push('3DS');

console.log(videoGames);
console.log(ultimoItem);
console.log(videoGames.length);

for (var numero = 1; numero <= 10; numero++) {
  //console.log(numero);
}

var i = 0;
while (i < 10) {
  //console.log(i);
  i++;
}

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') break;
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(fruta, index, array) {
  frutas.pop();
  console.log(fruta, index, array);
});