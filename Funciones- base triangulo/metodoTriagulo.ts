import * as rls from "readline-sync";
let base: number , altura: number ;

function calcularAreaTriangulo (base:number , altura:number):number{
    return (base*altura)/2;
};

let i:number;
for(i=1 ; i<=7 ; i++){
    console.log(i,i*2);
    console.log("el area es:",calcularAreaTriangulo (i,i*2));
    
}
