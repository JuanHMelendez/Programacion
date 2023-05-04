import * as rls from "readline-sync";

 let butacasOcupadas:boolean [] = new Array(true,false,false,true,true,true,false,false,true,true,true,false,false,true,true,true,false,false,true,true,);
let butacasDesocupadas:number=0;
for(let i=0 ; i<butacasOcupadas.length-1; i++){
    if(!butacasOcupadas[i]){
        
        butacasDesocupadas++
        
    }
}

console.log(`Las butacas que hay desocupadas son: ${butacasDesocupadas} `);

