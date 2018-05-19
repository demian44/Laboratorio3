var mail;
var pass;
var notas;
var datosLogin;
var indexEdit;
var editado = false;
var httpReq = new XMLHttpRequest();
var callBack = function () {//Se pasa por parametro a httpReq.
    //Hay 5 comunicaciones del ReadyState  pero el cereo nunca se muestra.
    console.log("Llego info del servidor - ReadyState: " + httpReq.readyState);
    if (httpReq.readyState == 4) {

        //500 error en el servidor.
        console.log("status: " + httpReq.status);
        if (httpReq.status == 200) {
            document.getElementById("spinIndex").hidden = true;
            var respuesta = JSON.parse(httpReq.responseText);
            if (respuesta.type == "ok") {
                document.getElementById("spinIndex").hidden = true;

                document.getElementById("editWindow").hidden = true;
                cargarTabla();
            }
            else if (respuesta.type == "error") {
                alert("Error al actualizar la información");
            }
            var user = JSON.parse(localStorage.getItem("infoUser"));
            //Solo hay status en el readyState 4
            notas = JSON.parse(httpReq.responseText);
            var body = "", i = 0;

            armarCabecera(user.type);
            notas.forEach(nota => {
                if (nota.nota < 4)
                    body += "<tr style='color:red'>";
                else
                    body += "<tr>";
                body +=
                    "<td>" + nota.legajo + "</td>\
                    <td>"+ nota.nombre + "</td>\
                            <td>"+ nota.materia + "</td>\
                            <td>"+ nota.nota + "</td>";
                if (user.type == "Admin")
                    body += "<td><a onclick = 'editar(" + i + ")' href='#'>Editar </a></td>";

                body += "</tr>";

                i++;
            });
            document.getElementById("tablaResultados").innerHTML = body;
            document.getElementById("tabla").hidden = false;


        }
        else if (httpReq.status == 500)
            alert("ocurrió un error en el servidor.");
        else
            alert("Error: " + httpReq.status);

    }

    if (httpReq.readyState < 4 && httpReq.readyState > 0) {
        document.getElementById("spinIndex").hidden = false;
        document.getElementById("tabla").hidden = true;
        document.getElementById("editWindow").hidden = true;
    }


}

function armarCabecera(type) {
    var cabecera = "<tr><th>Legajo\
     </th><th>Nombre </th>\
     <th>Materia</th>\
        <th> Nota  </th>";
    if (type == "Admin")
        cabecera += "<th>Accion</th>";
    cabecera += "</tr >";
    document.getElementById("cabecera").innerHTML = cabecera;
}

function closeEdit() {
    document.getElementById("editWindow").hidden = true;

}


function editar(i) {
    document.getElementById("editWindow").hidden = false;
    document.getElementById("legajo").value = notas[i].legajo;
    document.getElementById("nombre").value = notas[i].nombre;
    document.getElementById("materia").value = notas[i].materia;
    document.getElementById("nota").value = notas[i].nota;
    indexEdit = i;
}

function Guardar() {

    notas[indexEdit].legajo = document.getElementById("legajo").value;
    notas[indexEdit].nombre = document.getElementById("nombre").value;
    notas[indexEdit].materia = document.getElementById("materia").value;
    notas[indexEdit].nota = document.getElementById("nota").value;
    var alumno = JSON.stringify(notas[indexEdit]);
    editado = true;
    ajax("POST", "http://localhost:3000/editarNota", alumno, true);
}
function cargarTabla() {
    // var existContent = true;
    // var personas = null;
    // if (localStorage.getItem("personas") == null)
    //     existContent = false;
    // else
    //     personas = JSON.parse(localStorage.getItem("personas"));
    // if (existContent && Array.isArray(personas) && personas[0].hasOwnProperty('nombre'))
    //     cargarLista();
    // else
    ajax("GET", "http://localhost:3000/notas", "", true);
}


function hacerPost() {

    ajax("POST", "http://localhost:3000/postearNuevaEntrada", post, true);
}

function ajax(metodo, url, parametros, tipo) {
    if (metodo === "GET") {
        httpReq.onreadystatechange = callBack;
        httpReq.open(metodo, url + "?" + parametros, tipo);
        httpReq.send();
    }
    else {
        httpReq.onreadystatechange = callBack;
        httpReq.open(metodo, url, tipo);
        httpReq.setRequestHeader("content-Type", "application/json");
        httpReq.send(parametros);
    }
}

function MandarPost(metodo, url, parametros, tipo) {
    httpReq.onreadystatechange = callBack;
    httpReq.open(metodo, url, tipo);
    httpReq.setRequestHeader("content-Type", "application/json");
    httpReq.send(parametros);
}


window.onload = cargarTabla;
