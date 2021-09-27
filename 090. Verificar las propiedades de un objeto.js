/*
Verificar las propiedades de un objeto.
*/

let miCuaderno = {
  "color": "verde",
  "categoria": 3,
  "precio": 4.56
};

console.log(miCuaderno.hasOwnProperty("color"));  // true
console.log(miCuaderno.hasOwnProperty("origen")); // false

// Ejemplo

function verificarPropiedad(obj, propiedad) {
  if (obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
}

console.log(verificarPropiedad(miCuaderno, "color"));
console.log(verificarPropiedad(miCuaderno, "origen"));
