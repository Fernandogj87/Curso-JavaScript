/*
Ciclo "while" en JavaScript.
*/

// Ejemplo 1

let i = 0;

while (i <= 3) {
  console.log("Hola, mundo");
  i++;
}

// Ejemplo 2

let miArray = [];
let i=1;

console.log(miArray);

while (i < 10) {
  miArray.push(i);
  i++;
}

console.log(miArray);

// Ejemplo 3

let numeros = [2, 3, 4, 5, 6, 8, 9, 34];
console.log(numeros);

while (numeros.length > 4) {
  numeros.pop(); // Remover el último número.
}

console.log(numeros);
