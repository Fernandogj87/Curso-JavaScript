/*
Objetos anidados.
*/

let miReceta = {
  "descripcion": "mi postre favorito",
  "coste": 15,
  "ingredientes": {
    "masa": {
      "harina": "100 grs",
      "sal": "1 cucharadita",
      "agua": "1 taza"
    },
    "cobertura": {
      "azucar": "120 grs",
      "chocolate": "4 cucharadas",
      "mantequilla": "200 grs"
    }
  }
};

console.log(miReceta.descripcion);
console.log(miReceta.coste);
console.log(miReceta.ingredientes);

console.log(miReceta.ingredientes.masa);

console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);

console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa["agua"]);

console.log(miReceta.ingredientes.cobertura);

console.log(miReceta.ingredientes.cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);
