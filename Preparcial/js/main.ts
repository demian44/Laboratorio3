namespace Parcial {
	let maxId: number = 0;
	let cabeceras: string[] = ['Nombre', 'Legajo', 'Materia', 'Nota', 'Editar', 'Eliminar'];
	let auxAlumno: Parcial.Alumno;
	let arrayAlumnos: Array<Parcial.Alumno>;
	let Validar = (): boolean => {
		let response: boolean = true;
		auxAlumno = new Alumno();

		console.log($('#legajo').val());
		if ($('#legajo').val() == undefined || $('#legajo').val() == '') {
			response = false;
			Parcial.ManejadorEstilos.SetErrorClass('legajo');
		} else auxAlumno.SetLegajo(Number($('#legajo').val()));

		if ($('#nombre').val() == undefined || $('#nombre').val() == '') {
			response = false;
			Parcial.ManejadorEstilos.SetErrorClass('nombre');
		} else auxAlumno.SetNombre(String($('#nombre').val()));

		if ($('#materia').val() == undefined || $('#materia').val() == '') {
			response = false;
			Parcial.ManejadorEstilos.SetErrorClass('materia');
		} else auxAlumno.SetMateria(String($('#materia').val()));

		if ($('#nota').val() == undefined || $('#nota').val() == '') {
			response = false;
			Parcial.ManejadorEstilos.SetErrorClass('nota');
		} else auxAlumno.SetNota(Number($('#nota').val()));

		return response;
	};

	export let Agregar = (): void => {
		if (Validar()) {
			maxId++;
			auxAlumno.SetId(maxId);
			arrayAlumnos.push(auxAlumno);
			localStorage.setItem('arrayAlumnos', JSON.stringify(arrayAlumnos));
			Parcial.Table.HacerBody(arrayAlumnos);
		}
	};

	export let SetMaxId = (): void => {
		if (arrayAlumnos != undefined && arrayAlumnos.length > 0) {
			maxId = arrayAlumnos
				.map((alumno: Parcial.Alumno) => alumno.GetId())
				.reduce((idA, idB) => (idA > idB ? idA : idB));
		}
	};

	$(document).ready(
		(): void => {
			arrayAlumnos = new Array<Parcial.Alumno>();

			arrayAlumnos = Parcial.Alumno.CargarAlumnos(JSON.parse(localStorage.getItem('arrayAlumnos')));
			SetMaxId();
			Parcial.Table.HacerCabecera(cabeceras);
			Parcial.Table.HacerBody(arrayAlumnos);
			
		}
	);
}
