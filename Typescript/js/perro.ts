namespace Modelo {
	export class Perro extends SerVivo implements Animal {
		private pelo: string;

		constructor(nombre: string, edad: number, pelo: string) {
			super(nombre, edad);
			this.pelo = pelo;
		}

		public HacerRuido(): void {
			console.log(this.RetornoNOmbre() + '.... Guau');
		}

		public static metodoEstatico(): string {
			console.log('Hola wea');
			return 'wea';
		}
	}
}
