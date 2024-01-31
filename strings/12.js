function removerCaracteresEspeciais(string) {
  // Remove os acentos da string usando a forma de Normalização Unicode (NFD)
  string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  // Substitui todos os caracteres especiais, incluindo os acentos removidos, por uma string vazia
  return string.replace(/[^\w\s]/gi, "");
}

const stringComEspeciais =
  "Olá, mundo! Este é um exemplo de string com caracteres especiais.";
console.log(removerCaracteresEspeciais(stringComEspeciais)); //
