let numero = parseInt(prompt("Digite um número:"));

// Verifica se o valor inserido é um número válido
if (!isNaN(numero)) {
  document.write("<h2>Tabuada do " + numero + ":</h2>");

  // Loop for para calcular e imprimir a tabuada do número
  for (let i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + numero * i + "<br>");
  }
} else {
  document.write("<p>Por favor, insira um número válido.</p>");
}
