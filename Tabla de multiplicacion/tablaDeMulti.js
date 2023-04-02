"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var num1, numMulti, i;
num1 = rls.questionInt("Ingrese un numero :");
numMulti = rls.questionInt("Ingrese numero para multiplicar :");
for (i = 1; i <= numMulti; i++) {
    console.log("".concat(num1, " x ").concat(i, " = ").concat(num1 * i));
}
