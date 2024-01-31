function verificarConteudo(string) {
  if (/^\d+$/.test(string)) {
    console.log("A frase contém apenas números.");
  } else {
    console.log("A frase contém números e letras.");
  }
}

verificarConteudo("12345"); // Saída: A frase contém apenas números.
verificarConteudo("12345a"); // Saída: A frase contém números e letras.
