namespace Parcial {
	export class Persona {
		private nombre: String;
		private id: number;

		constructor(nombre?: String, id?: number) {
			this.nombre = nombre;
			this.id = id;
		}

		public GetNombre() {
			return this.nombre;
		}
		public SetNombre(nombre: String) {
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
