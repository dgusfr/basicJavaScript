function removerCaracteresEspeciais(string) {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z\s]/g, "");
}

function terminaCom(string, palavra) {
  string = removerCaracteresEspeciais(string).toLowerCase();
  palavra = removerCaracteresEspeciais(palavra).toLowerCase();

  const indiceInicial = string.length - palavra.length;

  for (let i = 0; i < palavra.length; i++) {
    if (string.charAt(indiceInicial + i) !== palavra.charAt(i)) {
      return false;
    }
  }
  return true;
}

const stringExemplo = "Olá, mundo! Esta é uma string de exemplo.";
const palavraExemplo = "Exemplo";

if (terminaCom(stringExemplo, palavraExemplo)) {
  console.log("A string termina com a palavra fornecida.");
} else {
  console.log("A string NÃO termina com a palavra fornecida.");
}
