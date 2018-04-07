
var historial = document.getElementsByName("historial");
var lastHistorial = 0;
const HISTORIALES = 3;

var tabla = ""

function saludar() {
    alert("hola mundo desde el js");
}


function sumar(params) {
    document.getElementById("resultado").value = sumarNumeros();
}

function sumarNumeros() {
    var array = document.getElementsByName("number");
    var acumulador = 0;
    for (var i = 0; i < array.length; i++) {
        acumulador += parseInt(array[i].value);
    }
    console.log(acumulador);
    return acumulador;

}

function sumarGuardar() {
    var array = document.getElementsByName("number");
    var acumulador = 0;
    for (var i = 0; i < array.length; i++) {
        acumulador += parseInt(array[i].value);
    }
    var ancla = document.getElementById("body");
    ancla.innerHTML += "<td>" + array[0].value + "</td>" + "<td>" + array[1].value + "</td>" + "<td>" + acumulador + "</td>";
    console.log(acumulador);
    parseInt(array[0].value++);
    array[1].value = Number(array[1].value) + 2;
}

function name() {
    var ancla = document.getElementById("elemento0");
    ancla.innerHTML = "<h1>WEAAAAAAAAAAAAAAAAAAAAAAA</h1>" +
        "<br><input type='text'></input>";
}