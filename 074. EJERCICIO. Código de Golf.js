/*
Código de Golf.
*/

/*
En el juego de golf cada hoyo tiene un par que representa el número promedio de golpes
que se espera que haga un golfista para introducir la bola en el hoyo.

Hay un nombre diferente dependiendo de qué tan por encima o por debajo del par estén tus golpes.

Tu función tomará los argumentos par y golpes. 

Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad: 

//Ejemplo par 4
Golpes             Retornar
-------------------------------
1	                 "Hole-in-one!"
2	                 "Eagle"
3     	           "Birdie"
4	                 "Par"
5	                 "Bogey"
6	                 "Double Bogey"
+ de 6	           "Go Home!"

*/

function puntuacionGolf(par, golpes) {
  if (golpes == 1) {
    return "Hole-in-one!";
  } else if (golpes <= par - 2) {
    return "Eagle";
  } else if (golpes == par - 1) {
    return "Birdie";
  } else if (golpes == par) {
    return "Par";
  } else if (golpes == par + 1) {
    return "Bogey";
  } else if (golpes == par + 2) {
    return "Double Bogey";
  } else if (golpes >= par + 3) {
    return "Go Home!";
  }
}

puntuacionGolf(4, 1);  // Hole-in-one!
puntuacionGolf(4, 2);  // Eagle
puntuacionGolf(4, 3);  // Birdie
puntuacionGolf(4, 4);  // Par
puntuacionGolf(4, 5);  // Bogey
puntuacionGolf(4, 6);  // Double Bogey
puntuacionGolf(4, 15); // Go Home!
