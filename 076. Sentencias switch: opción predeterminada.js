/*
Sentencias switch: opción predeterminada.
*/

function seleccionarIdioma(valor) {
  let idioma;
  switch (valor) {
    case 1:
      idioma = "Español";
      break;
    case 2:
      idioma = "Francés";
      break;
    case 3:
      idioma = "Italiano";
      break;
    default:
      idioma = "Inglés";
      break;
  }
  return idioma;
}

console.log(seleccionarIdioma(1));
console.log(seleccionarIdioma(2));
console.log(seleccionarIdioma(3));
console.log(seleccionarIdioma(4));
