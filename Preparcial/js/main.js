var Parcial;
(function (Parcial) {
    var maxId = 0;
    var auxAlumno;
    var arrayAlumnos;
    var Validar = function () {
        var response = true;
        auxAlumno = new Parcial.Alumno();
        if ($('#legajoInput').val() == undefined || $('#legajoInput').val() == '') {
            response = false;
            Parcial.ManejadorEstilos.SetErrorClass('legajo');
        }
        else
            auxAlumno.SetLegajo(Number($('#legajoInput').val()));
        if ($('#nombreInput').val() == undefined || $('#nombreInput').val() == '') {
            response = false;
            Parcial.ManejadorEstilos.SetErrorClass('nombre');
        }
        else
            auxAlumno.SetNombre(String($('#nombreInput').val()));
        if ($('#materiaInput').val() == undefined || $('#materiaInput').val() == '') {
            response = false;
            Parcial.ManejadorEstilos.SetErrorClass('materia');
        }
        else
            auxAlumno.SetMateria(String($('#materiaInput').val()));
        if ($('#notaInput').val() == undefined || $('#notaInput').val() == '') {
            response = false;
            Parcial.ManejadorEstilos.SetErrorClass('nota');
        }
        else
            auxAlumno.SetNota(Number($('#nota').val()));
        return response;
    };
    Parcial.Agregar = function () {
        if (Validar()) {
            maxId++;
            auxAlumno.SetId(maxId);
            arrayAlumnos.push(auxAlumno);
            localStorage.setItem('arrayAlumnos', JSON.stringify(arrayAlumnos));
            Parcial.Table.HacerBody(arrayAlumnos);
        }
    };
    Parcial.Eliminar = function (id) {
        if (1) {
            var alumnos = localStorage.getItem('arrayAlumnos');
            console.log('alumnos string: \n', alumnos[0]);
            // let alumnosJson: JSON[] = alumnos == null ? Array : JSON.parse(alumnos);
            var arrayAlumnos_1 = alumnos == null ? Array : JSON.parse(alumnos);
            console.log('alumnos json: \n');
            console.log('ID: ', id, '\n');
            var miAlumno = new Parcial.Alumno('Pepe', 12, 'Mate', 8, 23);
            arrayAlumnos_1 = arrayAlumnos_1.filter(function (alumno) {
                return alumno['id'] != id;
            });
            localStorage.setItem('arrayAlumnos', JSON.stringify(arrayAlumnos_1));
            hacerTabla();
        }
    };
    Parcial.SetMaxId = function () {
        if (arrayAlumnos != undefined && arrayAlumnos.length > 0) {
            maxId = arrayAlumnos
                .map(function (alumno) { return alumno.GetId(); })
                .reduce(function (idA, idB) { return (idA > idB ? idA : idB); });
        }
    };
    Parcial.VerOcultarColumna = function (columna) {
        var columnaVisible = Parcial.Visibilidad.CambiarCol(columna);
        if (!columnaVisible) {
            $('#btn' + columna).removeClass('btn-outline-primary');
            $('#btn' + columna).addClass('btn-default');
        }
        else {
            $('#btn' + columna).addClass('btn-outline-primary');
            $('#btn' + columna).removeClass('btn-default');
        }
        Parcial.Table.HacerCabecera();
        Parcial.Table.HacerBody(arrayAlumnos);
    };
    var hacerTabla = function () {
        arrayAlumnos = new Array();
        arrayAlumnos = Parcial.Alumno.CargarAlumnos(JSON.parse(localStorage.getItem('arrayAlumnos')));
        Parcial.SetMaxId();
        Parcial.Table.HacerCabecera();
        Parcial.Table.HacerBody(arrayAlumnos);
    };
    Parcial.VerTodo = function () {
        Parcial.Visibilidad.VerTodas();
        Parcial.Table.HacerCabecera();
        Parcial.Table.HacerBody(arrayAlumnos);
    };
    $(document).ready(function () {
        hacerTabla();
    });
})(Parcial || (Parcial = {}));
