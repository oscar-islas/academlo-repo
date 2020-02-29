//Desestructuracion
//Objeto persona
const persona = {
    nombre: "Oscar",
    apellido: "Islas"
};

let {nombre, apellido} = persona;
// let nombre = persona.nombre;
// let apellido = persona.apellido;

const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
// let red = rgb[0];
// let green = rgb[1];
// let blue = rgb[2];
// console.log(blue);

//Map
let arregloEdades = [29, 39, 20, 17, 23];
let arregloEdadesModificado = arregloEdades.map((valor, indice, arreglo) => {
    if(indice === 0){
        return valor-5;
    }else{
        return arreglo.length;
    }
});

console.log(arregloEdadesModificado);


//Filter
let arregloNumeros = [10, 30, 20, 10, 3];
// let arregloNumerosModificado = arregloNumeros.filter((valor, indice, arreglo) => {
//     return valor>=10;
// });

//Forma más simple o limpia de representar una expresion de una línea
let arregloNumerosModificado = arregloNumeros.filter(valor => valor>10);
console.log(arregloNumerosModificado);

//Reduce
let sumatoria = arregloNumeros.reduce(function(prevValue, currentValue){    
    return prevValue+currentValue;
});

console.log(sumatoria/arregloNumeros.length);

let sumatoriaForEach = 0;
arregloNumeros.forEach((numero) => {
    sumatoriaForEach+=numero;
});

console.log(sumatoriaForEach);