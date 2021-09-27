/*
Ámbito global vs. ámbito local en funciones.
*/

let nombre = "Fernando";

function mostrarNombre() {
  let nombre = "Luis";
  console.log(nombre); 
}

mostrarMiNombre();

console.log(nombre);
