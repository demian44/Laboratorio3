var Parcial;
(function (Parcial) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, id) {
            this.nombre = nombre;
            this.id = id;
        }
        Persona.prototype.GetNombre = function () {
            return this.nombre;
        };
        Persona.prototype.SetNombre = function (nombre) {
            this.nombre = nombre == '' ? 'No asignado' : nombre;
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
