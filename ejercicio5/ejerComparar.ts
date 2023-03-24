import * as rls from "readline-sync";
let num1: number = rls.questionFloat("ingrese numero 1: ");
let num2: number = rls.questionFloat("ingrese numero 2: ");
let num3: number = rls.questionFloat("ingrese numero 3: ");
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


