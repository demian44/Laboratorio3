var Parcial;
(function (Parcial) {
    var Visibilidad = /** @class */ (function () {
        function Visibilidad() {
        }
        Visibilidad.CambiarCol = function (columna) {
            var retorno = false;
            switch (columna) {
                case 'Nombre':
                    retorno = Visibilidad.colNombre = !Visibilidad.colNombre;
                    break;
                case 'Legajo':
                    retorno = Visibilidad.colLegajo = !Visibilidad.colLegajo;
                    break;
                case 'Materia':
                    retorno = Visibilidad.colMateria = !Visibilidad.colMateria;
                    break;
                case 'Nota':
                    retorno = Visibilidad.colNota = !Visibilidad.colNota;
                    break;
                case 'Editar':
                    retorno = Visibilidad.colEditar = !Visibilidad.colEditar;
                    break;
                case 'Eliminar':
                    retorno = Visibilidad.colEliminar = !Visibilidad.colEliminar;
                    break;
                default:
                    break;
            }
            return retorno;
        };
        Visibilidad.VerTodas = function () {
            Visibilidad.colNombre = true;
            Visibilidad.colLegajo = true;
            Visibilidad.colMateria = true;
            Visibilidad.colNota = true;
            Visibilidad.colEditar = true;
            Visibilidad.colEliminar = true;
        };
        Visibilidad.cabecerasFiltradas = ['Nombre', 'Legajo', 'Materia', 'Nota', 'Editar', 'Eliminar'];
        Visibilidad.colNombre = true;
        Visibilidad.colLegajo = true;
        Visibilidad.colMateria = true;
        Visibilidad.colNota = true;
        Visibilidad.colEditar = true;
        Visibilidad.colEliminar = true;
        return Visibilidad;
    }());
    Parcial.Visibilidad = Visibilidad;
})(Parcial || (Parcial = {}));
