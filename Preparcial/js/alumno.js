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
            _this.materia = materia;
            _this.nota = nota;
            _this.legajo = legajo;
            return _this;
        }
        Alumno.prototype.GetMateria = function () {
            return this.materia;
        };
        Alumno.prototype.SetMateria = function (materia) {
            this.materia = materia == '' ? 'No asignada' : materia;
        };
        Alumno.prototype.GetNota = function () {
            return this.nota;
        };
        Alumno.prototype.GetId = function () {
            return _super.prototype.GetId.call(this);
        };
        Alumno.prototype.SetId = function (id) {
            return _super.prototype.SetId.call(this, id);
        };
        Alumno.prototype.SetNota = function (nota) {
            var retorno = false;
            if (nota < -1 || nota > 10)
                this.nota = 0;
            else {
                retorno = true;
                this.nota = nota;
            }
            return retorno;
        };
        Alumno.prototype.GetLegajo = function () {
            return this.legajo;
        };
        Alumno.prototype.SetLegajo = function (legajo) {
            this.legajo = legajo < -1 && legajo > 2000 ? 0 : legajo;
        };
        Alumno.CargarAlumnos = function (array) {
            var arrayAlumnos = new Array();
            for (var i = 0; i < array.length; i++) {
                //Chequeo que el objeto que reciba tenga los campos seteados.
                if (array[i]['nombre'] != undefined &&
                    array[i]['id'] != undefined &&
                    array[i]['materia'] != undefined &&
                    array[i]['nota'] != undefined &&
                    array[i]['legajo'] != undefined) {
                    arrayAlumnos.push(new Parcial.Alumno(array[i]['nombre'], array[i]['id'], array[i]['materia'], array[i]['nota'], array[i]['legajo']));
                }
            }
            return arrayAlumnos;
        };
        return Alumno;
    }(Parcial.Persona));
    Parcial.Alumno = Alumno;
})(Parcial || (Parcial = {}));
