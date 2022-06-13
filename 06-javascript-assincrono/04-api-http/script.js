// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(r => r.json())
// .then(pokemon => {
//   console.log(pokemon);
// });

const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com';
const options = {
  method: 'HEAD',
  // body: '{ "title": "Javascript" }',
  // headers: {
  //   "Content-Type": "application/json; charset=utf-8"
  // }
}

fetch(url)
.then(response => response.text())
.then(text => console.log(text));