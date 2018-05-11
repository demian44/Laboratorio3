var personas = JSON.parse(localStorage.getItem("personas"));
var persona;
var mensaje;
var cargaExistosa;
function cargarPersona() {
    var isEdit =  localStorage.getItem("isEdit");
    if(JSON.parse(isEdit)){
        persona = JSON.parse(localStorage.getItem("usuarioEditado")); // Traigo la persona a editar de local Storage
    
        var fecha = persona.fecha.split("/");        ///
        fecha = fecha[0] + "-" + fecha[1] + "-" + fecha[2]; /// Cambio "/" por "-"
    
        document.getElementById("nombre").value = persona.nombre;
        document.getElementById("apellido").value = persona.apellido;
        document.getElementById("fecha").value = fecha;
        document.getElementById("telefono").value = persona.telefono;
    }
}

console.log(persona);

function editar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;
    var telefono = document.getElementById("telefono").value;
    cargaExistosa = true;
    mensaje = "";
    validar(nombre, apellido, fecha, telefono);

    if (cargaExistosa) {
        datosEdit = { nombre: nombre, apellido: apellido, fecha: fecha, telefono: telefono, index :  persona.index}
        var objectJson = JSON.stringify(datosEdit); //Parsear objeto a json para enviar la soliciud

        localStorage.setItem("usuarioEditado", objectJson);
        requestService("POST", "http://localhost:3000/editarPersona", objectJson, true);
    }
    else
        alert(mensaje);
}

function resetCss(id) {
    var classInput = document.getElementById(id).className;
    classInput = classInput.toString().split(" ");
    document.getElementById(id).className = classInput[0];

}

function validar(nombre, apellido, fecha, telefono) {
    if (nombre == "") {
        cargaExistosa = false;
        mensaje += "Campo nombre no puede estar vacío.\n";
        document.getElementById("nombre").className = "inputLogin error";
    }
    if (apellido == "") {
        cargaExistosa = false;
        mensaje += "Campo apellido no puede estar vacío.\n";
        document.getElementById("apellido").className = "inputLogin error";
    }
    if (fecha == "") {
        cargaExistosa = false;
        mensaje += "Campo fecha no puede estar vacío.\n";
        document.getElementById("fecha").className = "inputLogin error";
    }
    if (telefono == "") {
        cargaExistosa = false;
        mensaje += "Campo teléfono no puede estar vacío.\n";
        document.getElementById("telefono").className = "inputLogin error";
    }
}

function agregar() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;
    var telefono = document.getElementById("telefono").value;
    cargaExistosa = true;
    mensaje = "";

    validar(nombre, apellido, fecha, telefono);

    if (cargaExistosa) {
        datosEdit = { nombre: nombre, apellido: apellido, fecha: fecha, telefono: telefono }

        var objectJson = JSON.stringify(datosEdit); //Parsear objeto a json para enviar la soliciud

        localStorage.setItem("nuevo", objectJson);
        requestService("POST", "http://localhost:3000/agregarPersona", objectJson, true);
    }
    else
        alert(mensaje);
}

////// Inicio de aplicacion /////////////////
window.onload = cargarPersona;
////// End - Inicio de aplicacion ///////////
