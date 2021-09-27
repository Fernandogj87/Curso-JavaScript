/*
Cláusula "else if" en sentencias condicionales.
*/

function clasificarValor(valor) {
  if (valor % 2 === 0) {
    console.log(valor + " es divisible entre 2.");
  } else if (valor % 3 === 0) {
    console.log(valor + " es divisible entre 3.");
  } else {
    console.log(valor + " no es divisible entre las opciones.");
  }
}

clasificarValor(2);
clasificarValor(15);
clasificarValor(7);
