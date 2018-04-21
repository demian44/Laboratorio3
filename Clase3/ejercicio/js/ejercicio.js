
/////ver clases en w3scholl class form!!!!!!!
function verClase() {
    // window.onload = function () {
    var coso = document.getElementById("section").className;
    console.log(coso);
    // }

}
function cambiarNombre() {
    // window.onload = function () {
    document.getElementById("nombre").className = "error";
    // }

}

function ingreso() {

    if (document.getElementById("nombre").value == "dboullon") {
        document.getElementById("nombre").className = "good";
        if (document.getElementById("pass").value == "123") 
            document.getElementById("pass").className = "good";
        
    }
    else {
        document.getElementById("nombre").className = "error";
    }
    if (document.getElementById("pass").value == "123"&& document.getElementById("pass").value == "123") {
        alert("Entramo'");
    }
    else {
        document.getElementById("pass").className = "error";
    }

    
}
function resetCss(id) {
    document.getElementById(id).className = "input[type=text]";
    document.getElementById(id).className = "input[type=text]";
}


function validar(e) {
    if (document.all)
        tecla = e.keyCode;
    else
        tecla = e.which;

    //tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 13)
        ingreso();

    console.log(document.all);
    console.log(e);
}