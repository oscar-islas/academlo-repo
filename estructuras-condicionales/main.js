let condicion = false;
let num1 = 6;
let num2 = 6;
let num3 = 7;
let num4 = 3;
let cadena1 = "Academlo";
let cadena2 = "Academlo";

if(condicion){
    //Instrucciones
    console.log("Esta condición es verdadera");
}

if(condicion){
    //Instrucciones
    console.log("Esta condición es verdadera");
}else{
    //Instrucciones
    console.log("Esta condición es falsa");
}

//&& AND 
//Si el num1 es mayor que el num2 y el num3 es menor al num4 se va a cumplir la condición
if(num1 > num2 && num3 < num4){
    console.log(num1, "es mayor que", num2 );
}else{
    console.log(num1, "es menor que", num2 );
}

//Si el num1 es igual que el num2 y el num3 es igual al num4 se va a cumplir la condición
if(num1 === num2 && num3 === num4){
    console.log(num1, "es igual que", num2 );
}else{
    console.log(num1, "es diferente que", num2 );
}

if(num1 != num2){
    console.log(num1, "es diferente que", num2 );
}else{
    console.log(num1, "es igual que", num2 );
}

//Para ver el tipo de dato usamos typeof
// || OR
if(num1 != num2 || num3 === num4){
    console.log("Una de las dos o las dos condiciones se cumplieron");
}else{
    console.log("Ninguna de las dos condiciones se cumplieron");
}

if(3 < 5){
    //Instrucciones
    console.log("Listo se cumplió la primer condición.");
    if(50 > 49){
        console.log("Se cumplió la segunda condición.");
    }
}else{
    console.log("Esta condición no se cumplió");
}

if("1" == 1){
    console.log("Son de diferente tipo pero tienen el mismo valor");
}

if("1" === 1){
    console.log("Son de diferente tipo pero tienen el mismo valor");
}else{
    console.log("Son de diferente tipo");
}

if("Academlo" == cadena1){
    console.log("Los Strings iguales");
    let num1 = 6;
    console.log(num1);
}else{
    console.log("Los Strings son diferentes");
}

console.log(num1);