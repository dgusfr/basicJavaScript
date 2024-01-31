function capitalizaString(string) {
  // Divide a string em palavras usando o espaço como separador
  const palavras = string.split(" ");

  for (let i = 0; i < palavras.length; i++) {
    // Captura a primeira letra da palavra e a transforma em maiúscula
    const primeiraLetra = palavras[i].charAt(0).toUpperCase();
    // Concatena a primeira letra maiúscula com o restante da palavra (a partir do segundo caractere)
    // e substitui a palavra original na mesma posição do array
    palavras[i] = primeiraLetra + palavras[i].slice(1);
  }

  // Junta as palavras de volta em uma única string
  return palavras.join(" ");
}

const stringExemplo = "olá, mundo! esta é uma string de exemplo.";
console.log(capitalizaString(stringExemplo));
// Saída: "Olá, Mundo! Esta É Uma String De Exemplo."
