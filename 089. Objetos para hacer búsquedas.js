/*
Objetos para hacer búsquedas.
*/

// Inicialmente es una sentencia switch
// y vamos a reemplazarla con un objeto.

function buscarElemento(simbolo) {
  let elementoQuimico = "";

  switch (simbolo) {
    case "Al":
      elementoQuimico = "Aluminio";
      break;
    case "S":
      elementoQuimico = "Azufre";
      break;
    case "Cl":
      elementoQuimico = "Cloro";
      break;
    case "He":
      elementoQuimico = "Helio";
      break;
    case "B":
      elementoQuimico = "Boro";
      break;
    case "Li":
      elementoQuimico = "Litio";
      break;
  }
  return elementoQuimico;
}
  
console.log(buscarElemento("Al"));
console.log(buscarElemento("S"));
console.log(buscarElemento("Cl"));
console.log(buscarElemento("He"));
console.log(buscarElemento("B"));
console.log(buscarElemento("Li"));

// Podemos cambiar switch por un objeto. 
/*
function buscarElemento(simbolo) {
   let simbolosQuimicos = {
     "Al": "Aluminio",
     "S": "Azufre",
     "Cl": "Cloro",
     "He": "Helio",
     "B": "Boro",
     "Li": "Litio"
   };
   return simbolosQuimicos[simbolo];
 }

console.log(buscarElemento("Al"));
console.log(buscarElemento("S"));
console.log(buscarElemento("Cl"));
console.log(buscarElemento("He"));
console.log(buscarElemento("B"));
console.log(buscarElemento("Li"));
*/
