namespace Parcial {
	let maxId: number = 0;
	let cabeceras: string[] = ['Nombre', 'Legajo', 'Materia', 'Nota', 'Editar', 'Eliminar'];
	let auxAlumno: Parcial.Alumno;
	let arrayAlumnos: Array<Parcial.Alumno>;
	var cabecerasFiltradas = ['5', '12', '8', '130', '44'];

	let Validar = (): boolean => {
		let response: boolean = true;
		auxAlumno = new Alumno();

		if ($('#legajoInput').val() == undefined || $('#legajoInput').val() == '') {
			response = false;
			Parcial.ManejadorEstilos.SetErrorClass('legajo');
		} else auxAlumno.SetLegajo(Number($('#legajoInput').val()));

		if ($('#nombreInput').val() == undefined || $('#nombreInput').val() == '') {
			response = false;
			Parcial.ManejadorEstilos.SetErrorClass('nombre');
		} else auxAlumno.SetNombre(String($('#nombreInput').val()));

		if ($('#materiaInput').val() == undefined || $('#materiaInput').val() == '') {
			response = false;
			Parcial.ManejadorEstilos.SetErrorClass('materia');
		} else auxAlumno.SetMateria(String($('#materiaInput').val()));

		if ($('#notaInput').val() == undefined || $('#notaInput').val() == '') {
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

	export let Eliminar = (id: Number): void => {
		if (1) {
			let alumnos: string | null = localStorage.getItem('arrayAlumnos');

			console.log('alumnos string: \n', alumnos[0]);

			// let alumnosJson: JSON[] = alumnos == null ? Array : JSON.parse(alumnos);
			let arrayAlumnos: JSON[] = alumnos == null ? Array : JSON.parse(alumnos);

			console.log('alumnos json: \n');

			console.log('ID: ', id, '\n');
			let miAlumno: Parcial.Alumno = new Alumno('Pepe', 12, 'Mate', 8, 23);

			arrayAlumnos = arrayAlumnos.filter(function(alumno: JSON) {
				return alumno['id'] != id;
			});

			localStorage.setItem('arrayAlumnos', JSON.stringify(arrayAlumnos));
			hacerTabla();
		}
	};

	export let SetMaxId = (): void => {
		if (arrayAlumnos != undefined && arrayAlumnos.length > 0) {
			maxId = arrayAlumnos
				.map((alumno: Parcial.Alumno) => alumno.GetId())
				.reduce((idA, idB) => (idA > idB ? idA : idB));
		}
	};

	export let VerOcultarColumna = (columna: string): void => {
		let columnaVisible: boolean = false;
		cabecerasFiltradas.forEach(element => {
			if (element == columna) {
				columnaVisible = true;				
			}
		});

		if (columnaVisible) console.log('Existe cabecera');
		else console.log('No existe.');

		// 	cabecerasFiltradas = cabeceras.filter(cabecera => {
		// 		cabecera != columna;
		// 	});

		// Parcial.Table.HacerCabecera(cabecerasFiltradas);
		// Parcial.Table.HacerBody(arrayAlumnos,cabecerasFiltradas);
		//asdñaodjasdojasd
	};
	let hacerTabla = (): void => {
		arrayAlumnos = new Array<Parcial.Alumno>();
		cabecerasFiltradas = cabeceras;
		arrayAlumnos = Parcial.Alumno.CargarAlumnos(JSON.parse(localStorage.getItem('arrayAlumnos')));
		SetMaxId();
		Parcial.Table.HacerCabecera(cabeceras);
		Parcial.Table.HacerBody(arrayAlumnos);
	};

	$(document).ready(
		(): void => {
			hacerTabla();
		}
	);
}
