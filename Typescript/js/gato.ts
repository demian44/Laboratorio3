namespace Modelo {
	export class Gato extends SerVivo implements Animal {
		private pelo: string;

		constructor(nombre: string, edad: number, pelo: string) {
			super(nombre, edad);
			this.pelo = pelo;
		}

		public HacerRuido(): void {
			console.log(this.RetornoNOmbre() + '.... Miau');
		}

		public static metodoEstatico(): string {
			console.log('Hola wea');
			return 'wea';
		}
	}
}
