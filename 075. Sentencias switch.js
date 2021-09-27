/*
Sentencias switch.
*/

function vocales(valor) {
    let respuesta;
    switch (valor) {
        case 1:
            respuesta = "a";
            break;
        case 2:
            respuesta = "e";
            break;
        case 3:
            respuesta = "i";
            break;
        case 4:
            respuesta = "o";
            break;
        case 5:
            respuesta = "u";
            break;    
    }
    console.log(respuesta);
}

vocales(1);
vocales(2);
vocales(3);
vocales(4);
vocales(5);



// Ejemplo


function comida(producto){

switch (producto) {
    case "pizza":
        console.log("La pizza básica cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("Las hamburguesas cuestan $6.78");
        break;
    case "helado":
        console.log("El helado cuesta $2.8");
        break;
    }

}

comida("pizza");
comida("hamburguesa");
comida("helado");

