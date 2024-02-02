// 1. Remova o erro
priceNumber("R$ 99,99");
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");

// 2. Crie uma IIFE e isole o escopo de qualquer código JS.

// Como podemos utilizar a função abaixo.
const active = (callback) => callback();

//*********************************RESPOSTAS*********************************

//1. Nas funções em JavaScript a ordem importa!
const priceNumber2 = (n) => +n.replace("R$", "").replace(",", ".");
priceNumber2("R$ 99,99");

//2.
(function () {
  var carro = "Civic";
  console.log(carro);
})();

//3. Podemos usar como arrow function
active(() => {});
