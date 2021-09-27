/*
Ciclos "for" anidados.
*/

let miArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Por cada arreglo anidado
for (let i = 0; i < miArray.length; i++) {
  let arrayAnidado = miArray[i];
  
  // Por cada elemento del arreglo anidado
  for (let j = 0; j < miArray.length; j++) {
    console.log(arrayAnidado[j]);
  }
}
