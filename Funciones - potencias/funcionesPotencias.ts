//Importamos y declaramos las variables
import * as rls from 'readline-sync';

let base: number = rls.questionInt('Enter base: ');
let exponent: number = rls.questionInt('Enter exponent: ');
let result: number = 1;

//Esta variable nos servirá para comprobar que el exponente sea positivo
let isChecked: boolean  = checkExponent(exponent);

//Mientras no sea positivo, pedimos un nuevo exponente
while (isChecked===false) {
  console.log('Exponent should be non-negative');
  exponent = rls.questionInt('Enter exponent: ');
  isChecked = checkExponent(exponent);
}

//Calculamos la potencia
console.log(power(base, exponent));

//Funciones
//Esta función comprueba que el exponente sea positivo
function checkExponent(exponent: number): boolean {
    if (exponent < 0) {
        return false;
    }
    return true;
}

//Esta función calcula la potencia
function power(base: number, exponent: number): number {
    if (exponent === 0) {
        return result;
    }
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}




