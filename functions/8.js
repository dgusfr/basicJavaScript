function ordenarLista(lista) {
  return lista.sort((a, b) => a - b);
}

// Exemplo de uso:
const numeros = [5, 3, 9, 1, 7, 2];
const numerosOrdenados = ordenarLista(numeros);
console.log("Lista ordenada:", numerosOrdenados);
