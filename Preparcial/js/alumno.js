var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parcial;
(function (Parcial) {
    var Alumno = /** @class */ (function (_super) {
        __extends(Alumno, _super);
        function Alumno(nombre, id, materia, nota, legajo) {
            var _this = _super.call(this, nombre, id) || this;
            _this.materia = nombre;
            _this.nota = nota;
            _this.legajo = legajo;
            return _this;
        }
        return Alumno;
    }(Parcial.Persona));
    Parcial.Alumno = Alumno;
})(Parcial || (Parcial = {}));
