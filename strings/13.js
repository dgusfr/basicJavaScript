function contarOcorrencias(string, letra) {
  letra = letra.toLowerCase();
  let contador = 0;

  for (let i = 0; i < string.length; i++) {
    const caractereAtual = string[i].toLowerCase();
    if (caractereAtual === letra) {
      contador++;
    }
  }
  return contador;
}

const string = "Olá, mundo! Esta é uma string de exemplo.";
const letra = "o";
console.log(contarOcorrencias(string, letra));
//Saída: 3

//**************************UTILIZANDO EXPRESSÕES REGULARES**************************

function contaOcorrenciasRegular(string, letra) {
  // Fazer a correspondência global (modificador g) e insensível a maiúsculas e minúsculas (modificador i).
  const ocorrencias = string.match(new RegExp(letra, "gi"));
  // Se não houver ocorrências, retornamos 0, caso contrário, retornamos o número de ocorrências encontradas
  return ocorrencias ? ocorrencias.length : 0;
}

const stringExemplo = "Olá, mundo! Esta é uma string de exemplo.";
const letraExemplo = "o";
console.log(contaOcorrenciasRegular(stringExemplo, letraExemplo));
//Saída: 3
