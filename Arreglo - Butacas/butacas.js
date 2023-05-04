"use strict";
exports.__esModule = true;
var butacasOcupadas = new Array(true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true);
var butacasDesocupadas = 0;
for (var i = 0; i < butacasOcupadas.length - 1; i++) {
    if (!butacasOcupadas[i]) {
        butacasDesocupadas++;
    }
}
console.log("Las butacas que hay desocupadas son: ".concat(butacasDesocupadas, " "));
