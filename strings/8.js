function contemApenasDigitos(string) {
  //método de expressoes regulares test()
  return /^\d+$/.test(string);
}

// Exemplo de uso:
const string1 = "12345";
const string2 = "abc123";
console.log(contemApenasDigitos(string1)); // Saída: true
console.log(contemApenasDigitos(string2)); // Saída: false
