var Modelo;
(function (Modelo) {
    function CrearPerro() {
        var perro = new Modelo.Perro('Pepe', 45, 'largo');
        var gato = new Modelo.Gato('Gato Pepe', 45, 'largo');
        var lista = new Array();
        lista.push(perro);
        lista.push(gato);
        lista.push(perro);
        lista.forEach(function (element) {
            element.HacerRuido();
        });
        $('#coso').val('451');
        var number = Number(document.getElementById('coso').value);
        alert(number);
    }
    Modelo.CrearPerro = CrearPerro;
})(Modelo || (Modelo = {}));
