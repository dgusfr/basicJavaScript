let frase = "Está é uma String em JavaScript!";
let contador = 0;

for (let i = 0; i <= frase.length; i++) {
  if (
    frase[i] === "a" ||
    frase[i] === "e" ||
    frase[i] === "i" ||
    frase[i] === "o" ||
    frase[i] === "u" ||
    frase[i] === "A" ||
    frase[i] === "E" ||
    frase[i] === "I" ||
    frase[i] === "O" ||
    frase[i] === "U"
  ) {
    contador++;
  }
}
console.log(contador);

//Simplificando

let outraFrase = "OutraString em JavaScript!";
let outroContador = 0;
let vogais = "aeiou";

for (let i = 0; i < frase.length; i++) {
  if (vogais.includes(frase[i])) {
    outroContador++;
  }
}

console.log(outroContador); // Saída: 9
