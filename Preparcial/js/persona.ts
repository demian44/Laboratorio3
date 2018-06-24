namespace Parcial {
	export class Persona {
		private nombre: string;
		private id: number;

		constructor(nombre?: string, id?: number) {
			this.nombre = nombre;
			this.id = id;
		}

		public GetNombre() {
			return this.nombre;
		}
		public SetNombre(nombre: string) {
			this.nombre = nombre == '' ? 'No asignado' : nombre;
		}

		public GetId() {
			return this.id;
		}
		public SetId(id: number) {
			this.id = id < -1 ? 0 : id;
		}
	}
}
