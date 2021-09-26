/*
Argumentos en JavaScript.
*/

function sumar(a, b) {
  suma = a + b;
  console.log("El resultado de " + a + " + " + b + " es: " + suma);
}

sumar(5, 3);
sumar(8, 9);
sumar(2, 4);

// Podemos pasar variables como argumentos y sus nombres no tienen que ser iguales a los parámetros.

let x = 5;
let y = 3;

sumar(x, y);

// Ejemplo

function cadenas(cadena1, cadena2, cadena3) {
  console.log(cadena1 + " " + cadena2 + " " + cadena3);
}

cadenas("Estoy", "aprendiendo", "a programar");
