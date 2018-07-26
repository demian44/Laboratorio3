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
			if (Parcial.Visibilidad.colId) head += "<th style='text-align:center'scope='col'>Id</th>";
			if (Parcial.Visibilidad.colNombre) head += "<th style='text-align:center'scope='col'>Nombre</th>";
			if (Parcial.Visibilidad.colApellido) head += "<th style='text-align:center'scope='col'>Apellido</th>";
			if (Parcial.Visibilidad.colSexo) head += "<th style='text-align:center'scope='col'>Sexo</th>";
			if (Parcial.Visibilidad.colEdad) head += "<th style='text-align:center'scope='col'>Edad</th>";			
			head += '</tr>';
			$('#headTable').html(head);
		}

		/**
		 * HacerBody
		 */
		public static HacerBody(arrayClientes: Array<Parcial.Cliente>): boolean {
			let result: boolean = false;
			let body = '';

			arrayClientes.forEach(cliente => {
				body += `<tr onclick="Parcial.Logic.HacerAlgo(${cliente.GetId()})">`;
				if (Parcial.Visibilidad.colId) body += `<td style="text-align:center" scope="row">${cliente.GetId()}</td>`;
				if (Parcial.Visibilidad.colNombre) body += `<td style="text-align:center" scope="row">${cliente.GetNombre()}</td>`;
				if (Parcial.Visibilidad.colApellido) body += `<td style="text-align:center">${cliente.GetApellido()}</td>`;
				if (Parcial.Visibilidad.colSexo) body += `<td style="text-align:center">${cliente.GetSexo()}</td>`;
				if (Parcial.Visibilidad.colEdad) body += `<td style="text-align:center">${cliente.GetEdad()}</td>`;				
			});

			if (arrayClientes.length > 0) {
				body += '</tr>';
				result = true;
			}

			$('#bodyTable').html(body);

			return result;
		}

		// static Columnasy(arrayClientes: Array<Parcial.Cliente>, cabecerasFiltradas: Array<string>): boolean {
		// 	let result: boolean = false;
		// 	let body = '';

		// 	arrayClientes.forEach(cliente => {
		// 		body +=
		// 			`<tr>` +
		// 			`<th scope="row">${cliente.GetNombre()}</th>` +
		// 			`<td >${cliente.GetSexo()}</td>` +
		// 			`<td style="text-align:center">${cliente.GetApellido()}</td>` +
		// 			`<td style="text-align:center">${cliente.GetEdad()}</td>` +
		// 			`<td style="text-align:center"><button type="button"  class="btn btn-outline-default">Editar</button></td>` +
		// 			`<td style="text-align:center"><button type="button" onclick="Parcial.Eliminar(
		// 			${cliente.GetId()}
		// 			)" class="btn btn-outline-danger">Eliminar</button></td>`;
		// 	});

		// 	if (arrayClientes.length > 0) {
		// 		body += '</tr>';
		// 		result = true;
		// 	}

		// 	$('#bodyTable').html(body);

		// 	return result;
		// }
	}
}
