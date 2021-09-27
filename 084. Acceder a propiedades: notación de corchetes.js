/*
Acceder a propiedades: notación de corchetes.
*/

let cuaderno = {
  "color": "verde",
  "categoria": 3,
  "numero de paginas": 200,
  "numero de hojas": 100
};

console.log(cuaderno["color"]); // Notación de corchetes
console.log(cuaderno.color);    // Notación de punto

console.log(cuaderno["numero de paginas"]); // Notación de corchetes
// console.log(cuaderno.numero de paginas); // No funciona porque tiene espacios

// Posibles modificaciones

// camelCase (más común)
let cuaderno = {
  "color": "verde",
  "categoria": 3,
  "numeroDePaginas": 200,
  "numeroDeHojas": 100
};

console.log(cuaderno.numeroDePaginas);
console.log(cuaderno.numeroDeHojas);
