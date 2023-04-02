import * as rls from "readline-sync";
let num1, numMulti , i : number ;

num1= rls.questionInt("Ingrese un numero :");
numMulti=rls.questionInt("Ingrese numero para multiplicar :");

for (i=1 ; i<=numMulti ; i++) {
    console.log(`${num1} x ${i} = ${num1*i}`);
    

}
