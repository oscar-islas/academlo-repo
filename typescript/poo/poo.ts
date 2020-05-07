//Clase Abstracta
abstract class Persona{
    id: number;
    name: string;
    lastName: string;

    constructor(id: number, name: string, lastName: string){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
    }

    //nombreMétodo(tipo de dato del parametro): tipo de dato que regresará el método
    abstract profesion(string): string;
}

//Herencia de clase Persona
class Empleado extends Persona{

    puesto: string;

    constructor(id: number, name: string, lastName: string, puesto: string){
        super(id, name, lastName);
        this.puesto = puesto;
    }

    profesion(nombreProfesion: string): string{
        return `${this.name} es ${nombreProfesion} y su puesto es ${this.puesto}`;
    }

}

//Instancias de la clase Empleado
let luis:Empleado = new Empleado(1, "Luis", "Hernandez", "Desarrollador Front End");
let luisa:Empleado = new Empleado(2, "Luisa", "Alvarez", "Desarrollador Backend");


console.log(luis.profesion("Ingeniero de software"));
console.log(luisa.profesion("Ingeniero de software"));

abstract class SerVivo{
    //Con protected permitimos el acceso de sus propiedad a si mismo y a sus subclases
    protected peso: number;
    protected altura: number;
    protected clasificacion: string;

    constructor(peso: number, altura: number, clasificacion: string){
        this.peso = peso;
        this.altura = altura;
        this.clasificacion = clasificacion;
    }

    //Definición del método
    abstract comunicarse(comunicacion: string): void;

}

class Hombre extends SerVivo{
    //Con private sólo permitimos el acceso a través de los métodos de la clase
    private nombre: string;

    constructor(peso:number, altura:number, clasificacion:string, nombre: string){
        super(peso, altura, clasificacion);
        this.nombre = nombre;
    }

    //Hereda el método de la clase padre
    comunicarse(mensaje: string){
        console.log(mensaje);
    }

    setPeso(peso: number):void{
        this.peso = peso;        
    }

    getPeso():void{
        console.log(this.peso);
    }
}

class Perro extends SerVivo{
    constructor(peso:number, altura:number, clasificacion:string){
        super(peso, altura, clasificacion);
    }

    comunicarse(mensaje: string){
        console.log(mensaje);
    }
}

class Gato extends SerVivo{
    constructor(peso:number, altura:number, clasificacion:string){
        super(peso, altura, clasificacion);
    }

    comunicarse(mensaje: string){
        console.log(mensaje);
    }
}

//Instancias de la clase
let octavio:Hombre = new Hombre(60, 180, "Vertebrado", "Octavio");
let lucho:Perro = new Perro(30, 60, "Vertebrado");
let felix:Gato = new Gato(10, 25, "Verebrado");


//Polimorfismo
octavio.comunicarse("Hola ¿cómo estás?");
lucho.comunicarse("bark");
felix.comunicarse("Miau");

//Encapsulación -> sólo podemos acceder a las propiedades a través de los métodos
octavio.setPeso(70);
octavio.getPeso();

