/*
Eliminar propiedades en un objeto de JavaScript.
*/

let curso = {
    "titulo": "Curso JavaScript",
    "idioma": "Español",
    "duracion": 30
};
console.log(curso);
console.log(curso.duracion); // 30
delete curso.duracion;
console.log(curso.duracion); // undefined

console.log(curso.idioma);   // Español
delete curso.idioma;
console.log(curso.idioma);   // undefined
console.log(curso);
