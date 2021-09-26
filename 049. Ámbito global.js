/*
Ámbito global.
*/

let num = 5;
console.log(num);

function miFuncion() {
  console.log(num);
}

console.log(num); //// La variable está definida fuera de la función. Al ser una variable local, se puede usar fuera de la funcion.
