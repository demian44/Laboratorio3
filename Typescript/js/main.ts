namespace Modelo {
	export class SerVivo {
		private nombre: string;
		public constructor(nombre: string, edad: number) {
			this.nombre = nombre;
		}

		public RetornoNOmbre(): string {
			return this.nombre;
		}
	}

	// class Gato implements Animal {
	// 	private nombre: string;

	// 	constructor(nombre: string) {
	// 		this.nombre = nombre;
	// 	}

	// 	HacerRuido(): void {
	// 		console.log('Miau');
	// 	}

	// 	public static metodoEstatico(): string {
	// 		console.log('Hola wea');
	// 		return 'wea';
	// 	}
	// }
}
