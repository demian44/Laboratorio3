namespace Parcial {
	export class Visibilidad {
		public static cabecerasFiltradas: Array<string> = ['Nombre', 'Sexo', 'Apellido', 'Edad', 'Editar', 'Eliminar'];

		public static colId: Boolean = true;
		public static colNombre: Boolean = true;
		public static colSexo: Boolean = true;
		public static colApellido: Boolean = true;
		public static colEdad: Boolean = true;
		public static colEditar: Boolean = true;
		public static colEliminar: Boolean = true;

		public static CambiarCol(columna: string):boolean {
			let retorno :boolean = false;
			switch (columna) {
				case 'Nombre':
					retorno = Visibilidad.colNombre = !Visibilidad.colNombre;
					break;
				case 'Sexo':
					retorno = Visibilidad.colSexo =  !Visibilidad.colSexo;
					break;
				case 'Apellido':
					retorno = Visibilidad.colApellido =  !Visibilidad.colApellido ;
					break;
				case 'Edad':
					retorno = Visibilidad.colEdad =  !Visibilidad.colEdad;
					break;
				case 'Editar':
					retorno = Visibilidad.colEditar =  !Visibilidad.colEditar;
					break;
				case 'Eliminar':
					retorno = Visibilidad.colEliminar =  !Visibilidad.colEliminar;
					break;
				case 'Id':
					retorno = Visibilidad.colId =  !Visibilidad.colId;
					break;
				default:
					break;
			}
			return retorno;
		}
		public static VerTodas() {
			Visibilidad.colNombre = true;
			Visibilidad.colSexo = true;
			Visibilidad.colApellido = true;
			Visibilidad.colEdad = true;
			Visibilidad.colEditar = true;
			Visibilidad.colEliminar = true;
		}
	}
}
