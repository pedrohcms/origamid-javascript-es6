async function puxarDados() {
  const responseDados   = fetch('./dados.json');
  const responseCliente = fetch('./clientes.json');

  const jsonDados   = await (await responseDados).json();
  const jsonCliente = await (await responseCliente).json();

  console.log(jsonDados);
  console.log(jsonCliente);
}

puxarDados();

async function asyncSemPromise() {
  // Console não irá esperar.
  await new Promise(resolve => {
    setTimeout(() => resolve(), 1000)
  });
  console.log('acabou');
}
asyncSemPromise();