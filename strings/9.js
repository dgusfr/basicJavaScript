function capitalizeWords(sentence) {
  // '/\b\w/g' localiza letra no início de uma palavra na frase.
  // function (char) Função de Callback
  return sentence.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}

const frase = "o rato roeu a roupa do rei de roma";
console.log(capitalizeWords(frase));
