/*
EJERCICIO. Permanece en fila.
*/

/*
EJERCICIO: Define una función Fila() que tome un Array y un número (elemento) 
como argumentos. Agrega el número al final del Array y luego elimina el primer 
elemento del Array. La función fila debe retornar el elemento 
que fue eliminado.
*/

function Fila(array, elemento) {
  array.push(elemento); // Agregar al final del Array.
  return array.shift(); // Eliminar el primer elemento y retornarlo.
}
  
let miArray = [1, 2, 3, 4, 5];
  
console.log("Antes: " + JSON.stringify(miArray));
console.log(Fila(miArray, 6));
console.log("Después: " + JSON.stringify(miArray));
