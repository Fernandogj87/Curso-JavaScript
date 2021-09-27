/*
Encadenar sentencias if else.
*/

function interpretarIMC(imc) {
  if (imc < 18.5) {
    console.log("IMC Bajo Peso");
  } else if (imc <= 24.9) {
    console.log("IMC Normal");
  } else if (imc <= 29.9) {
    console.log("IMC Sobrepeso");
  } else {
    console.log("IMC Obeso");
  } 
}

interpretarIMC(17.8); 
interpretarIMC(22.2);
interpretarIMC(28.5);
interpretarIMC(32.2);
