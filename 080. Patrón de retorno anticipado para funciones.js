/*
Patrón de retorno anticipado para funciones.
*/

function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adiós");
}

console.log(miFuncion());

function raizCuadrada(num) {
  if (num < 0) {
    return undefined;
  } 
  return Math.sqrt(num);
}

console.log(raizCuadrada(25));
console.log(raizCuadrada(-5));
