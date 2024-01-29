let frase = "Hello World!";
let novaString = "";

for (let i = frase.length - 1; i >= 0; i--) {
  novaString += frase[i];
}
console.log(novaString);

// Ou usando o metodo reverse()

function inverterString(str) {
  return str.split("").reverse().join("");
}

let stringOriginal = "Minha String em JS";
let stringInvertida = inverterString(stringOriginal);
console.log(stringInvertida);
