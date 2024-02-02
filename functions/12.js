function encontrarMenorNumero(lista) {
  if (lista.length === 0) {
    return undefined;
  }

  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  return menor;
}

const numeros = [10, 5, 8, 20, 3];
const menorNumero = encontrarMenorNumero(numeros);
console.log(`O menor número da lista é: ${menorNumero}`);
