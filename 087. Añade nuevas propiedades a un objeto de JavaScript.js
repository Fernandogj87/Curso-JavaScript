/*
Añade nuevas propiedades a un objeto de JavaScript.
*/

let curso = {
    "titulo": "Curso JavaScript",
    "idioma": "Español",
    "duracion": 30
};
console.log(curso);

// Notación de punto
console.log(curso.vistas); // undefined
curso.vistas = 3500;
console.log(curso.vistas);

// Notación de corchetes
curso["likes"] = 34500;
console.log(curso.likes);

console.log(curso);
