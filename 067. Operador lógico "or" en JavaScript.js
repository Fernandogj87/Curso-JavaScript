/*
Operador lógico "or" en JavaScript.
*/

/*
Operador OR (||)
La expresión es true si alguno de los dos operandos son true.
*/

let a = 8;

// (a < 5) || (a > 15) --> false || false --> false
console.log((a < 5) || (a > 15));

a = 2;

// (a < 5) || (a > 15) --> true || false --> true
console.log((a < 5) || (a > 15));

a = 20;

// (a < 5) || (a > 15) --> false || true --> true
console.log((a < 5) || (a > 15));

a = 5;

// (a < 5) || (a > 15) --> true || true --> true
console.log((a == 5) || (a < 15));
