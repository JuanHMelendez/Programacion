"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num1 = rls.questionFloat("ingrese numero 1: ");
var num2 = rls.questionFloat("ingrese numero 2: ");
var num3 = rls.questionFloat("ingrese numero 3: ");
if (num1 > num2 && num1 > num3) {
    console.log("el numero mayor es", num1);
}
else if (num2 > num3) {
    console.log("el numero mayor es", num2);
}
else if (num1 === num2 && num2 === num3 && num1 === num3) {
    console.log("los numeros son todos iguales");
}
else {
    console.log("el numero mayor es", num3);
}
