const frase =
  "Minha terra tem palmeiras onde canta o sabiá; as aves, que aqui gorjeiam, não gorjeiam como lá.";

let novafrase = frase.replace(/gorjeiam/g, "cantam");
console.log(novafrase);

// '/g' indica que a substituição deve ser feita globalmente
