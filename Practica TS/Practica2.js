// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
var llamarBatman = function (llamar) {
    llamar ? console.log("Batiseñal activada") : console.log("Batiseñal desactivada");
};
llamarBatman();
// Rest?
// let unirHeroes2 : (personas:string[]){}=>string
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
unirheroes("asdas", "asdas", "asdas", "asdas", "asdas", "asdas", "asdas");
// Tipo funcion
function noHaceNada(numero, texto, booleano, arreglo) {
}
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco = noHaceNada;
