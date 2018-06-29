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
		public static HacerCabecera() {
			let head: string = '<tr>';
			if (Parcial.Visibilidad.colNombre) head += "<th style='text-align:center'scope='col'>Nombre</th>";
			if (Parcial.Visibilidad.colLegajo) head += "<th style='text-align:center'scope='col'>Legajo</th>";
			if (Parcial.Visibilidad.colMateria) head += "<th style='text-align:center'scope='col'>Materia</th>";
			if (Parcial.Visibilidad.colNota) head += "<th style='text-align:center'scope='col'>Nota</th>";
			if (Parcial.Visibilidad.colEditar) head += "<th style='text-align:center'scope='col'>Editar</th>";
			if (Parcial.Visibilidad.colEliminar) head += "<th style='text-align:center'scope='col'>Eliminar</th>";
			head += '</tr>';
			$('#headTable').html(head);
		}

		/**
		 * HacerBody
		 */
		public static HacerBody(arrayAlumnos: Array<Parcial.Alumno>): boolean {
			let result: boolean = false;
			let body = '';

			arrayAlumnos.forEach(alumno => {
				body += `<tr>`;
				if (Parcial.Visibilidad.colNombre) body += `<td style="text-align:center" scope="row">${alumno.GetNombre()}</td>`;
				if (Parcial.Visibilidad.colLegajo) body += `<td style="text-align:center">${alumno.GetLegajo()}</td>`;
				if (Parcial.Visibilidad.colMateria) body += `<td style="text-align:center">${alumno.GetMateria()}</td>`;
				if (Parcial.Visibilidad.colNota) body += `<td style="text-align:center">${alumno.GetNota()}</td>`;
				if (Parcial.Visibilidad.colEditar)
					body += `<td style="text-align:center"><button type="button"  class="btn btn btn-link">Edit</button></td>`;
				if (Parcial.Visibilidad.colEliminar) {
					body += `<td style="text-align:center"><button  type="button" onclick="Parcial.Eliminar(
					${alumno.GetId()}
					)" class="btn btn btn-link" style="color:red">Delete</button></td>`;
				}
			});

			if (arrayAlumnos.length > 0) {
				body += '</tr>';
				result = true;
			}

			$('#bodyTable').html(body);

			return result;
		}

		static Columnasy(arrayAlumnos: Array<Parcial.Alumno>, cabecerasFiltradas: Array<string>): boolean {
			let result: boolean = false;
			let body = '';

			arrayAlumnos.forEach(alumno => {
				body +=
					`<tr>` +
					`<th scope="row">${alumno.GetNombre()}</th>` +
					`<td >${alumno.GetLegajo()}</td>` +
					`<td style="text-align:center">${alumno.GetMateria()}</td>` +
					`<td style="text-align:center">${alumno.GetNota()}</td>` +
					`<td style="text-align:center"><button type="button"  class="btn btn-outline-default">Editar</button></td>` +
					`<td style="text-align:center"><button type="button" onclick="Parcial.Eliminar(
					${alumno.GetId()}
					)" class="btn btn-outline-danger">Eliminar</button></td>`;
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
