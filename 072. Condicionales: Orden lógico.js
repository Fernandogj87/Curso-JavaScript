/*
Condicionales: Orden lógico.
*/

function clasificarValor(valor) {
  if (valor < 5) {
    console.log(valor + " es menor que 5.");
  } else if (valor < 10) {
    console.log(valor + " es menor que 10.");
  } else {
    console.log(valor + " es mayor o igual que 10.");
  }
}

clasificarValor(7);
clasificarValor(2);
clasificarValor(15);
