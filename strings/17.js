function inverterPalavras(frase) {
  const palavras = frase.split(" ");
  const palavrasInvertidas = palavras.reverse();

  return palavrasInvertidas.join(" ");
}

// Exemplo de uso:
const fraseExemplo = "Olá, mundo! Esta é uma frase de exemplo.";
console.log(inverterPalavras(fraseExemplo));
// Saída: "exemplo. de frase uma é Esta mundo! Olá,"
