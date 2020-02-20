function sumaDosNumeros(a, b){
    console.log(a+b);
}


//Invocamos a la funcion
sumaDosNumeros(3,6);

//Las funciones anonimas no tienen nombre
// 1. Agrupar el codigo escrito entre parentesis para que no haya errores
// sintacticos con el resto del codigo
// 2. Crear una funcion anonima con el codigo a ejecutar
// 3. Colocar () inmediatamente para poder ejectutar la función
(function(a, b){
    console.log(a+b);
}(6, 10));

function sumaParImpar(a, b, fParImpar){    
    fParImpar(a+b);
}

//Callback es una funcion anonima que se pasa como parametro a una función y
// esa función ejecuta una función anonima 

sumaParImpar(3,8,function(suma){
    if(suma%2===0){
        console.log("El numero "+ suma + " es par");
    }else{
        console.log("El numero "+ suma + " es impar");
    }
});

//Funciones de flecha
//Es una forma más limpia y clara de poder definir funciones de callback, estas sustituyen la palabra function por la flecha

let suma = (a, b) => {
    console.log(a+b);
};

suma(8,9);

//Cuando la función de flecha lleva un parametro podemos quitarle los parentesis
sumaParImpar(20,20, suma =>{
    if(suma%2===0){
        console.log("El numero "+ suma + " es par");
    }else{
        console.log("El numero "+ suma + " es impar");
    }
});

//Si tiene más de un parametro es necesario poner los parentesis
sumaParImpar(20,40, (suma, suma2) =>{
    if(suma%2===0){
        console.log("El numero "+ suma + " es par");
    }else{
        console.log("El numero "+ suma + " es impar");
    }
});

function sumaTresRegular(a, b, c){
    return a+b+c;
}

//Cuando es una expresión de una línea podemos utilizar la función de flecha
//NombreFuncion = FunciónFlecha(parametros) => el valor que regresará la función
let sumaTres = (a, b, c) => a+b+c;
// let sumaTres = (a, b, c) => {
//     return a+b+c;
// }

//Función de flecha sin parametros
let imprimePantalla = () => {
    console.log("Hello world");
}

let comprobarParImpar = suma => {
    let resultado = false;
    if(suma%2===0){
        resultado = true;
    }
    return resultado;
}

//Operador ternario expresión o condición a evaluar ? Valor si es cierto : valor si es falso
// let comprobarParImpar = suma => suma%2 === 0 ? 4 : 3; 

console.log(sumaTres(10, 20, 20));
console.log(sumaTresRegular(10, 20, 20));
console.log(comprobarParImpar(50));
imprimePantalla();