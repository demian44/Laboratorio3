


////// Edición Lista /////////////////////////
function borrarPersona(index, event) {
    event.preventDefault();
    var personas = JSON.parse(localStorage.getItem("personas"));
    personas.splice(index, 1);
    localStorage.setItem("personas", JSON.stringify(personas));
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

function editarPersona(index) {
    event.preventDefault();
    var personas = JSON.parse(localStorage.getItem("personas"));
    var persona = personas[index];
    persona.index = index; // Agrego el campo index para mantenerlo como referencia en la tabla. 
    localStorage.setItem("usuarioEditado",JSON.stringify(persona));
    window.location = "./edit.html";
}

function agregarPersona() {
    event.preventDefault();
    var personas = JSON.parse(localStorage.getItem("personas"));
    window.location = "./nuevo.html";
    // localStorage.setItem("datosLogin", JSON.stringify(personas));
    // cargarLista();
}

////// End - Edición Lista //////////////////
