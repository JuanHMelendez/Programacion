"use strict";
exports.__esModule = true;
//Importamos y declaramos las variables
var rls = require("readline-sync");
var base = rls.questionInt('Enter base: ');
var exponent = rls.questionInt('Enter exponent: ');
var result = 1;
//Esta variable nos servirá para comprobar que el exponente sea positivo
var isChecked = checkExponent(exponent);
//Mientras no sea positivo, pedimos un nuevo exponente
while (isChecked === false) {
    console.log('Exponent should be non-negative');
    exponent = rls.questionInt('Enter exponent: ');
    isChecked = checkExponent(exponent);
}
//Calculamos la potencia
console.log(power(base, exponent));
//Funciones
//Esta función comprueba que el exponente sea positivo
function checkExponent(exponent) {
    if (exponent < 0) {
        return false;
    }
    return true;
}
//Esta función calcula la potencia
function power(base, exponent) {
    if (exponent === 0) {
        return result;
    }
    for (var i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}
