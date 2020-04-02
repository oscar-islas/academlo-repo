//Para obtener la fecha actual en UTC/GMT
const hoy = new Date();
//Para crear un objeto Date con una fecha en especifico <año, mes, dia, hora, minutos, segundos>
const fecha = new Date(2020, 3, 1, 19, 27, 0);

//Para crear un objeto Date con una fecha en especifico 'YYYY-mm-dd hh:mm:ss'
const fechaF = new Date('2020-04-1 19:29:00');

console.log(hoy);
console.log(fecha.toLocaleString());
console.log(fechaF.toLocaleString());

//Método para obtener el año
console.log(hoy.getFullYear());
//Método para obtener el mes
console.log(hoy.getMonth());
//Método para obtener el día
console.log(hoy.getDate());
//Método para obtener la hora
console.log(hoy.getHours());
//Método para obtener los minutos
console.log(hoy.getMinutes());
//Método para obtener la fecha en formato UNIX
// console.log(Date.now());

//Para cambiar el día
fecha.setDate(fecha.getDate()+1);
//Para cambiar el mes 0 - 11
fecha.setMonth(fecha.getMonth()+1);
//Para cambiar el año
fecha.setFullYear(fecha.getFullYear()+1);
//Para cambiar los minutos
fecha.setMinutes(35);


console.log(fecha.toLocaleString());