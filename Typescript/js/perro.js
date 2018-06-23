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
var Modelo;
(function (Modelo) {
    var Perro = /** @class */ (function (_super) {
        __extends(Perro, _super);
        function Perro(nombre, edad, pelo) {
            var _this = _super.call(this, nombre, edad) || this;
            _this.pelo = pelo;
            return _this;
        }
        Perro.prototype.HacerRuido = function () {
            console.log(this.RetornoNOmbre() + '.... Guau');
        };
        Perro.metodoEstatico = function () {
            console.log('Hola wea');
            return 'wea';
        };
        return Perro;
    }(Modelo.SerVivo));
    Modelo.Perro = Perro;
})(Modelo || (Modelo = {}));
