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
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente(nombre, id, apellido, edad, sexo) {
            var _this = _super.call(this, nombre, id, apellido) || this;
            _this.edad = edad;
            _this.sexo = sexo;
            return _this;
        }
        Cliente.prototype.GetApellido = function () {
            return _super.prototype.GetApellido.call(this);
        };
        Cliente.prototype.SetApellido = function (apellido) {
            _super.prototype.SetApellido.call(this, apellido);
        };
        Cliente.prototype.GetNombre = function () {
            return _super.prototype.GetNombre.call(this);
        };
        Cliente.prototype.SetNombre = function (nombre) {
            _super.prototype.SetNombre.call(this, nombre);
        };
        Cliente.prototype.GetEdad = function () {
            return this.edad;
        };
        Cliente.prototype.GetId = function () {
            return _super.prototype.GetId.call(this);
        };
        Cliente.prototype.SetId = function (id) {
            return _super.prototype.SetId.call(this, id);
        };
        Cliente.prototype.SetEdad = function (edad) {
            var retorno = false;
            if (edad < -1 || edad > 100)
                this.edad = 0;
            else {
                retorno = true;
                this.edad = edad;
            }
            return retorno;
        };
        Cliente.prototype.GetSexo = function () {
            return this.sexo;
        };
        Cliente.prototype.SetSexo = function (sexo) {
            this.sexo = sexo;
        };
        Cliente.CargarClientes = function (array) {
            var arrayClientes = new Array();
            if (array != null) {
                for (var i = 0; i < array.length; i++) {
                    //Chequeo que el objeto que reciba tenga los campos seteados.
                    if (array[i]["nombre"] != undefined &&
                        array[i]["id"] != undefined &&
                        array[i]["apellido"] != undefined &&
                        array[i]["edad"] != undefined &&
                        array[i]["sexo"] != undefined) {
                        arrayClientes.push(new Parcial.Cliente(array[i]["nombre"], array[i]["id"], array[i]["apellido"], array[i]["edad"], array[i]["sexo"]));
                    }
                }
            }
            return arrayClientes;
        };
        return Cliente;
    }(Parcial.Persona));
    Parcial.Cliente = Cliente;
})(Parcial || (Parcial = {}));
