namespace Parcial {
	export class Table {
		static cuerpo: string =
			'MarkOtto     </td>' +
			"<td>@mdo</td></tr><tr><th scope='row'>2</th><td>Jacob</td><td>Thornton</td>" +
			"<td>@fat</td></tr><tr><th scope='row'>3</th><td>Larry</td><td>the Bird</td>" +
			'<td>@twitter</td>';

		/**
		 * HacerCabecera
		 */
		public static HacerCabecera(cabeceras: Array<string>) {
			let head: string = '<tr>';
			cabeceras.forEach(cabecera => {
				head += "<th scope='col'>" + cabecera + '</th>';
			});
			head += '</tr>';
			$('#headTable').html(head);
		}

		/**
		 * HacerBody
		 */
		public static HacerBody(arrayAlumnos: Array<Parcial.Alumno>){//,cabecerasFiltradas:Array<string>): boolean {
			let result: boolean = false;
			let body = '';

			arrayAlumnos.forEach(alumno => {
				body +=
					'<tr>' +
					"<th scope='row'>" +
					alumno.GetNombre() +
					'</th>' +
					'<td>' +
					alumno.GetLegajo() +
					'</td>' +
					'<td>' +
					alumno.GetMateria() +
					'</td>' +
					'<td>' +
					alumno.GetNota() +
					'</td>' +
					'<td><button type="button"  class="btn btn-outline-default">Editar</button></td>' +
					'<td><button type="button" onclick="Parcial.Eliminar(' +
					alumno.GetId() +
					')" class="btn btn-outline-danger">Eliminar</button></td>';
			});

			if (arrayAlumnos.length > 0) {
				body += '</tr>';
				result = true;
			}

			$('#bodyTable').html(body);

			return result;
		}
	}
}
