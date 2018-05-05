
////// Variable Locales //////////////////////
var httpReq = new XMLHttpRequest();
var itsOk = true;
var erorMessege = "";
////// End - Variable Locales ////////////////

////// Conexión con el servidor //////////////
var callBack = function () {
    //console.log("Llego info del servidor - ReadyState: " + httpReq.readyState);   
    if (httpReq.readyState == 4) { //Acá hay respuesta del servidor!!      
        if (httpReq.status == 200) { //Codigo de que todo está bien.
            var personas = httpReq.responseText;

            // console.log("Personas: \n"+personas + "\n");
            // console.log(JSON.stringify(personas));
            localStorage.setItem("personas", personas);
            // localStorage.setItem("personas",JSON.stringify(personas));

            cargarLista();
        }
        else {
            console.log("Ocurrió un error en el servidor. Código: " + httpReq.status);
        }
    }
    console.log(httpReq.readyState);
}

function requestService(metodo, url, parametros, tipo) {
    httpReq.onreadystatechange = callBack;
    if (metodo === "GET") {
        console.log("get");
        httpReq.open(metodo, url, tipo);
        httpReq.send();
    }
    else if (metodo === "POST") {
        httpReq.open(metodo, url, true)
        httpReq.body = parametros;
        httpReq.setRequestHeader("content-Type", "application/json");
        httpReq.send(parametros);
    }
}

function pedirPersonasGet() {
    var existContent = true;
    var personas = null;
    if (localStorage.getItem("personas") == null)
        existContent = false;
    else
        personas = JSON.parse(localStorage.getItem("personas"));
    if (existContent && Array.isArray(personas) && personas[0].hasOwnProperty('nombre'))
        cargarLista();
    else
        requestService("GET", "http://localhost:3000/personas", "", true);

}
////// End - Conexión con el servidor ////////


////// General Lista /////////////////////////
function cargarLista() {
    var personas = JSON.parse(localStorage.getItem("personas"));    //parseo json a personas;
    // var count = Object.keys(personas).length;
    var body = "";
    var i = 0;
    personas.forEach(persona => {
        body += "<tr>" +
            "<td>" + persona.nombre + "</td>\
                    <td>"+ persona.apellido + "</td>\
                    <td>"+ persona.fecha + "</td>\
                    <td>"+ persona.telefono + "</td>\
                    <td><a onclick = 'borrarPersona("+ i + ",event)' href='#'>Borrar </a></td></tr>";
        i++;
    });
    document.getElementById("tablaResultados").innerHTML = body;

    //localStorage.setItem("personas",JSON.stringify(personas));  
}
////// End - General Lista ///////////////////


////// Edición Lista /////////////////////////
function borrarPersona(index, event) {
    event.preventDefault();
    var personas = JSON.parse(localStorage.getItem("personas"));
    personas.splice(index, 1);
    localStorage.setItem("datosLogin", JSON.stringify(personas));
    cargarLista();
}

function agregarPersona() {
    var formArray = document.getElementsByName("NuevaPersona");

    var persona = nuevaPersona(formArray[0].value, formArray[1].value, formArray[2].value, formArray[3].value);
    if (itsOk) {
        var personas = [];
        personas = JSON.parse(localStorage.getItem("personas"));
        //personas.unshift(persona); agrega al comienzo del array//
        //personas = personas.concat([persona]);
        personas = [persona].concat(personas);
        localStorage.setItem("personas", JSON.stringify(personas));
        cargarLista();

        requestService("POST", "http://localhost:3000/nuevaPersona", "nombre=" + persona.nombre +
            "&apellido=" + persona.apellido + "&fecha=" + persona.fecha + "&telefono=" + persona.telefono, true);
    }
    else
        alert("Error: " + erorMessege);
}

function cargarPersona() {
    var formArray = document.getElementsByName("NuevaPersona");

    var persona = nuevaPersona(formArray[0].value, formArray[1].value, formArray[2].value, formArray[3].value);

    console.log(persona);
}

function nuevaPersona(nombre, apellido, fecha, telefono) {
    var personReturn = {};
    erorMessege = "";
    itsOk = true;
    if (itsOk && (nombre == null || nombre == "")) {
        itsOk = false;
        erorMessege += "\n-No se ingresó nombre";
    }
    if (apellido == null || apellido == "") {
        itsOk = false;
        erorMessege += "\n-No se ingresó apellido";
    }
    if (fecha == null || fecha == "") {
        itsOk = false;
        erorMessege += "\n-No se ingresó fecha";
    }
    if (itsOk && (telefono == null || telefono == "")) {
        erorMessege += "\n-No se ingresó el telefono";
        itsOk = false
    }

    if (itsOk)
        personReturn = { "nombre": nombre, "apellido": apellido, "fecha": fecha, "telefono": telefono }

    return personReturn;
}
////// End - Edición Lista //////////////////


////// Inicio de aplicacion /////////////////
window.onload = pedirPersonasGet;
////// End - Inicio de aplicacion ///////////