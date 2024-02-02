function verificarNumeroPar(numero) {
  // Um número é par se for divisível por 2 sem deixar resto
  return numero % 2 === 0;
}

// Exemplos de uso:
console.log(verificarNumeroPar(4)); // Saída: true
console.log(verificarNumeroPar(7)); // Saída: false
console.log(verificarNumeroPar(0)); // Saída: true
