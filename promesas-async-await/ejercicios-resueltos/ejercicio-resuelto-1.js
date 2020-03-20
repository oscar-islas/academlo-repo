let usuarios = '[{"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}},{"id":2,"name":"Ervin Howell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"Victor Plains","suite":"Suite 879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593 x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactive didactic contingency","bs":"synergize scalable supply-chains"}},{"id":3,"name":"Clementine Bauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"Douglas Extension","suite":"Suite 847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Face to face bifurcated interface","bs":"e-enable strategic applications"}},{"id":4,"name":"Patricia Lebsack","username":"Karianne","email":"Julianne.OConner@kory.org","address":{"street":"Hoeger Mall","suite":"Apt. 692","city":"South Elvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623 x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tiered zero tolerance productivity","bs":"transition cutting-edge web services"}},{"id":5,"name":"Chelsey Dietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca","address":{"street":"Skiles Walks","suite":"Suite 351","city":"Roscoeview","zipcode":"33263","geo":{"lat":"-31.8129","lng":"62.5342"}},"phone":"(254)954-1289","website":"demarco.info","company":{"name":"Keebler LLC","catchPhrase":"User-centric fault-tolerant solution","bs":"revolutionize end-to-end systems"}},{"id":6,"name":"Mrs. Dennis Schulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"Norberto Crossing","suite":"Apt. 950","city":"South Christy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478 x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronised bottom-line interface","bs":"e-enable innovative applications"}},{"id":7,"name":"Kurtis Weissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","address":{"street":"Rex Trail","suite":"Suite 280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}},"phone":"210.067.6132","website":"elvis.io","company":{"name":"Johns Group","catchPhrase":"Configurable multimedia task-force","bs":"generate enterprise e-tailers"}},{"id":8,"name":"Nicholas Runolfsdottir V","username":"Maxime_Nienow","email":"Sherwood@rosamond.me","address":{"street":"Ellsworth Summit","suite":"Suite 729","city":"Aliyaview","zipcode":"45169","geo":{"lat":"-14.3990","lng":"-120.7677"}},"phone":"586.493.6943 x140","website":"jacynthe.com","company":{"name":"Abernathy Group","catchPhrase":"Implemented secondary concept","bs":"e-enable extensible e-tailers"}},{"id":9,"name":"Glenna Reichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"Dayna Park","suite":"Suite 449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889"}},"phone":"(775)976-6794 x41206","website":"conrad.com","company":{"name":"Yost and Sons","catchPhrase":"Switchable contextually-based project","bs":"aggregate real-time technologies"}},{"id":10,"name":"Clementina DuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","address":{"street":"Kattie Turnpike","suite":"Suite 198","city":"Lebsackbury","zipcode":"31428-2261","geo":{"lat":"-38.2386","lng":"57.2232"}},"phone":"024-648-3804","website":"ambrose.net","company":{"name":"Hoeger LLC","catchPhrase":"Centralized empowering task-force","bs":"target end-to-end models"}}]';

//¿Qué son las promesas?

// Es una respuesta que esperamos a un evento que desencadenamos. Para ello haremos uso de un objeto que nos va a permitir manipular un éxito o fracaso de manera más eficiente evitando la manipulación exagerada de los callbacks. 

//Ejemplo:

//Flujo de una promesa
// - fulfilled: Se cumplio con exito
// - rejected: No se pudo cumplir a causa de un error (Depende de nosotros en que caso hacer el reject)
// - pending: Se esta procesando
// - settled: Finalizó la promesa


//¿Qué es el async await?
//Es una especificación de ecmaScript 7, su uso permite tratar a las funciones que devuelven promesas como si fueran funciones síncronas que devuelven directamente valores en vez de promesas con las palabras reservadas async y await



//Creamos una función que regrese un objeto de tipo promesa
function salirCasa(casosVirus){
    return new Promise(function(resolve, reject){
        //Creamos la lógica para el caso en el que se cumpla con exito la promesa
        if(casosVirus < 10){
            resolve('Puedes salir de casa pero toma tus precauciones');
        }else{
            //En caso de que no se pueda cumplir la promesa
            reject(new Error('Evita salir de casa para evitar contagiarte'));
        }
    });
}

//Usar la promesa
// salirCasa(32).then( recomendacion => {
//     //En caso de éxito ingresar a este método (then)
//     console.log(recomendacion); 
// }).catch( error => {
//     //En caso de fracaso ingresar a este método (catch)
//     console.log(error);
// });

//Usar con async/await funcion autoinvocada
// (async function(){
//     try{
//         let result = await salirCasa(1);
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// })();

//Creando la función y llamandola
// async function podreSalirCasa(){
//     try{
//         let result = await salirCasa(7);
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }

// podreSalirCasa();

//Transformar la siguiente función de tal forma que sea más legible a través de las promesas

//La siguiente función recibe un estado HTTP y 2 callbacks
function obtenerUsuarios(estadoHTTP, satisfactorio, error){
    let datos = usuarios;
    if(estadoHTTP === 200){
        satisfactorio(JSON.parse(datos));
    }else{
        error(new Error('Hubo un error al procesar la petición al servidor'));
    }
}



function obtenerUsuariosPromesa(estadoHTTP){
    return new Promise(function(resolve, reject){
        let datos = usuarios;
        if(estadoHTTP === 200){
            resolve(JSON.parse(datos));
        }else{
            reject(new Error('Hubo un error al procesar la petición al servidor'));
        }
    })
}

//Promesas
// obtenerUsuariosPromesa(400)
//     .then( resultado => {
//         console.log(resultado);
//     })
//     .catch( error => {
//         console.log(error.message);
//     })

//Async/Await
// (async function(estadoHTTP){
//     try{
//         let resultado = await obtenerUsuariosPromesa(estadoHTTP);
//         console.log(resultado);
//     }catch(error){
//         console.log(error.message);
//     }    
// })(200)

async function dameUsuarios(estadoHTTP){
    try{
        let respuesta = await obtenerUsuariosPromesa(estadoHTTP);
        console.log(respuesta);
    }catch(error){
        console.log(error);
    }    
}

dameUsuarios(200);


// function obtenerUsuariosP(estadoHTTP){
//     return new Promise(function(resolve, reject){
//         let datos = usuarios;
//         if(estadoHTTP === 200){
//             resolve(JSON.parse(datos));
//         }else{
//             //error
//             let error = 'Hubo un error al procesar la petición al servidor';
//             reject(error);
//         }
//     });
// }

//Promesa
// obtenerUsuariosP(200)
//     .then( respuesta => { console.log(respuesta); })
//     .catch( error => { console.log(error)} )

//Async/Await
// ( async function(){
//     try{
//         let respuesta = await obtenerUsuariosP(200);
//         console.log(respuesta);
//     }catch(error){
//         console.log(error);
//     }    
// })()

// async function dameUsuarios(){
//     try{
//         let respuesta = await obtenerUsuariosP(400);
//         console.log(respuesta);
//     }catch(error){
//         console.log(error);
//     }    
// }

// dameUsuarios();

//Llamada con callbacks
// obtenerUsuarios(300,
//     function(respuesta) {
//         console.log(respuesta);
//     },
//     function(error) {
//         console.log(error.message)
//     }
// );

//Llamar a la función y usar promesas

//Llamar a la función y usar async/await


//Transformar la siguiente función de tal forma que sea más legible a través de las promesas

// function obtenerPublicaciones(satisfactorio, error){
//     let req = new XMLHttpRequest();
//     req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

//     req.onload = function() {
//         if(req.status === 200) {
//             success(JSON.parse(req.response));
//         }else{
//             error();
//         }
//     };

//     req.send();
// }

// obtenerPublicaciones( respuesta => {
//     console.log(respuesta);
// }, error => {
//     console.log(error);
// });

//Llamar a la función con promesas

//Llamar a la función con async/await

function obtenerPublicaciones(){
    return new Promise((resolve, reject) => {
       let req = new XMLHttpRequest();
       req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

       req.onload = function() {
         if(req.status === 200) {
           resolve(JSON.parse(req.response));
         }else{
           reject(new Error('La petición falló'));
         }
       };

       req.send();
    })

}

obtenerPublicaciones().then( respuesta => {
  console.log(respuesta);
}).catch( error => console.log(error));

( async function() {
  try{
    let respuesta = await obtenerPublicaciones();
    console.log("La respuesta del servicio es: ", respuesta)  
  }catch(error){
    console.log(error);
  }
  
})()