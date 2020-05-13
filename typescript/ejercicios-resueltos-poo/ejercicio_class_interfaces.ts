interface IEntregable{
    entregar():void;
    devolver():void;
    isEntregado():boolean;
}

class Serie implements IEntregable {
    protected titulo:string;
    protected temporadas:number;
    protected prestado:boolean=false;
    protected genero:string;
    protected creador:string;

    constructor(titulo:string, temporadas:number, genero:string, creador:string){
        this.titulo=titulo;
        this.temporadas = temporadas;
        this.genero = genero;
        this.creador = creador;
    }

    getTitulo():string{
        return this.titulo;
    }

    setTitulo(titulo:string):void{
        this.titulo = titulo;
    }

    getTemporadas():number{
        return this.temporadas;
    }

    setTemporadas(temporadas:number):void{
        this.temporadas = temporadas;
    }

    getGenero():string{
        return this.genero;
    }

    setGenero(genero:string):void{
        this.genero = genero;
    }

    getCreador():string{    
        return this.creador;
    }

    setCreador(creador:string):void{
        this.creador = creador;
    }

    entregar():void{
        this.prestado=true;
    };

    devolver():void{
        this.prestado=false;
    };
     
    isEntregado():boolean{
        return this.prestado;
    };

    infoSerie(){
        return `titulo: ${this.titulo} temporadas: ${this.temporadas} genero: ${this.genero} creador: ${this.creador}`;
    }
}


class Videojuego implements IEntregable{
    protected titulo:string;
    protected horas:number;
    protected prestado:boolean=false;
    protected genero:string;
    protected compania:string;


    constructor(titulo:string, horas:number, genero:string, compania:string){
        this.titulo=titulo;
        this.horas=horas;
        this.genero=genero;
        this.compania=compania;
    }

    getTitulo():string{
        return this.titulo;
    }

    setTitulo(titulo:string):void{
        this.titulo = titulo;
    }

    getHoras():number{
        return this.horas;
    }

    setHoras(horas:number):void{
        this.horas=horas;
    }

    getGenero():string{
        return this.genero;
    }

    setGenero(genero:string):void{
        this.genero = genero;
    }

    getCompania():string{
        return this.compania;
    }

    setCompania(compania:string):void{
        this.compania = compania;
    }

    entregar():void{
        this.prestado = true;
    };

    devolver():void{
        this.prestado = false;
    };
     
    isEntregado():boolean{
        return this.prestado;
    };

    infoVideojuego(){
        return `titulo: ${this.titulo} horas: ${this.horas} genero: ${this.genero} compañía: ${this.compania}`;
    }

}


let juego1 = new Videojuego("The Legend of Zelda", 100, "Aventura", "Nintendo");
let serie1 = new Serie("Breaking Bad", 5, "Drama", "Vince Gilligan");

console.log(juego1.infoVideojuego());
juego1.entregar();
console.log(serie1.infoSerie());
console.log(juego1.isEntregado());
juego1.devolver();
console.log(juego1.isEntregado());
console.log(serie1.infoSerie());