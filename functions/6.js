function verificarPalindromo(palavra) {
  palavra = palavra.toLowerCase().replace(/ /g, "");

  const palavraInvertida = palavra.split("").reverse().join("");
  return palavra === palavraInvertida;
}

console.log(verificarPalindromo("arara")); // Saída: true
console.log(verificarPalindromo("python")); // Saída: false
console.log(verificarPalindromo("Ame a ema")); // Saída: true
