//Arrays, Arreglos, Matrices
//Son variables usadas para almacenar multiples valores en una sola variable
let marcasZapatos = ["Nike", "Adidas", "Puma"];
let marcasAutos = new Array("Audi", "Nissan", "Toyota", "Audi", "Audi");
let numeros = new Array(5); 
let arrayNumeros = [5];
console.log(numeros.length); //Para conocer el tamaño de nuestro arreglo

// for(let i=0; i<marcasZapatos.length; i++){
//     console.log(marcasZapatos[i]);
// }

// console.log("La marca de zapatos en la primera posición es:", marcasZapatos[0]);

//Una forma más limpia de recorrer nuestro arreglo <callback(<elemento>,<indice>,<data>)>
marcasZapatos.forEach(function(elemento, index){
    console.log(elemento, "esta en la posición "+index);    
});

console.log("=============================");

marcasAutos.forEach((elemento, index) => {
    console.log(elemento, "esta en la posición "+index);    
});

//<variable> in <arreglo a recorrer>
for(let auto in marcasAutos){
    console.log(marcasAutos[auto]); //Para obtener los valores de los elementos dentro de nuestro arreglo
}

marcasAutos.push("Toyota", "Bugatti"); //Agrega más elementos dentro de un arreglo

console.log(marcasAutos);

marcasAutos.pop(); //Elimina el último elemento dentro de un arreglo

console.log(marcasAutos);

//<indice>< no de elementos que borraré a partir del indice que indique > 
marcasAutos.splice(1, 1); //Elimina un elemento en particular indicando el indice
//Busca el indice de un elemento para eliminarlo con el método splice
// for(let y = 0; y<marcasAutos.length; y++){
//     marcasAutos.splice(marcasAutos.indexOf("Audi"), 1); 
// }
//Para unir mis elementos de un arreglo y convertirlos a una cadena de texto 
//join(<separar elementos por>)
console.log(marcasAutos.join(", "));

let palabraBuscar = "Audi";
if(marcasAutos.includes(palabraBuscar)){
    console.log(`La marca ${palabraBuscar} se encuentra dentro de nuestro arreglo`);
}else{
    console.log(`La marca ${palabraBuscar} no se encuentra dentro de nuestro arreglo`);
}

let estudiantes = ["Luis", "Octavio", "Andrea", "Paula"];
let calificaciones = [
    [9, 13, 9, 10],
    [9, 10, 9, 10],
    [9, 10, 9, 10],
    [9, 10, 9, 10],
];

console.log(calificaciones[0][2]);

// calificaciones.forEach((calificacion, indice)=>{
//     estudiantes.forEach((estudiante, indiceEstudiante)=>{
//         console.log(
//             `${estudiante} tuvo la calificacion de ${calificaciones[indice][indiceEstudiante]} en el periodo ${indice+1}`                        
//         );        
//     })
// });


console.log(estudiantes.reverse());

console.log(estudiantes.sort()); //Ordenar de forma ascendente
console.log(estudiantes.sort().reverse()); //Ordenar de forma descendente

let edad = [20, 30, 29, 27, 42];
let busquedaEdad = edad.find((edadEstudiante) => edadEstudiante === 20);
let busquedaEdadIndex = edad.findIndex((edadEstudiante) => edadEstudiante === 42);
//https://www.w3schools.com/jsref/jsref_match.asp
let encontrarCoincidencias = marcasAutos.join(" ").match(/Audi/gi);
let encontrarCoincidenciasExactas = 0;
console.log(busquedaEdad);
console.log(busquedaEdadIndex);

marcasAutos.forEach((auto, indice) => {    
    console.log(auto);
    if(auto === "Audi"){
        encontrarCoincidenciasExactas++;
    }
});

console.log("existen "+encontrarCoincidenciasExactas+" coincidencias para la palabra Audi ");

marcasAutos.unshift("Bugatti"); //Agrega al inicio los elementos que estén entre parentesis
marcasAutos.shift(); //Para borrar el primer elemento de un arreglo
console.log(marcasAutos);