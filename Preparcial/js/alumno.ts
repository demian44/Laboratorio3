namespace Parcial {
	export class Alumno extends Parcial.Persona {
		private materia: string;
		private nota: number;
		private legajo: number;

		constructor(nombre: string, id: number, materia: string, nota: number, legajo: number) {
			super(nombre, id);
			this.materia = nombre;
			this.nota = nota;
			this.legajo = legajo;
		}
	}
}
