class Cuenta{
    private titular: string;
    private cantidad: number;

    constructor(titular:string, cantidad: number){
        this.titular = titular;
        this.cantidad = cantidad;
    }

    getTitular():string{
        return this.titular;
    }

    setTitular(titular: string):void{
        this.titular = titular;
    }

    getCantidad():number{
        return this.cantidad;
    }

    setCantidad(cantidad:number):void{
        this.cantidad = cantidad;
    }

    ingresar(cantidad:number):void{
        this.cantidad += cantidad;
    }

    retirar(cantidad:number):void{
        if(cantidad <= this.cantidad){
            this.cantidad -= cantidad;
        }else{
            console.log(`No tienes fondos suficientes`);
        }
    }

    informacionCuenta():string{
        return `El titular ${this.titular} tiene en su cuenta $${this.cantidad} pesos`;
    }
}

let cuentaMario = new Cuenta("Mario Bross", 400);
let cuentaPaulina = new Cuenta("Paulina Sanchez", 500);

cuentaMario.retirar(400);
cuentaMario.ingresar(1400);
console.log(cuentaMario.informacionCuenta());
console.log(cuentaMario.getTitular());

class Password{
    private longitud: number;
    private contrasena: string;

    constructor(longitud:number = 8, contrasena?: string){
        this.longitud = longitud;
        this.contrasena = contrasena;
    }

    esFuerte():boolean{
        let tieneNumero:boolean = false;
        let tieneLetraMayuscula:boolean = false;
        for (const caracter of [...this.contrasena]) {
            if(Number.isNaN(Number(caracter)) === false ){
                tieneNumero = true;
            }

            if(caracter === caracter.toUpperCase() && Number.isNaN(Number(caracter))){
                console.log(caracter);
                tieneLetraMayuscula = true;
            }            
        }
        return (tieneNumero && tieneLetraMayuscula) ? true : false;
    }

    nuevaContrasena():void{
        let newPassword:string = "";
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(let i: number = 0; i < this.longitud; i++){
            newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        this.contrasena = newPassword;
    }

    setLongitud(longitud: number):void{
        this.longitud = longitud;
    }

    getLongitud():number{
        return this.longitud;
    }

    getContrasena():string{
        return this.contrasena;
    }
}

let contrasena1:Password = new Password(9, "Holamundo2");
console.log(contrasena1.esFuerte());
contrasena1.nuevaContrasena();
console.log(contrasena1.getContrasena());