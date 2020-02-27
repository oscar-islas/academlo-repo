//map, filter y reduce
let numeros = [2, 3, 4, 5, 9, 2, 4, 7, 5];
let arregloNumerosModificadosF = [];
//Modifica o aplica propiedades a cada elemento dentro de un arreglo
let arregloNumeroModificado = numeros.map((numero, indice, arregloNumeros) => {
    let numeroActual = numero;
    return numero*3;
});

console.log(arregloNumeroModificado);



numeros.forEach((numero, indice) => {
    arregloNumerosModificadosF.push(numero*3);
});

// console.log(arregloNumeroModificado);

// console.log(arregloNumerosModificadosF);

//Filtrar los elementos que cumplan una condición
//[2, 3, 4, 5, 9];
//[false, false, false, true, true]
let condicion = false;
let filtroNumeros = numeros.filter((numeroActual, indice, arregloNumeros) => {
    condicion = numeroActual > 4;
    return numeroActual > 4;
});

console.log(filtroNumeros);

//[2, 3, 4, 5, 9, 2, 4, 7];
//[true, true, true, true, true, false, false, true]
let filtroNumerosSimilares = numeros.filter((numero, indice, arregloNumeros) => {
    //Primera iteración 0 === 0 -> true
    //Segunda iteración 1 === 1 -> true
    //3ra 2 === 2 -> true
    //4ta 3 === 3 -> true
    //5ta 4 === 4 -> true
    //6ta 0 === 5 -> false
    //7ma 2 === 6 -> false
    //8va 7 === 7 -> true
    return arregloNumeros.indexOf(numero) === indice;
});

// console.log(filtroNumerosSimilares);

//[2, 3, 4, 5, 9, 2, 4, 7, 5];
let numeroAcumulador = 0;
let callbackReduce = (acumulador, valorActual, indice, arregloNumeros) => {
    numeroAcumulador = acumulador;
    return acumulador + valorActual;
};

let reduceNumeros = numeros.reduce(callbackReduce, 0);

console.log(reduceNumeros);

