/*
Operador de igualdad en JavaScript.
*/

console.log(5 == 5); // true
console.log(6 == 5); // false

console.log("Hola" == "Hola"); // true
console.log("Hola" == "Ola"); // false
console.log("Hola" == "hola"); // false

console.log([1, 2, 3] == [1, 2, 3]);  // false (No compara si son iguales. Compara si son el mismo objeto en memoria).
console.log([1, 2, 3] == [4, 5, 6]);  // false
