let frase =
  "No meio do caminho tinha uma pedra, tinha uma pedra no meio do caminho, tinha uma pedra no meio do caminho tinha uma pedra";
let palavra = "pedra";
let contador = 0;

frase = frase.replace(/[.,;]/g, "");
let palavras = frase.split(/\s+/);

for (let i = 0; i < palavras.length; i++) {
  if (palavras[i].toLowerCase() === palavra.toLowerCase()) {
    contador++;
  }
}

console.log("A palavra '" + palavra + "' apareceu : " + contador + " vezes");
