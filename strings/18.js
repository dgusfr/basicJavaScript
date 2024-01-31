function converteVogaisEmAsterisco(string) {
  return string.replace(/[aeiouAEIOU]/g, "*");
}

const string = "O rato roeu a ropa do rei de Roma";
console.log(converteVogaisEmAsterisco(string));
