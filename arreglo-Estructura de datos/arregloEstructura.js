"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var cantidad = rls.questionInt("Ingrese la cantidad de números:");
var indice;
var numeros = new Array(cantidad);
var cantPosi = 0;
var cantCero = 0;
var cantNega = 0;
for (indice = 0; indice <= cantidad - 1; indice++) {
    numeros[indice] = rls.questionInt("Ingrese numero: ");
}
for (var i = 0; i <= cantidad - 1; i++) {
    if (numeros[i] > 0) {
        cantPosi++;
    }
    else if (numeros[i] < 0) {
        cantNega++;
    }
    else {
        cantCero++;
    }
}
console.log("La cantidad de numeros positivos es: ".concat(cantPosi, " la cantidad de numeros negativos es: ").concat(cantNega, " y la cantidad de ceros es: ").concat(cantCero));
