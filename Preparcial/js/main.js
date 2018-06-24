var Parcial;
(function (Parcial) {
    var maxId = 0;
    var cabeceras = ['Nombre', 'Legajo', 'Materia', 'Nota', 'Editar', 'Eliminar'];
    var auxAlumno;
    var arrayAlumnos;
    var Validar = function () {
        var response = true;
        auxAlumno = new Parcial.Alumno();
        console.log($('#legajo').val());
        if ($('#legajo').val() == undefined || $('#legajo').val() == '') {
            response = false;
            Parcial.ManejadorEstilos.SetErrorClass('legajo');
        }
        else
            auxAlumno.SetLegajo(Number($('#legajo').val()));
        if ($('#nombre').val() == undefined || $('#nombre').val() == '') {
            response = false;
            Parcial.ManejadorEstilos.SetErrorClass('nombre');
        }
        else
            auxAlumno.SetNombre(String($('#nombre').val()));
        if ($('#materia').val() == undefined || $('#materia').val() == '') {
            response = false;
            Parcial.ManejadorEstilos.SetErrorClass('materia');
        }
        else
            auxAlumno.SetMateria(String($('#materia').val()));
        if ($('#nota').val() == undefined || $('#nota').val() == '') {
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
    Parcial.SetMaxId = function () {
        if (arrayAlumnos != undefined && arrayAlumnos.length > 0) {
            maxId = arrayAlumnos
                .map(function (alumno) { return alumno.GetId(); })
                .reduce(function (idA, idB) { return (idA > idB ? idA : idB); });
        }
    };
    $(document).ready(function () {
        arrayAlumnos = new Array();
        arrayAlumnos = Parcial.Alumno.CargarAlumnos(JSON.parse(localStorage.getItem('arrayAlumnos')));
        Parcial.SetMaxId();
        Parcial.Table.HacerCabecera(cabeceras);
        Parcial.Table.HacerBody(arrayAlumnos);
    });
})(Parcial || (Parcial = {}));
