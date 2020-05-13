abstract class Forma {
	abstract getArea(longitud: number): number;
	abstract getPerimetro(longitud: number): number;
}

class Circulo extends Forma {
	static PI:number = 3.1416;

	constructor() {
		super();
	}

	getArea(radio:number): number {
		//Pi por radio al cuadrado
		return Circulo.PI * (radio * radio)
	}

	getPerimetro(radio:number): number {
		//Pi por diametro
		return Circulo.PI * (radio * 2)
	}

}

const c = new Circulo()
console.log(`El área del Círculo es ${c.getArea(5)}`)
console.log(`El perímetro del Círculo es ${c.getPerimetro(5)}`)

class Cuadrado extends Forma {

	constructor() {
		super();
	}

	getArea(lado:number): number {
		return lado * lado
	}

	getPerimetro(lado:number): number {
		return lado * 4
	}
}


const s = new Cuadrado();
console.log(`El área del Cuadrado es ${s.getArea(5)}`);
console.log(`El perímetro del Cuadrado es ${s.getPerimetro(5)}\n`);


