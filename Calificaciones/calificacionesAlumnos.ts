import * as rls from "readline-sync";
let nombre:String , notaPractica: number , notaProblemas: number , notaTeorica: number , notaFinal:number ;
nombre=" "
notaPractica=0
notaProblemas=0
notaTeorica=0
notaFinal=0
    nombre=rls.question("Ingrese nombre: ");
while(nombre!==""){
    notaPractica=rls.questionInt("Ingrese nota practica: ");
    notaProblemas=rls.questionInt("Ingrese nota problemas: ");
    notaTeorica=rls.questionInt("Ingrese nota teorica: ");
    if((notaPractica>=0 && notaPractica <=10)&&(notaProblemas>=0 && notaProblemas<=10)&&(notaTeorica>=0 && notaTeorica<=10)){
        notaPractica=notaPractica*0.1
        notaProblemas=notaProblemas*0.5
        notaTeorica=notaTeorica*0.4
        notaFinal=notaPractica+notaProblemas+notaTeorica
        console.log(`El Alumno ${nombre} tuvo las siguientes notas: practica ${notaPractica} , problemas ${notaProblemas} y teorica ${notaTeorica} lo que da como nota final ${notaFinal}`);

    }else{
        console.log("Error");
    }
    nombre=rls.question("Ingrese nombre: ");
}
