"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num1, maximo, minimo;
num1 = rls.questionFloat("ingrese un numero: ");
maximo = num1;
minimo = num1;
while (num1 !== 0) {
    num1 = rls.questionFloat("ingrese un numero: ");
    if (num1 >= maximo && num1 !== 0) {
        maximo = num1;
    }
    else {
        if (num1 < minimo && num1 !== 0) {
            minimo = num1;
        }
    }
}
console.log("El maximo es: ".concat(maximo, " y el minimo es: ").concat(minimo));
