/*
===== Metodos para procesar textos =========
*/

let nombre = "Oscar";
let apellido = " Islas";
let numero = 2020;
console.log(nombre.toUpperCase()); //Metodo para transformar en mayusculas un texto
console.log(nombre.toLowerCase()); //Metodo para transformar en minusculas un texto
console.log(nombre.length); //Para saber la longitud de mi string
console.log(nombre.concat(apellido)); //Concatenar con un metodo
console.log(`Hola mi nombre es ${nombre} ${apellido}`); //Para concatenar de una forma más limpia
console.log(numero.toString());
// let inputUsuario = prompt("Dime tu nombre");
// if(inputUsuario.toLowerCase() === "oscar"){
//     console.log("Bienvenido ", inputUsuario.toUpperCase());
// }


/* 
====== Metodos de busqueda =======
*/
let texto = "Hola bienvenidos al curso de desarrollo web curso full stack";
console.log(texto.indexOf("curso")); //Para encontrar el indice donde empieza la palabra
console.log(texto.lastIndexOf("curso")); //Para encontrar el indice de la palabra respecto a su ultima coincidencia
console.log(texto.search("curso")); //Nos regresa el indice donde comienza la palabra o -1 en caso de que no encuentre la palabra
console.log(texto.match(/full/g));
console.log("Se encontraron ", texto.match(/curso/g).length, " coincidencias de la palabra curso" ); //Para encontrar todas las coincidencias dentro de un string
//Sustituyendo va del indice 44 al 60
console.log(texto.substr(44, texto.length)); //Obtiene un fragmento de texto dentro de un rango (inicio, fin)
console.log(texto.charAt(44)); //Para obtener el caracter dado el indice que indiquemos 
console.log(texto.startsWith("Hola")); //Para conocer si un string empieza por una palabra o expresión
console.log(texto.endsWith("full stack")); //Para conocer si un string termina por una palabra o expresión
console.log(texto.includes("bienvenido")); //Para conocer si una palabra existe dentro de un string

/* 
==== Metodos de remplazo ======
*/

console.log(texto.replace("bienvenidos al curso", "")); //Remplazar una palabra/expresion 
console.log(texto.slice(0, 20)); //Cortar un string indicando el inicio y fin
console.log("www.academlo.com/usuarios?user=oscar".split("=")); //Separa nuestro texto conforme a un patrón y lo muestra como array/arreglo
let arregloPalabras = texto.split(" ");
console.log(arregloPalabras[3]); //Para acceder a una palabra indicando el indice
console.log(texto.trim()); //Para quitar los espacios del inicio y fin
