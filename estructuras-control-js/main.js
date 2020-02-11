//Estructura de control if, switch

/* Evalua una condición para ejecutar 
* una serie de instrucciones en caso de ser verdadero o falso */
if(3 < 4){
    //Instrucciones
}else{
    //Instrucciones en caso de que no sea verdadera esta sentencia booleana
}

let edad = 18;
switch(edad){
    case 18:
        //Instrucciones
        console.log("Eres mayor de edad");
        break;
    case 3:
        //Instrucciones
        console.log("Eres menor de edad");
        break;
    case 40:
        console.log("Eres un adulto");
        break;
    default: 
        console.log("Caso desconocido");
        break;
}

let fruta = "Mango";
//Expresion
// switch(fruta){
//     case "Mango":
//         //Instrucciones        
//         // let cantidadMangos = prompt("¿Cuántos mangos te gustaría pedir?");
//         console.log(cantidadMangos);
//         break;
//     case "Manzana":
//         //Instrucciones
//         let cantidadManzanas = prompt("¿Cuántas manzanas te gustaría pedir?");
//         console.log(cantidadManzanas);
//         break;
//     case "Pera":
//         let cantidadPeras = prompt("¿Cuántas peras te gustaría pedir?");
//         console.log(cantidadPeras);
//         break;
//     default: 
//         console.log("Caso desconocido");
//         break;
// }

//Para obtener el día de hoy
// let diaHoy = new Date().getDay();

// switch(diaHoy){
//     case 0:
//         console.log("El día de hoy es domingo");
//         break;
//     case 1:
//         console.log("El día de hoy es lunes");
//         break;
//     case 2:
//         console.log("El día de hoy es martes");w
//         break;
// }
/*
let razaPerro = prompt("Ingresa la raza del perro para conocer su información");

switch(razaPerro){
    case "maltes":
        let cantidadPerrosMaltes = 5;
        console.log("Tenemos",cantidadPerrosMaltes,"perros maltes");
        break;
    case "pastor aleman":
        console.log();
        break;
    case "chihuahua":
        console.log();
        break;
    default:
        console.log("No existe esa raza de perro en el sistema");
        break;
} 
*/

/* Bucle for 
inicialización; condición; actualización;
*/
for(let i=1; i<=10; i++){
    //Instrucciones
    console.log(i);
    var contador = i;
    if(i===1){
        document.write("<h1>Hola Mundo "+i+" vez</h1>");
    }else{
        document.write("<h1>Hola Mundo "+i+" veces</h1>");
    }
}