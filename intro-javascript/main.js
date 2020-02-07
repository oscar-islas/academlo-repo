/*
    Tipos de datos javascript
    String
    Number (Integer)
    Boolean
    Objects
    Decimal            
*/
var nombre = "Oscar";
var apellido = "Islas";
var nombreCompleto = nombre+" "+apellido;
var primerNumero = 2;
// var segundoNumero = "3";        

//Para escribir sobre la consola
//parseInt(string/cadena de texto) o Number(string/cadena de texto) para transformar una cadena de texto a un numero entero
// console.log(typeof nombreCompleto);
// console.log(Number(primerNumero + segundoNumero));

//Para escribir sobre el documento
// document.write(nombreCompleto);
// console.log(nombre+" "+apellido);

//Para poner una alerta en el navegador
// alert(nombreCompleto);

/*
Palabras reservadas javascript
await, break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield
*/

var primerNumero = 3;
function sumarDosNumeros(num1, num2){
    console.log(num1+num2);
    
}

function imprimirConsola(){
    console.log("Hola mundo!");
    alert("Hola mundo desde el navegador!");
}

sumarDosNumeros(3,2);
sumarDosNumeros(4,6);

//EcmaScript6
// let segundoNumero = 4;
// segundoNumero = 5;
// segundoNumero = 6;

// const tercerNumero = 3;
// console.log(primerNumero);
// console.log(segundoNumero);

