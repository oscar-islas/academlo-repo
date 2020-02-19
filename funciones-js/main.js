//Funciones
//Es un fragmento de código reutilizable que contiene una serie de instrucciones

function sumaDosNumeros(numero1, numero2){
    console.log(numero1+numero2);
}

function multiplicaDosNumeros(numero1, numero2){
    console.log(numero1*numero2);
}

function sumaTresNumeros(numero1, numero2, numero3 = 5){
    console.log(numero1+numero2+numero3);
}

//operador spread '...' y rest
function sumaMuchosNumeros(numero1, numero2, ...demasNumeros){
    console.log(numero1+numero2+demasNumeros[3]);
}

//Invocamos a la funcion o la llamamos
// sumaDosNumeros(3, 4);
sumaTresNumeros(2, 3);
sumaTresNumeros(2, 3, 10);
sumaMuchosNumeros(3, 5, 6, 8, 9, 10);
// for(let i=0; i<10; i++){
//     multiplicaDosNumeros(i, 3);
// }