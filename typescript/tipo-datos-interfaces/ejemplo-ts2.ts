export {};

let numero1: number = 30;
let miNombre: string = "Oscar";
numero1 = 34;

//Interface 
interface User {
    firstName: string,
    lastName?: string
}

//Objetos
let user: User = {
    firstName: "Oscar",
    lastName: "Islas"
};

let juan: User = {
    firstName: "Juan"
}

//Arreglos
let arreglo: number[] = [3, 4, 2, 1];
let arregloObjetos: object[] = [{...user}];
let arregloDatos: any[] = [3, 'Hola Mundo', {}];
let matrix: number[][] = [];
matrix = [[0],[1]];
console.log(matrix);

//Tuple
let arregloNumStr: [number, string];
arregloNumStr = [2, 'Hola Mundo'];
console.log(arregloNumStr);

//Enum
enum SistemaSolar { sol = 1, venus = 3, mercurio = 2, tierra = 4, marte }

// {
//     '1': 'sol',
//     '2': 'mercurio',
//     '3': 'venus',
//     '4': 'tierra',
//     '5': 'marte',
//     sol: 1,
//     venus: 3,
//     mercurio: 2,
//     tierra: 4,
//     marte: 5
// }

let tierra = SistemaSolar.tierra;

console.log(tierra);

interface IAnimal {
    weight: number;
    color: string;
    age: number;
    sound: (string) => string 
}

class Animal implements IAnimal{
    weight: number;
    color: string;
    age: number;

    constructor(weight: number, color: string, age: number){
        this.weight = weight;
        this.color = color;
        this.age = age;
    }

    sound(sonido: string):string{
        return sonido;
    }
}

let Dog = new Animal(40, "Gris", 1);

console.log(Dog.sound("Bark"));