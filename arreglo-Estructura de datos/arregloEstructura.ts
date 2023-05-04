import * as rls from "readline-sync";

let cantidad : number = rls.questionInt("Ingrese la cantidad de números:");
let indice : number;
let numeros:number[] = new Array (cantidad);
let cantPosi:number=0;
let cantCero:number=0;
let cantNega:number=0;
for(indice=0 ; indice <= cantidad-1 ; indice++){
    numeros[indice]=rls.questionInt("Ingrese numero: ");
    
}

for(let i=0 ; i<=cantidad-1 ; i++){
    if(numeros[i]>0){
        cantPosi++;
    }else if(numeros[i]<0){
           cantNega++;
    }else{
        cantCero++
    }     

}
console.log(`La cantidad de numeros positivos es: ${cantPosi} la cantidad de numeros negativos es: ${cantNega} y la cantidad de ceros es: ${cantCero}`);



