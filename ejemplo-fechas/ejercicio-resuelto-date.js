// Referencia para el constructor Date y sus métodos 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date

/* 1. Escribe una funcion regular para obtener la fecha actual
* Tienes que pasar un separador como argumento
* Ejemplo:
*  -> console.log(obtenerFecha('-'))
*  -> console.log(obtenerFecha('/'))
* Salida:
*  -> 01-04-2020
*  -> 01/04/2020 
*/

function obtenerFecha(separador){
    let fechaObj = new Date();
    let fecha = {
        dia: fechaObj.getDate() < 10 ? "0" + fechaObj.getDate() : fechaObj.getDate(),
        mes: fechaObj.getMonth() + 1 < 10 ? "0" + (fechaObj.getMonth() + 1) : fechaObj.getMonth() + 1,
        year: fechaObj.getFullYear()
    };    
    let {dia, mes, year} = fecha;
    return `${dia}${separador}${mes}${separador}${year}`;    
}

console.log(obtenerFecha('-'));
console.log(obtenerFecha('/'));

/*
* 2. Escribe una función de flecha para obtener el nombre del mes de una fecha particular
* Ejemplo:
* -> console.log(obtenerMes(new Date(2020, 11, 2)));
* -> console.log(obtenerMes(new Date(2020, 6, 2)));
* Salida: 
* -> Diciembre
* -> Julio
*/

const obtenerMes = (fecha) => {
    let meses =  ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];    
    return meses[fecha.getMonth()];
} 

const obtenerMesSwitch = (fecha) => {
    let mes = "";
    switch (fecha.getMonth()){
        case 0:
            mes = "Enero"
            break;
        case 1: 
            mes = "Febrero"
            break;
        case 2:
            mes = "Marzo"
            break;
        case 3:
            mes = "Abril"
            break;
        default: 
            mes = "Diciembre"
            break;
    }
    //Aquí me faltan más casos
    return mes;
} 
console.log(obtenerMesSwitch(new Date(2020, 2, 2)));
console.log(obtenerMesSwitch(new Date(2020, 3, 2)));

/*
* 3. Escribe una función anonima para saber si una fecha es mayor, igual o menor que otra
* fecha
* Ejemplo: 
* -> console.log(compararFechas(new Date(2020, 11, 2), new Date(2020, 11, 7)))
* Salida:
* la fecha 2 de Diciembre de 2020 es menor que 7 de Diciembre de 2020
*/

const compararFechas = (fecha1, fecha2) => {
    if(fecha1 < fecha2){
        return `La fecha ${fecha1.getDate()} de ${obtenerMes(fecha1)} de ${fecha1.getFullYear()} es menor que ${fecha2.getDate()} de ${obtenerMes(fecha2)} de ${fecha2.getFullYear()}`;
    }else if(fecha1 > fecha2 ){
        return `La fecha ${fecha1.getDate()} de ${obtenerMes(fecha1)} de ${fecha1.getFullYear()} es mayor que ${fecha2.getDate()} de ${obtenerMes(fecha2)} de ${fecha2.getFullYear()}`;
    }
    return `La fecha ${fecha1.getDate()} de ${obtenerMes(fecha1)} de ${fecha1.getFullYear()} es igual que ${fecha2.getDate()} de ${obtenerMes(fecha2)} de ${fecha2.getFullYear()}`;
} 

console.log(compararFechas(new Date(2020, 11, 2), new Date(2020, 11, 2)));