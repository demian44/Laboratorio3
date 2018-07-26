var Parcial;
(function (Parcial) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, id, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.id = id;
        }
        Persona.prototype.GetNombre = function () {
            return this.nombre;
        };
        Persona.prototype.SetNombre = function (nombre) {
            this.nombre = nombre == '' ? 'No asignado' : nombre;
        };
        Persona.prototype.GetApellido = function () {
            return this.apellido;
        };
        Persona.prototype.SetApellido = function (apellido) {
            this.apellido = apellido == '' ? 'No asignado' : apellido;
        };
        Persona.prototype.GetId = function () {
            return this.id;
        };
        Persona.prototype.SetId = function (id) {
            this.id = id < -1 ? 0 : id;
        };
        return Persona;
    }());
    Parcial.Persona = Persona;
})(Parcial || (Parcial = {}));
