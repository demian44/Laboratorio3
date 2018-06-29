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
            console.log($('#notaInput').val());
            response = false;
            Parcial.ManejadorEstilos.SetErrorClass('nota');
        }
        else {
            if (!auxAlumno.SetNota(Number($('#notaInput').val()))) {
                response = false;
                Parcial.ManejadorEstilos.SetErrorClass('nota');
            }
        }
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
    Parcial.FiltrarNota = function (nota) {
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
            arrayAlumnos_1 = arrayAlumnos_1.filter(function (alumno) {
                return alumno['id'] != id;
            });
            console.log(arrayAlumnos_1);
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
        console.log(JSON.parse(localStorage.getItem('arrayAlumnos')));
        Parcial.SetMaxId();
        Parcial.Table.HacerCabecera();
        Parcial.Table.HacerBody(arrayAlumnos);
    };
    Parcial.FiltrarPorNota = function () {
        var nota = $('#filtro').val();
        Parcial.Table.HacerCabecera();
        var coso = '';
        if (nota === undefined || isNaN(nota) || nota == '' || nota[0] == ' ')
            Parcial.Table.HacerBody(arrayAlumnos);
        else {
            var fileredArray = arrayAlumnos.filter(function (alumno) {
                return alumno['nota'] == nota;
            });
            Parcial.Table.HacerBody(fileredArray);
        }
    };
    Parcial.Limpiar = function () {
        $('#legajoInput').val('');
        $('#nombreInput').val('');
        $('#materiaInput').val('');
        $('#notaInput').val('');
    };
    Parcial.MapearPromedios = function () {
        var arryaEstado = arrayAlumnos.map(function (alumno) {
            if (alumno.GetNota() > 6)
                return { id: alumno.GetId(), estado: 'Aprobado' };
            else
                return { id: alumno.GetId(), estado: 'Desaprobado' };
        });
        console.log(arryaEstado);
    };
    Parcial.ReduceAprobados = function () {
        var arryaAprobado = arrayAlumnos.reduce(function (alumno, alumno2) {
            if (alumno.GetNota() > alumno2.GetNota())
                return alumno;
            else
                return alumno2;
        });
        console.log(arryaAprobado);
    };
    Parcial.FilterAprobados = function () {
        var arryaAprobado = arrayAlumnos.filter(function (alumno) {
            return alumno.GetNota() > 6;
        });
        console.log(arryaAprobado);
    };
    $(document).ready(function () {
        hacerTabla();
    });
})(Parcial || (Parcial = {}));
