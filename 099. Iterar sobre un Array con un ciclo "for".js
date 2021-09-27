/*
Iterar sobre un Array con un ciclo "for".
*/

// Ejemplo 1

let miArray = [4, 6, 8, 2];
let total = 0;

for (let i = 0; i < miArray.length; i++) {
    total += miArray[i];
}

console.log(total);

// Ejemplo

let lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (let i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}

// Ejemplo

function contarNumerosPares(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}

console.log(contarNumerosPares([5, 3, 1]));
console.log(contarNumerosPares([5, 3, 1, 2]));
console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));
console.log(contarNumerosPares([5, 2, 6, 3, 7, 5, 6, 3]));
