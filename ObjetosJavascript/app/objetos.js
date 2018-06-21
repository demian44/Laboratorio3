///////// Práctica objetos en javascript ////////



function Persona(nombre, edad, id) {
    this.nombre = nombre;
    this.edad = edad;
    this.id = id;
}

function inicio() {
    var persona1 = new Persona("Demian", 29, 0);
    console.log(persona1);
    var label = document.getElementById("titulo");
    label.innerHTML = persona1.nombre;
    console.log(label.valu);
}

function button(){
    var personaEnHtml = document.getElementsByName("persona");

}


window.onload = inicio;