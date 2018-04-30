
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

var httpReq = new XMLHttpRequest();
var manuelo = function () {//Se pasa por parametro a httpReq.
    //Hay 5 comunicaciones del ReadyState  pero el cereo nunca se muestra.
    console.log("Llego info del servidor - ReadyState: " + httpReq.readyState);
    if (httpReq.readyState == 4) {
        //Acá tenemos la respuesta del servidor.
        //Sabemos que hay una respuesta, pero no sabemos si es buena o mala.
        //500 error en el servidor.
        if (httpReq.status == 200) {
            //Solo hay status en el readyState 4
            if (httpReq.responseText == "true") {
                console.log("todo ok");
                document.getElementById("nombre").className = "good";
                document.getElementById("pass").className = "good";
            }
            else {
                document.getElementById("pass").className = "error";
                document.getElementById("nombre").className = "error";
            }
            document.getElementById("spin").hidden = true;
        }
        else {
            alert("ocurrió un error en el servidor.");
        }

    }

    if (httpReq.readyState < 4 && httpReq.readyState > 0) {
        document.getElementById("spin").hidden = false;
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





function ingreso() {

    var nombre = document.getElementById("nombre").value;
    var pass = document.getElementById("pass").value;

    if(nombre.length > 3 && pass.length  > 3){
        ajax("POST", "http://localhost:3000/loginUsuario", "usr=" + nombre + "&pass=" + pass, true);
    }
    else{
        document.getElementById("pass").className = "error";
        document.getElementById("nombre").className = "error";
    }
}
// function IngresarDatos(){            
//     ajax("POST","http://localhost:3000/loginUsuario","usr=usuario&pass=1234",true);
// }
// function IngresarDatos(){            
//     ajax("GET","http://localhost:3000/loginUsuario","usr=usuario&pass=1234",true);
// }

function ajax(metodo, url, parametros, tipo) {
    if (metodo === "GET") {
        httpReq.onreadystatechange = manuelo;
        httpReq.open(metodo, url + "?" + parametros, tipo);
        httpReq.send();
    }
    else {
        httpReq.onreadystatechange = manuelo;
        httpReq.open(metodo, url, tipo);
        httpReq.setRequestHeader("content-Type", "application/x-www-form-urlencoded");
        httpReq.send(parametros);
    }
}
