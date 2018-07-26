namespace Parcial {
	export class Persona {
		private nombre: string;
		private apellido: string;
		private id: number;

		constructor(nombre?: string, id?: number,apellido?:string) {
			this.nombre = nombre;
			this.apellido = apellido;
			this.id = id;
		}

		public GetNombre() {
			return this.nombre;
		}
		public SetNombre(nombre: string) {
			this.nombre = nombre == '' ? 'No asignado' : nombre;
		}
		public GetApellido() {
			return this.apellido;
		}
		
		public SetApellido(apellido: string) {
			this.apellido = apellido == '' ? 'No asignado' : apellido;
		}

		public GetId() {
			return this.id;
		}
		public SetId(id: number) {
			this.id = id < -1 ? 0 : id;
		}
	}
}
