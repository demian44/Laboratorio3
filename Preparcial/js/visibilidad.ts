namespace Parcial {
	export class Visibilidad {
		public static cabecerasFiltradas: Array<string> = ['Nombre', 'Legajo', 'Materia', 'Nota', 'Editar', 'Eliminar'];

		public static colNombre: Boolean = true;
		public static colLegajo: Boolean = true;
		public static colMateria: Boolean = true;
		public static colNota: Boolean = true;
		public static colEditar: Boolean = true;
		public static colEliminar: Boolean = true;

		public static CambiarCol(columna: string):boolean {
			let retorno :boolean = false;
			switch (columna) {
				case 'Nombre':
					retorno = Visibilidad.colNombre = !Visibilidad.colNombre;
					break;
				case 'Legajo':
					retorno = Visibilidad.colLegajo =  !Visibilidad.colLegajo;
					break;
				case 'Materia':
					retorno = Visibilidad.colMateria =  !Visibilidad.colMateria ;
					break;
				case 'Nota':
					retorno = Visibilidad.colNota =  !Visibilidad.colNota;
					break;
				case 'Editar':
					retorno = Visibilidad.colEditar =  !Visibilidad.colEditar;
					break;
				case 'Eliminar':
					retorno = Visibilidad.colEliminar =  !Visibilidad.colEliminar;
					break;
				default:
					break;
			}
			return retorno;
		}
		public static VerTodas() {
			Visibilidad.colNombre = true;
			Visibilidad.colLegajo = true;
			Visibilidad.colMateria = true;
			Visibilidad.colNota = true;
			Visibilidad.colEditar = true;
			Visibilidad.colEliminar = true;
		}
	}
}
