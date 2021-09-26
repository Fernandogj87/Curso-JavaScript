/*
Ámbito local.
*/

function miFuncion() {
  let num = 4;
  console.log(num);
}

miFuncion(); // La variable está definida dentro de la función.

console.log(num); // ¡Error! Al ser una variable local, no se puede usar fuera de la función.
