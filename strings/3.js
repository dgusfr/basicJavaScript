function ehPalindromo(str) {
  // Remover espaços em branco e transformar tudo em minúsculas
  str = str.toLowerCase().replace(/\s/g, "");
  return str === str.split("").reverse().join("");
}

const string1 = "arara";
console.log(ehPalindromo(string1));

const string2 = "hello";
console.log(ehPalindromo(string2));
