import * as rls from "readline-sync";
const nombreUsuarioGuardado: string = "Juan";
const contraseñaUsuarioGuardado: string = "claveJuan"
let nombreUsuario: string = "";
let contraseñaUsuario: string = "";
nombreUsuario = rls.question("Ingrese su nombre de usuario: ");
contraseñaUsuario = rls.question("Ingrese su contraseña: ");
if (nombreUsuario === nombreUsuarioGuardado && contraseñaUsuario === contraseñaUsuarioGuardado) {
    console.log("Bienvenido " + nombreUsuario);
} else {
    console.log("Usuario o contraseña incorrectos");
    console.log("Recuerde que la contraseña son únicamente letras");
}