"use strict";
exports.__esModule = true;
var base, altura;
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
;
var i;
for (i = 1; i <= 7; i++) {
    console.log(i, i * 2);
    console.log("el area es:", calcularAreaTriangulo(i, i * 2));
}
