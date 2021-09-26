/*
Acceder a Arrays multidimensionales.
*/

let miArry = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/*
Array:          [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Índices:               0          1          2
Índices internos:   0  1  2    0  1  2    0  1  2
*/

console.log(miArry[0]); // [1, 2, 3]
console.log(miArry[1]); // [4, 5, 6]
console.log(miArry[2]); // [7, 8, 9]

// Acceder a los elementos del primer Array.

console.log(miArry[0][0]); // 1
console.log(miArry[0][1]); // 2
console.log(miArry[0][2]); // 3

// Acceder a los elementos del segundo Array.

console.log(miArry[1][0]); // 4
console.log(miArry[1][1]); // 5
console.log(miArry[1][2]); // 6

// Acceder a los elementos del tercer Array.

console.log(miArry[2][0]); // 7
console.log(miArry[2][1]); // 8
console.log(miArry[2][2]); // 9
