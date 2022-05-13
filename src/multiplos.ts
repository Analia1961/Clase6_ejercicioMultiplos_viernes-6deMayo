// Modularización y Métodos -CLASE 6- viernes 6 de mayo
// MÉTODOS
//Ejercicio: Múltiplos

/* 
• Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo.
• Recuerde que un número es múltiplo de otro si al dividirlo su resto es cero.
• Recuerde que la operación mod permite saber si el resto de una división es cero.
*/

//… funcionalidad de ingreso de datos …
function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Indique el número a verificar: ";
rotulo2.innerHTML = "Indique el número múltiplo: ";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  let mensaje: string = "El número " + numero1;
  if (!esMultiplo(numero1, numero2)) {
    mensaje += " NO";
  }
  console.log(mensaje + " es múltiplo de " + numero2);
});

/* visto y revisado en: Repositorio Prof. Daniel Tonelli
Link: https://codesandbox.io/s/github/daniel-tonelli/Repositorio 
*/
