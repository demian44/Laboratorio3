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
var mail;
var post;
var pass;
var datosLogin;
var httpReq = new XMLHttpRequest();
var callBack = function () {//Se pasa por parametro a httpReq.
    //Hay 5 comunicaciones del ReadyState  pero el cereo nunca se muestra.
    console.log("Llego info del servidor - ReadyState: " + httpReq.readyState);
    if (httpReq.readyState == 4) {
        document.getElementById("spin").hidden = true;
        //500 error en el servidor.
        console.log("status: " + httpReq.status);
        if (httpReq.status == 200) {

            //Solo hay status en el readyState 4
            var respuesta = JSON.parse(httpReq.responseText);
            console.log(respuesta);
            if (respuesta.type == "User") {
                localStorage.setItem("datosLogin", JSON.stringify(datosLogin));
                document.getElementById("email").className = "good";
                document.getElementById("pass").className = "good";
                var URLactual = window.location;
                var res = URLactual.toString().split("/");
                URLactual = "";
                for (var i = 0; i < res.length - 1; i++) {
                    URLactual += res[i];
                    if (i < res.length - 2)
                        URLactual += "/";
                }
                URLactual += "/index.html";
                window.location = URLactual;
                localStorage.setItem("infoUser",JSON.stringify({"type":"User","email":mail}));

            }
            else if(respuesta.type == "Admin"){
                localStorage.setItem("datosLogin", JSON.stringify(datosLogin));
                document.getElementById("email").className = "good";
                document.getElementById("pass").className = "good";
                localStorage.setItem("infoUser",JSON.stringify({"type":"Admin","email":mail}));
                var URLactual = window.location;
                var res = URLactual.toString().split("/");
                URLactual = "";
                for (var i = 0; i < res.length - 1; i++) {
                    URLactual += res[i];
                    if (i < res.length - 2)
                        URLactual += "/";
                }
                URLactual += "/index.html";
                window.location = URLactual;
            }
            else if (!!respuesta.date) {
                window.location = "./posted.html";
                post = JSON.parse(post);
                post.date = respuesta.date;
                post = JSON.stringify(post);
                localStorage.setItem("post", post);
                post = JSON.parse(post);

            }
            else {
                document.getElementById("mensajeError").innerHTML = "Debe ingresar un email y password válidos!";
                document.getElementById("pass").className = "inputPassword error";
                document.getElementById("email").className = "inputLogin error";
            }
        }
        else if (httpReq.status == 500)
            alert("ocurrió un error en el servidor.");
        else
            alert("Error: "+httpReq.status);

    }

    if (httpReq.readyState < 4 && httpReq.readyState > 0) {
        document.getElementById("spin").hidden = false;
    }


}
function resetCss(id) {
    var classInput = document.getElementById(id).className;
    classInput = classInput.toString().split(" ");
    document.getElementById(id).className = classInput[0];
    document.getElementById("mensajeError").innerHTML = "";
}

function ingreso() {

    mail = document.getElementById("email").value;
    pass = document.getElementById("pass").value;

    datosLogin = { email: mail, password: pass }

    var objectJson = JSON.stringify(datosLogin); //Parsear objeto a json para enviar la soliciud
    var exito = true;
    if (mail.length < 4) {
        exito = false;
        document.getElementById("email").className = "inputLogin error";
    }
    if (pass.length < 4) {
        exito = false;
        document.getElementById("pass").className = "inputPassword error";
    }
    if (exito) {
        ajax("POST", "http://localhost:3000/login", objectJson, true);
    }
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