namespace Parcial {
	export class Alumno extends Parcial.Persona {
		private materia: string;
		private nota: number;
		private legajo: number;

		public GetMateria() {
			return this.materia;
		}
		public SetMateria(materia: string) {
			this.materia = materia == '' ? 'No asignada' : materia;
		}
		public GetNota() {
			return this.nota;
		}
		public GetId() {
			return super.GetId();
		}
		public SetId(id: number) {
			return super.SetId(id);
		}
		public SetNota(nota: number): boolean {
			let retorno: boolean = false;
			if (nota < -1 || nota > 10) this.nota = 0;
			else {
				retorno = true;
				this.nota = nota;
			}
			return retorno;
		}
		public GetLegajo() {
			return this.legajo;
		}
		public SetLegajo(legajo: number) {
			this.legajo = legajo < -1 && legajo > 2000 ? 0 : legajo;
		}

		public static CargarAlumnos = (array: Array<any>): Array<Alumno> => {
			let arrayAlumnos = new Array<Alumno>();

			for (let i: number = 0; i < array.length; i++) {
				//Chequeo que el objeto que reciba tenga los campos seteados.
				if (
					array[i]['nombre'] != undefined &&
					array[i]['id'] != undefined &&
					array[i]['materia'] != undefined &&
					array[i]['nota'] != undefined &&
					array[i]['legajo'] != undefined
				) {
					arrayAlumnos.push(
						new Parcial.Alumno(
							array[i]['nombre'],
							array[i]['id'],
							array[i]['materia'],
							array[i]['nota'],
							array[i]['legajo']
						)
					);
				}
			}

			return arrayAlumnos;
		};

		constructor(nombre?: string, id?: number, materia?: string, nota?: number, legajo?: number) {
			super(nombre, id);
			this.materia = materia;
			this.nota = nota;
			this.legajo = legajo;
		}
	}
}
