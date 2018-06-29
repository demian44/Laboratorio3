var Parcial;
(function (Parcial) {
    var Table = /** @class */ (function () {
        function Table() {
        }
        /**
         * HacerCabecera
         */
        Table.HacerCabecera = function () {
            var head = '<tr>';
            if (Parcial.Visibilidad.colNombre)
                head += "<th scope='col'>Nombre</th>";
            if (Parcial.Visibilidad.colLegajo)
                head += "<th scope='col'>Legajo</th>";
            if (Parcial.Visibilidad.colMateria)
                head += "<th scope='col'>Materia</th>";
            if (Parcial.Visibilidad.colNota)
                head += "<th scope='col'>Nota</th>";
            if (Parcial.Visibilidad.colEditar)
                head += "<th scope='col'>Edit</th>";
            if (Parcial.Visibilidad.colEliminar)
                head += "<th scope='col'>Delete</th>";
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
                body += "<tr>";
                if (Parcial.Visibilidad.colNombre)
                    body += "<th scope=\"row\">" + alumno.GetNombre() + "</th>";
                if (Parcial.Visibilidad.colLegajo)
                    body += "<td>" + alumno.GetLegajo() + "</td>";
                if (Parcial.Visibilidad.colMateria)
                    body += "<td>" + alumno.GetMateria() + "</td>";
                if (Parcial.Visibilidad.colNota)
                    body += "<td>" + alumno.GetNota() + "</td>";
                if (Parcial.Visibilidad.colEditar)
                    body += "<td><button type=\"button\"  class=\"btn btn btn-link\">Edit</button></td>";
                if (Parcial.Visibilidad.colEliminar) {
                    body += "<td><button  type=\"button\" onclick=\"Parcial.Eliminar(\n\t\t\t\t\t" + alumno.GetId() + "\n\t\t\t\t\t)\" class=\"btn btn btn-link\" style=\"color:red\">Delete</button></td>";
                }
            });
            if (arrayAlumnos.length > 0) {
                body += '</tr>';
                result = true;
            }
            $('#bodyTable').html(body);
            return result;
        };
        Table.Columnasy = function (arrayAlumnos, cabecerasFiltradas) {
            var result = false;
            var body = '';
            arrayAlumnos.forEach(function (alumno) {
                body +=
                    "<tr>" +
                        ("<th scope=\"row\">" + alumno.GetNombre() + "</th>") +
                        ("<td>" + alumno.GetLegajo() + "</td>") +
                        ("<td>" + alumno.GetMateria() + "</td>") +
                        ("<td>" + alumno.GetNota() + "</td>") +
                        "<td><button type=\"button\"  class=\"btn btn-outline-default\">Editar</button></td>" +
                        ("<td><button type=\"button\" onclick=\"Parcial.Eliminar(\n\t\t\t\t\t" + alumno.GetId() + "\n\t\t\t\t\t)\" class=\"btn btn-outline-danger\">Eliminar</button></td>");
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
