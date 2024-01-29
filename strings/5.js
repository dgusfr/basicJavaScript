let primeiraPalavra = prompt("Digite a primeira palavra:");
let segundaPalavra = prompt("Digite a segunda palavra:");

if (primeiraPalavra.length === segundaPalavra.length) {
  primeiraPalavra = primeiraPalavra.toLowerCase();
  segundaPalavra = segundaPalavra.toLowerCase();

  const primeiraPalavraOrdenada = primeiraPalavra.split("").sort().join("");
  const segundaPalavraOrdenada = segundaPalavra.split("").sort().join("");

  if (primeiraPalavraOrdenada === segundaPalavraOrdenada) {
    document.write("<p>As palavras <strong>SÃO</strong> anagramas!</p>");
  } else {
    document.write("<p>As palavras <strong>NÃO são</strong> anagramas!</p>");
  }
} else {
  document.write("<p>As palavras <strong>NÃO são</strong> anagramas!</p>");
}
