/*
Sentencias switch: múltiples casos.
*/

function Volumen(valor) {
    let nivel;
    switch (valor) {
        case 1:
            nivel = "bajo";
            break;
        case 2:
        case 3:
            nivel = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            nivel = "alto";
            break;
    }
    console.log(nivel);
}

Volumen(1);
Volumen(3);
Volumen(5);
