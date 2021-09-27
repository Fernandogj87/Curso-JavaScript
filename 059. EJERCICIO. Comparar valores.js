/*
EJERCICIO. Comparar valores.
*/

let a;
let b;

a = 5;
b = 5;

console.log(a == b);  // true
console.log(a === b); // true

b = 8;

console.log(a == b);  // false
console.log(a === b); // false

b = "5";

console.log(a == b);  // true
console.log(a === b); // false

a = "JavaScript";
b = "Javascript";

console.log(a == b);  // true
console.log(a === b); // true
