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
                case 'Sexo':
                    retorno = Visibilidad.colSexo = !Visibilidad.colSexo;
                    break;
                case 'Apellido':
                    retorno = Visibilidad.colApellido = !Visibilidad.colApellido;
                    break;
                case 'Edad':
                    retorno = Visibilidad.colEdad = !Visibilidad.colEdad;
                    break;
                case 'Editar':
                    retorno = Visibilidad.colEditar = !Visibilidad.colEditar;
                    break;
                case 'Eliminar':
                    retorno = Visibilidad.colEliminar = !Visibilidad.colEliminar;
                    break;
                case 'Id':
                    retorno = Visibilidad.colId = !Visibilidad.colId;
                    break;
                default:
                    break;
            }
            return retorno;
        };
        Visibilidad.VerTodas = function () {
            Visibilidad.colNombre = true;
            Visibilidad.colSexo = true;
            Visibilidad.colApellido = true;
            Visibilidad.colEdad = true;
            Visibilidad.colEditar = true;
            Visibilidad.colEliminar = true;
        };
        Visibilidad.cabecerasFiltradas = ['Nombre', 'Sexo', 'Apellido', 'Edad', 'Editar', 'Eliminar'];
        Visibilidad.colId = true;
        Visibilidad.colNombre = true;
        Visibilidad.colSexo = true;
        Visibilidad.colApellido = true;
        Visibilidad.colEdad = true;
        Visibilidad.colEditar = true;
        Visibilidad.colEliminar = true;
        return Visibilidad;
    }());
    Parcial.Visibilidad = Visibilidad;
})(Parcial || (Parcial = {}));
