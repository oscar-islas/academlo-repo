//Para el siguiente ejercicio deberás imprimir en consola el resultado con la operación que realiza la función suma para ello deberás transformar la siguiente función para que pueda usarse con promesas y async/await

//Validación -> rechazar la promesa cuando los números pasados como argumento a la función no sean de tipo numerico

//Promesas .catch(error)
//Async/Await try{}catch(error){}

let resultado = 0;
function suma(a, b){
    setTimeout(function(){
        resultado = a + b;
    }, 2000);
}

function sumaP(a, b){
    return new Promise((resolve, reject) => {
        if(typeof a === 'number' && typeof b === 'number'){
            setTimeout(function(){
                resultado = a + b;
                resolve(resultado);
            }, 2000);
        }else{
            reject('Estos datos no son de tipo numerico');
        }        
    })
}

let resta = new Promise((resolve, reject) => {
    
    setTimeout(function(){
        resultado = 9 - 6;
        resolve(resultado);
    }, 2000);
    
})

//Promesas
// sumaP(4, 6)
//     .then(function(resultado){
//         console.log(resultado)
//     })
//     .catch( error => { 
//         console.log(error) 
//     });

//Async/Await
// (async function(a, b){
//     try{
//         let resultado = await sumaP(a, b);
//         console.log(resultado);
//     }catch(error){
//         console.log(error);
//     }
// })("10", 20)

async function resultadoPromesa(a, b){
    try{
        let resultado = await sumaP(a, b);        
        let resultadoResta = await resta;
        console.log("El resultado de sumar los dos valores es:", resultado);
        console.log("El resultado de restar los dos valores es:", resultadoResta);
    }catch(error){
        console.log(error);
    }
}
resultadoPromesa(5, 20);