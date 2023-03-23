"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var alturaMinima = 130;
var respuesta = "";
var altura = 0;
altura = rls.questionInt("Ingrese su altura en centimetros: ");
respuesta = altura >= alturaMinima ? "usted puede subir" : "Usted no puede subir";
console.log(respuesta);
