// const regexp = /\w+/gi;
// const regexp1 = new RegExp('\\w', 'gi');
// console.log(frase.replace(regexp1, 'X'));

// const frase = 'JavaScript e Java linguagem 101, Java';
// const regexp = /Java/g;

// let i = 0;
// while(regexp.test(frase)) {
//   console.log(++i, regexp.lastIndex);  
// }

// const frase = 'JavaScript, TypeScript, CoffeeScript, Java, 2222';
// const regexp = /[a-zA-Z]+/g;

// let regexpResult;
// while(regexpResult = regexp.exec(frase)) {
//   console.log(regexpResult[0]);
// }

// const resultados = frase.split(regexp);
// console.log(resultados);

// const tags = `
// <ul>
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>
// `;

// const regex = /<li/g;

// const resultado = tags.replace(regex, '<li class="active"');
// console.log(resultado);

const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br
andre@origamid.com`;

const regexp = /(\w+@)([\w.]+)/g;

const resultado = emails.replace(regexp, function(...args) {
  if(args[2] === 'homail.com.br') return args[1] + 'hotmail.com.br';
  else if(args[2] === 'ggmail.com.br') return args[1] + 'gmail.com.br';
  else if(args[2] === 'oulook.com.br') return args[1] + 'outlook.com.br';
  else return args[0];
});

console.log(resultado);