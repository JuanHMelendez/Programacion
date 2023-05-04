import * as rls from "readline-sync";

let alumno : string = rls.question("Ingresar nombre alumno: ");
let notas:number[] = new Array(3);
let notasFinales:number=0;
for(let i=0 ; i<=2 ; i++){
    notas[i]=rls.questionInt("Ingrese nota: ");
}
    notasFinales=(notas[0]+notas[1]+notas[2])/3;

    console.log(`El promedio de notas de ${alumno} es: ${notasFinales}`);
    
