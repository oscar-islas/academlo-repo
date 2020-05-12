export {};

//Clase
class Computadora{
    sistemaOperativo: string;
    marca: string;
    procesador: string;
    memoriaRam: number;

    constructor(sistemaOperativo: string, marca: string, procesador: string, memoriaRam: number){
        this.sistemaOperativo = sistemaOperativo;
        this.marca = marca;
        this.procesador = procesador;
        this.memoriaRam = memoriaRam;
    }
}

//Herencia
class Laptop extends Computadora{
    private resolucion: string;
    private bateria: number;

    constructor(resolucion: string, bateria: number, sistemaOperativo: string, marca: string, procesador: string, memoriaRam: number){
        super(sistemaOperativo, marca, procesador, memoriaRam);
        this.resolucion = resolucion;
        this.bateria = bateria;
    }

    getResolucion():string{
        return this.resolucion;
    }

    setResolucion(resolucion: string):void{
        this.resolucion = resolucion;
    }
}


//Objeto
let dell = new Laptop("1366x768", 4000,"Windows 10", "Dell", "Intel Core i7", 2048);
dell.setResolucion("1920x1080");
console.log(dell.getResolucion());
console.log(dell.memoriaRam);

let objPersona = {
    nombre: "",
    posX: 0,
    posY: 0,
    setPosition: () => console.log("hello world")
}

abstract class Personaje{
    nombre: string;
    posX: number;
    posY: number;
    abstract setPosition(x: number, y:number):void;
    setName(nombre: string):void{
        console.log("Hola mi nombre es",nombre);
    };
    

    constructor(nombre:string, posX:number, posY:number){
        this.nombre = nombre;
        this.posX = posX;
        this.posY = posY;
    }
}

interface IMovimiento{
    moverIzquierda():void;
    moverDerecha():void;
    saltar():void;
}

interface IHablar{
    habla(): void;
}

interface herir{
    morir(): void;
    meGolpea(): void;
}

class Mario extends Personaje implements IMovimiento, IHablar, herir{
    color: string;
    constructor(nombre: string, color:string){
        super(nombre, 0, 0);
        this.color = color;
    }

    setPosition(x:number, y:number){
        this.posX = x;
        this.posY = y;        
    }

    getPosition(): number[]{
        return [this.posX, this.posY];
    }

    setName(nombre: string):void{
        if(nombre === "Luigi"){
            super.setName(nombre);
            this.nombre = nombre;
        }else{
            console.log("Pon otro nombre");
        }
    }

    saltar(){
        this.posY = 5;
    }

    moverDerecha(){
        this.posX = this.posX + 1;
    }

    moverIzquierda(){
        this.posX = this.posX - 1;
    }

    habla():void{
        console.log("Hola");
    }

    morir(){

    }

    meGolpea(){

    }

    static meMuero():void{
        console.log("Game Over");
    }
}


class Princesa extends Personaje implements IHablar{
    color: string;
    constructor(nombre: string, color:string){
        super(nombre, 0, 0);
        this.color = color;
    }

    setPosition(x:number, y:number){
        this.posX = x;
        this.posY = y;        
    }

    getPosition(): number[]{
        return [this.posX, this.posY];
    }

    setName(nombre: string){
        super.setName(nombre);
        this.nombre = nombre;
    }

    saltar(){
        this.posY = 5;
    }

    moverDerecha(){
        this.posX = this.posX + 1;
    }

    moverIzquierda(){
        this.posX = this.posX - 1;
    }

    habla():void{
        console.log("Hola");
    }
}

let marioBros = new Mario("Gustavo", "Rojo");

console.log(marioBros.getPosition());
marioBros.saltar();
console.log(marioBros.getPosition());
marioBros.moverDerecha();
marioBros.moverDerecha();
marioBros.moverDerecha();
marioBros.moverDerecha();
marioBros.moverDerecha();
marioBros.moverDerecha();
marioBros.moverDerecha();
console.log(marioBros.getPosition());
marioBros.setName("Luigi");

Mario.meMuero();

//Propiedades estaticas (static)
//Son aquellos miembros de la clase que son visibles en la clase en lugar de en las instancias.