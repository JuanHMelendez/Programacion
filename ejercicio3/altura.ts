import * as rls from "readline-sync";
const alturaMinima:number = 130;
let respuesta:string = "";
let altura: number = 0;
altura = rls.questionInt ("Ingrese su altura en centimetros: ");
respuesta = altura >= alturaMinima ? "usted puede subir":"Usted no puede subir";
console.log(respuesta);




