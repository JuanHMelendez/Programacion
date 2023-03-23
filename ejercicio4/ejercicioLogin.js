"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombreUsuarioGuardado = "Juan";
var contraseñaUsuarioGuardado = "claveJuan";
var nombreUsuario = "";
var contraseñaUsuario = "";
nombreUsuario = rls.question("Ingrese su nombre de usuario: ");
contraseñaUsuario = rls.question("Ingrese su contraseña: ");
if (nombreUsuario === nombreUsuarioGuardado && contraseñaUsuario === contraseñaUsuarioGuardado) {
    console.log("Bienvenido " + nombreUsuario);
}
else {
    console.log("Usuario o contraseña incorrectos");
    console.log("Recuerde que la contraseña son únicamente letras");
}
