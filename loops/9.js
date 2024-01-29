let numero = parseInt(prompt("Digite um número:"));
let divisor = 1;

document.write("<h1>Divisores de " + numero + ":</h1>");

while (divisor <= numero) {
  if (numero % divisor === 0) {
    document.write("<p>" + divisor + "</p>");
  }
  divisor++;
}
