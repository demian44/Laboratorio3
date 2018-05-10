var httpReq = new XMLHttpRequest();
var itsOk = true;
var erorMessege = "";


//callBack recibe la respuesta y evalú según el caso si tiene que editar, agregar o simplemente cargar la lista.
var callBack = function () {
    if (httpReq.readyState == 4) 
    { //Acá hay respuesta del servidor!!      
        document.getElementById("spin").hidden = true;
        console.log(httpReq.status);
        if (httpReq.status == 200) { //Codigo de que todo está bien.
            var respuesta = JSON.parse(httpReq.responseText);
            if(respuesta.respuesta == "editado"){
                var personas = localStorage.getItem("personas");
                personas = JSON.parse(personas);
               
                var personaEditada = JSON.parse(localStorage.getItem("usuarioEditado"));
                var index = localStorage.getItem("indexEdit");

                personas.splice(personaEditada.index, 1,personaEditada); // Cambio la información nueva por la vieja.
                localStorage.setItem("personas",JSON.stringify(personas));
                window.location = "./index.html";
            }
            else if(respuesta.respuesta == "agregado"){
                var personas = localStorage.getItem("personas");
                personas = JSON.parse(personas);
               
                var personaNueva = JSON.parse(localStorage.getItem("nuevo"));
                var index = localStorage.getItem("indexEdit");
                personas.unshift(personaNueva);
                localStorage.setItem("personas",JSON.stringify(personas));
                window.location = "./index.html";
            }
            else{
                var personas = httpReq.responseText;
                localStorage.setItem("personas", personas);
            }
            
            cargarLista();
        }
        else {
            alert("Ocurrió un error en el servidor. Código: " + httpReq.status);
        }
    }
    else if (httpReq.readyState < 4 && httpReq.readyState > 0) {
        document.getElementById("spin").hidden = false;
    }
}

function requestService(metodo, url, parametros, tipo) {
    httpReq.onreadystatechange = callBack; //Asigno el callBackx            
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
                    <td><a onclick = 'borrarPersona("+ i + ",event)' href='#'>Borrar </a></td>\
                    <td><a onclick = 'editarPersona(" + i + ",event)' href='#'>Editar </a></td></tr>";
        i++;
    });
    document.getElementById("tablaResultados").innerHTML = body;

    //localStorage.setItem("personas",JSON.stringify(personas));  
}

////// Inicio de aplicacion /////////////////
window.onload = pedirPersonasGet;
////// End - Inicio de aplicacion ///////////