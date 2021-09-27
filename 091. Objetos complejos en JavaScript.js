/*
Objetos complejos en JavaScript. 
*/

let pedidosDePizzas = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "paraLlevar": false
  }
];

console.log(pedidosDePizzas[0]);
console.log(pedidosDePizzas[1]);

console.log(pedidosDePizzas[0].tipo);
console.log(pedidosDePizzas[0]["tipo"]);

console.log(pedidosDePizzas[0].precio);
console.log(pedidosDePizzas[0]["precio"]);

// Añadiendo una tercera pizza

let añadirPizza = [
  {
    "tipo": "margarita",
    "tamaño": "individual",
    "precio": 5.67,
    "toppings": [
        "extra queso",
        "champiñones",
        "piña"
    ],
    "paraLlevar": true
  },
  {
    "tipo": "cuatro quesos",
    "tamaño": "familiar",
    "precio": 18.34,
    "toppings": [
        "extra queso",
        "pimentón"
    ],
    "paraLlevar": false
  },
  {
    "tipo": "napolitana",
    "tamaño": "individual",
    "precio": 6.78,
    "toppings": [],
    "paraLlevar": true
  }
];

console.log(añadirPizza);

