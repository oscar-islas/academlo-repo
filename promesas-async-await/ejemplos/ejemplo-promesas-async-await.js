function TercerNumero(suma, numero3 = 6){
    return new Promise(function(resolve, reject){
        if(suma < 20){
            resolve(suma + numero3)
        }else{
            let error = new Error('La sumatoria es mayor a 20');
            reject(error);
        }
    })
}

function sumaDosNumeros(a, b, c){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            let suma = a + b;
            resolve(TercerNumero(suma, c));
        }else{
            let mensajeError = new Error('Los valores no son numericos');
            reject(mensajeError);
        }
    });
}



//Promesa -> encadenamiento
sumaDosNumeros(1, 5, 8)
    .then( resultado => { return resultado })
    .then( resultadoTercerNumero => { console.log(resultadoTercerNumero) })
    .catch( error => { console.log(error.message)});

//Async/Await
// async function obtenSuma(numero1, numero2){
//     try{
//         let resultado = await sumaDosNumeros(numero1, numero2);
//         console.log(resultado);
//     }catch(error){
//         console.log(error.message);
//     }
// }
// obtenSuma(5, 9);


// (async function(numero1, numero2){
//     try{
//         let resultado = await sumaDosNumeros(numero1, numero2);
//         console.log(resultado);
//     }catch(error){
//         console.log(error.message);
//     }
// })(6,10);