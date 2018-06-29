namespace Parcial {
	let maxId: number = 0;
	let auxAlumno: Parcial.Alumno;
	let arrayAlumnos: Array<Parcial.Alumno>;

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
			console.log($('#notaInput').val());
			response = false;
			Parcial.ManejadorEstilos.SetErrorClass('nota');
		} else {
			if (!auxAlumno.SetNota(Number($('#notaInput').val()))) {
				response = false;
				Parcial.ManejadorEstilos.SetErrorClass('nota');
			}
		}

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

	export let FiltrarNota = (nota: number): void => {
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

			arrayAlumnos = arrayAlumnos.filter(function(alumno: JSON) {
				return alumno['id'] != id;
			});
			console.log(arrayAlumnos);
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
		let columnaVisible: boolean = Parcial.Visibilidad.CambiarCol(columna);

		if (!columnaVisible) {
			$('#btn' + columna).removeClass('btn-outline-primary');
			$('#btn' + columna).addClass('btn-default');
		} else {
			$('#btn' + columna).addClass('btn-outline-primary');
			$('#btn' + columna).removeClass('btn-default');
		}

		Parcial.Table.HacerCabecera();
		Parcial.Table.HacerBody(arrayAlumnos);
	};

	let hacerTabla = (): void => {
		arrayAlumnos = new Array<Parcial.Alumno>();
		arrayAlumnos = Parcial.Alumno.CargarAlumnos(JSON.parse(localStorage.getItem('arrayAlumnos')));
		console.log(JSON.parse(localStorage.getItem('arrayAlumnos')));
		SetMaxId();
		Parcial.Table.HacerCabecera();
		Parcial.Table.HacerBody(arrayAlumnos);
	};

	export let FiltrarPorNota = (): void => {
		let nota: any = $('#filtro').val();
		Parcial.Table.HacerCabecera();
		let coso: string = '';

		if (nota === undefined || isNaN(nota) || nota == '' || nota[0] == ' ')
			Parcial.Table.HacerBody(arrayAlumnos);
		else {
			let fileredArray = arrayAlumnos.filter(function(alumno: Alumno) {
				return alumno['nota'] == nota;
			});
			Parcial.Table.HacerBody(fileredArray);
		}
	};

	export let Limpiar = (): void => {
		$('#legajoInput').val('');
		$('#nombreInput').val('');
		$('#materiaInput').val('');
		$('#notaInput').val('');
	};

	export let MapearPromedios = (): void => {
		let arryaEstado: any[] = arrayAlumnos.map(
			(alumno: Parcial.Alumno): {} => {
				if (alumno.GetNota() > 6) return { id: alumno.GetId(), estado: 'Aprobado' };
				else return { id: alumno.GetId(), estado: 'Desaprobado' };
			}
		);

		console.log(arryaEstado);
	};

	export let ReduceAprobados = (): void => {
		let arryaAprobado: Alumno = arrayAlumnos.reduce(
			(alumno: Alumno, alumno2: Alumno): Alumno => {
				if (alumno.GetNota() > alumno2.GetNota()) return alumno;
				else return alumno2;
			}
		);
		console.log(arryaAprobado);
	};

	export let FilterAprobados = (): void => {
		let arryaAprobado: Alumno[] = arrayAlumnos.filter((alumno: Alumno):boolean => {
			return alumno.GetNota() > 6;
		});
		console.log(arryaAprobado);
	};

	$(document).ready(
		(): void => {
			hacerTabla();
		}
	);
}
