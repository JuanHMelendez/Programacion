"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var alumno = rls.question("Ingresar nombre alumno: ");
var notas = new Array(3);
var notasFinales = 0;
for (var i = 0; i <= 2; i++) {
    notas[i] = rls.questionInt("Ingrese nota: ");
}
notasFinales = (notas[0] + notas[1] + notas[2]) / 3;
console.log("El promedio de notas de ".concat(alumno, " es: ").concat(notasFinales));
