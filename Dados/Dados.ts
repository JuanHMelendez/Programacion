import * as rls from "readline-sync";
let cantidadDados : number ;
const caraDados:number =6;

cantidadDados= rls.questionInt("Ingrese cantidad de dados");
let denominador = Math.pow(caraDados , cantidadDados);
console.log("Denominador: " , denominador );
let probabilidadTodosSeis = 1 / denominador

console.log(probabilidadTodosSeis * 100," %");


