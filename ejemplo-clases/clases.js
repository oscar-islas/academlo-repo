//Clase (Molde del objeto)
class Automovil{
    //Propiedad (caracteristicas del objeto)
    constructor(color = "azul", modelo = "2020", puertas){
        //El valor de this hace referencia al objeto que se está creando y por lo tanto
        //es una instancia de la clase. Cualquier cambio que hagamos sobre el objeto this 
        this.color = color;
        this.modelo = modelo;
        this.puertas = 4;
    }
    

    //Métodos (funciones o acciones del objeto )
    setColor(color){
        this.color = color;
    }

    encender(estado){
        if(estado){
            console.log("Has encendido el automovil");
        }else{
            console.log("Has apagado el automovil");
        }
    }

    getColor(){
        return this.color;
    }
}

let automovilToyota = new Automovil("rojo", "2020", 5);
automovilToyota.puertas = 10;
// console.log(automovilToyota);

let automovilNissan = new Automovil();
automovilNissan.setColor("negro");
automovilNissan.encender(false);
// console.log(automovilNissan);

class Operaciones{
    suma(a, b){
        return a+b;
    }

    //La diferencia entre un método publico y un estatico es que el método estatico se puede
    //utilizar sin necesidad de instanciar/crear un objeto de la clase
    static resta(a, b){
        return a-b;
    }

    static multiplicacion(a, b){
        return a*b;
    }
}

class Camioneta extends Automovil{
    constructor(llantas, motor){
        super();
        this.llantas = llantas;
        this.motor = motor;
    }

    encenderRadio(estado){
        if(estado){
            console.log("Estás sintonizando 94.7 fm");
        }else{
            console.log("Has apagado el radio");
        }
    }
}

let camioneta = new Camioneta(5, '4 cilindros');
camioneta.color = "negra";
camioneta.motor = {
    cilindros: 4,
    caballosFuerza: 500
}
camioneta.encenderRadio(true);
console.log(camioneta.motor.caballosFuerza);

//JSON JavaScript Object Notation
//Objeto literal de javascript
//Clave:Valor
let automovilJeep = {
    modelo: 2020,
    caballosFuerza: 600,
    color: "azul",
    encenderAuto: (estado) => {
        if(estado){
            console.log("Has encendido el automovil");
        }else{
            console.log("Has apagado el automovil");
        }
    }
}

automovilJeep.encenderAuto(true);