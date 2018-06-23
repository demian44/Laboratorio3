var Modelo;
(function (Modelo) {
    var SerVivo = /** @class */ (function () {
        function SerVivo(nombre, edad) {
            this.nombre = nombre;
        }
        SerVivo.prototype.RetornoNOmbre = function () {
            return this.nombre;
        };
        return SerVivo;
    }());
    Modelo.SerVivo = SerVivo;
    // class Gato implements Animal {
    // 	private nombre: string;
    // 	constructor(nombre: string) {
    // 		this.nombre = nombre;
    // 	}
    // 	HacerRuido(): void {
    // 		console.log('Miau');
    // 	}
    // 	public static metodoEstatico(): string {
    // 		console.log('Hola wea');
    // 		return 'wea';
    // 	}
    // }
})(Modelo || (Modelo = {}));
