/////ver clases en w3scholl class form!!!!!!!
function verClase() {
    // window.onload = function () {
    var coso = document.getElementById("section").className;
    console.log(coso);
    // }

}
function cambiarNombre() {
    // window.onload = function () {
    document.getElementById("email").className = "error";
    // }

}
var pass;
var datosLogin;
var httpReq = new XMLHttpRequest();
var manuelo = function () {//Se pasa por parametro a httpReq.
    //Hay 5 comunicaciones del ReadyState  pero el cereo nunca se muestra.
    console.log("Llego info del servidor - ReadyState: " + httpReq.readyState);
    if (httpReq.readyState == 4) {
        //Acá tenemos la respuesta del servidor.
        //Sabemos que hay una respuesta, pero no sabemos si es buena o mala.
        //500 error en el servidor.
        console.log("codigo: "+httpReq.status);
        if (httpReq.status == 200) {
            //Solo hay status en el readyState 4
            console.log(httpReq.responseText);
            var respuesta = JSON.parse(httpReq.responseText);
            if (respuesta.autenticado == "si") {
                localStorage.setItem("datosLogin",JSON.stringify(datosLogin));
                document.getElementById("email").className = "good";
                document.getElementById("pass").className = "good";
                location.href ="file:///D:/Laboratorio3/clase%20repaso/index.html";
            }
            else {
                document.getElementById("pass").className = "error";
                document.getElementById("email").className = "error";
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

    var mail = document.getElementById("email").value;
    pass = document.getElementById("pass").value;

    datosLogin = { email: mail, password: pass }

    var objectJson = JSON.stringify(datosLogin);

    if (mail.length > 3 && pass.length > 3) {
        ajax("POST", "http://localhost:1337/login", objectJson, true);
    }
    else {
        document.getElementById("pass").className = "error";
        document.getElementById("email").className = "error";
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
        httpReq.setRequestHeader("content-Type", "application/json");
        httpReq.send(parametros);
    }
}