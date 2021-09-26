/*
Notación de Corchetes: de derecha a izquierda.
*/

let miCadena;
let n;

/*
El penúltimo índice es longitud - 2 porque comenzamos 
a contar desde 0.

miCadena.length es 10 para esta cadena de caracteres.
El penúltimo índice es 8.

Cadena:  J  a  v  a  S  c  r  i  p  t 
Índices: 0  1  2  3  4  5  6  7  8  9    
*/

miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 2]); // p

// Alternativa

miCadena = "JavaScript";
n = 4;

console.log(miCadena[miCadena.length - n]);
