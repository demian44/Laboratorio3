var Parcial;
(function (Parcial) {
    var Table = /** @class */ (function () {
        function Table() {
        }
        /**
         * HacerCabecera
         */
        Table.HacerCabecera = function (cabeceras) {
            var head = '<tr>';
            cabeceras.forEach(function (cabecera) {
                head += "<th scope='col'>" + cabecera + '</th>';
            });
            head += '</tr>';
            $('#headTable').html(head);
        };
        /**
         * HacerBody
         */
        Table.HacerBody = function (arrayAlumnos) {
            var result = false;
            var body = '';
            arrayAlumnos.forEach(function (alumno) {
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
                        '<td><button type="button" class="btn btn-outline-default">Editar</button></td>' +
                        '<td><button type="button" class="btn btn-outline-danger">Eliminar</button></td>';
            });
            if (arrayAlumnos.length > 0) {
                body += '</tr>';
                result = true;
            }
            $('#bodyTable').html(body);
            return result;
        };
        Table.cuerpo = 'MarkOtto     </td>' +
            "<td>@mdo</td></tr><tr><th scope='row'>2</th><td>Jacob</td><td>Thornton</td>" +
            "<td>@fat</td></tr><tr><th scope='row'>3</th><td>Larry</td><td>the Bird</td>" +
            '<td>@twitter</td>';
        return Table;
    }());
    Parcial.Table = Table;
})(Parcial || (Parcial = {}));
