/*
Operador lógico "and" en JavaScript.
*/

/*
Operador AND (&&) 
Solo es true cuando ambos operandos son true.
*/

let a = 8;

// (a > 5) && (a < 10) --> true && true --> true
console.log((a > 5) && (a < 10)); 

a = 3;

// (a < 5) && (a <= 10) --> true && false --> false
console.log((a < 5) && (a <= 10));

a = 15;

// (a < 5) && (a > 10) --> false && true --> false
console.log((a >= 5) && (a > 10));

a = 1;

// (a == 5) && (a > 10) --> false && false --> false
console.log((a == 5) && (a > 10));
