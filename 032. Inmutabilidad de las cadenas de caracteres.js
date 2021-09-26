/*
Inmutabilidad de las cadenas de caracteres.
*/

let miCadena = "Jola, Mundo";
console.log(miCadena);

miCadena[0] = "H"; // Error porque las cadenas son inmutables.

miCadena = "Hola, Mundo"; // Se debe asignar una cadena nueva.
console.log(miCadena);
