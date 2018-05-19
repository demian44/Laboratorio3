/*
///// Framework: JQuery //////
Diferencia entre jquery y jquery.min es que jquery-min tiene el código abreviado, no es legible para
un humano por lo cual pesa menos. (cambia el nombre de las variables por una dos o poco mas letras).
El signo $ nos permite utilizar elementos y/o funciones de jquery

Son todas funciones, suelen estar sobrecargadas, y a veces depende de si se ingresa o no parametros en la
mesma. 

Peticiones... 
*/

$("document").ready(function () {
    /* alert($("#btn").html()); // este retorna el valor que conocemos como innerHTML
     $("#btn").html("Manuelin"); // Esto altera el valor y no retorna nada  
 
     alert($("#inombre").val("Pepe")); //  este no devuelve valor
     alert($("#inombre").val()); // este retorna el valor
 */
    //alert($(".texto").val()); // trae el primer elemento que implementen esa clase. se usa el punto "."

    //alert($("button").html);

    $("button").hide();

    $("button").show();

    $("button").addClass("rexto");



});

function traerPersonas() {
    $.ajax({
        url: "http://localhost:3000/personas",
        success: function (result) { // ajax utiliza succes como metodo cuando salió todo bien. 
            console.log((result));
        }
    });
}


function cargarPersonas() {
    $.ajax({
        url: "http://localhost:3000/nuevaPersona",
        data: { nombre: "Matias", apellido: "pepe", telefono: "444-4544", fecha: "10/03/1989" },
        type: "POST",
        success: function (result) { // ajax utiliza succes como metodo cuando salió todo bien. 
            console.log((result));
        }
    });
}
// window.onload = function(){
//     alert(document.getElementById("btn").innerHTML);
// }
