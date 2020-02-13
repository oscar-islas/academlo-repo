let datoIngresado = "";
while(datoIngresado !== "CERRAR"){
    datoIngresado = prompt("Ingresa tu numero");
    if(datoIngresado%2 === 0){
        console.log("Este numero es par");
    }else if(datoIngresado === "CERRAR"){
        break;
    }else if(datoIngresado%2 !== 0){
        console.log("Es un numero impar");
    }
}
