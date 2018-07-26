var Parcial;
(function (Parcial) {
    var Logic = /** @class */ (function () {
        function Logic() {
        }
        Logic.maxId = 0;
        Logic.currentId = -1;
        Logic.auxCliente = new Parcial.Cliente();
        Logic.arrayClientes = new Array();
        Logic.Validar = function () {
            var response = true;
            Logic.auxCliente = new Parcial.Cliente();
            var sexo = String($("#sexoInput").val());
            if (sexo.toLowerCase() == "hombre" || sexo.toLowerCase() == "mujer") {
                Logic.auxCliente.SetSexo(sexo.toLowerCase());
            }
            else {
                response = false;
                Parcial.ManejadorEstilos.SetErrorClass("sexo");
            }
            if ($("#nombreInput").val() == undefined ||
                $("#nombreInput").val() == "") {
                response = false;
                Parcial.ManejadorEstilos.SetErrorClass("nombre");
            }
            else
                Logic.auxCliente.SetNombre(String($("#nombreInput").val()));
            if ($("#apellidoInput").val() == undefined ||
                $("#apellidoInput").val() == "") {
                response = false;
                Parcial.ManejadorEstilos.SetErrorClass("apellido");
            }
            else
                Logic.auxCliente.SetApellido(String($("#apellidoInput").val()));
            if ($("#edadInput").val() == undefined || $("#edadInput").val() == "") {
                console.log($("#edadInput").val());
                response = false;
                Parcial.ManejadorEstilos.SetErrorClass("edad");
            }
            else {
                if (!Logic.auxCliente.SetEdad(Number($("#edadInput").val()))) {
                    response = false;
                    Parcial.ManejadorEstilos.SetErrorClass("edad");
                }
            }
            return response;
        };
        Logic.Agregar = function () {
            if (Logic.Validar()) {
                Logic.Limpiar();
                Logic.maxId++;
                Logic.auxCliente.SetId(Logic.maxId);
                Logic.arrayClientes.push(Logic.auxCliente);
                localStorage.setItem("arrayClientes", JSON.stringify(Logic.arrayClientes));
                Parcial.Table.HacerBody(Logic.arrayClientes);
            }
        };
        Logic.FiltrarEdad = function (edad) {
            if (Logic.Validar()) {
                Logic.maxId++;
                Logic.auxCliente.SetId(Logic.maxId);
                Logic.arrayClientes.push(Logic.auxCliente);
                localStorage.setItem("arrayClientes", JSON.stringify(Logic.arrayClientes));
                Parcial.Table.HacerBody(Logic.arrayClientes);
            }
        };
        Logic.Eliminar = function () {
            if (Logic.currentId != -1) {
                var clientes = localStorage.getItem("arrayClientes");
                console.log("clientes string: \n", clientes[0]);
                // let clientesJson: JSON[] = clientes == null ? Array : JSON.parse(clientes);
                var arrayClientes = clientes == null ? Array : JSON.parse(clientes);
                console.log("clientes json: \n");
                console.log("ID: ", Logic.currentId, "\n");
                Logic.arrayClientes = Logic.arrayClientes.filter(function (cliente) {
                    return cliente["id"] != Logic.currentId;
                });
                console.log(Logic.arrayClientes);
                localStorage.setItem("arrayClientes", JSON.stringify(Logic.arrayClientes));
                Logic.Limpiar();
                Logic.hacerTabla();
            }
        };
        Logic.SetMaxId = function () {
            if (Logic.arrayClientes != undefined && Logic.arrayClientes.length > 0) {
                Logic.maxId = Logic.arrayClientes
                    .map(function (cliente) { return cliente.GetId(); })
                    .reduce(function (idA, idB) { return (idA > idB ? idA : idB); });
            }
        };
        Logic.VerOcultarColumna = function (columna) {
            var columnaVisible = Parcial.Visibilidad.CambiarCol(columna);
            if (!columnaVisible) {
                $("#btn" + columna).removeClass("btn-outline-primary");
                $("#btn" + columna).addClass("btn-default");
            }
            else {
                $("#btn" + columna).addClass("btn-outline-primary");
                $("#btn" + columna).removeClass("btn-default");
            }
            Parcial.Table.HacerCabecera();
            Parcial.Table.HacerBody(Logic.arrayClientes);
        };
        Logic.hacerTabla = function () {
            Logic.arrayClientes = new Array();
            Logic.arrayClientes = Parcial.Cliente.CargarClientes(JSON.parse(localStorage.getItem("arrayClientes")));
            console.log(JSON.parse(localStorage.getItem("arrayClientes")));
            Logic.SetMaxId();
            Parcial.Table.HacerCabecera();
            Parcial.Table.HacerBody(Logic.arrayClientes);
        };
        Logic.Filtrar = function () {
            var filtro = $("#cmbFiltro").val();
            Parcial.Table.HacerCabecera();
            var coso = "";
            var fileredArray = Logic.arrayClientes;
            if (filtro == 0) {
                Parcial.Table.HacerBody(Logic.arrayClientes);
                fileredArray = Logic.arrayClientes.filter(function (cliente) {
                    return cliente["sexo"] == "hombre";
                });
            }
            else if (filtro == 1) {
                Parcial.Table.HacerBody(Logic.arrayClientes);
                fileredArray = Logic.arrayClientes.filter(function (cliente) {
                    return cliente["sexo"] == "mujer";
                });
            }
            Parcial.Table.HacerBody(fileredArray);
        };
        Logic.HacerAlgo = function (id) {
            Logic.arrayClientes.forEach(function (cliente) {
                if (cliente.GetId() == id) {
                    $("#sexoInput").val(cliente.GetSexo());
                    $("#nombreInput").val(cliente.GetNombre());
                    $("#apellidoInput").val(cliente.GetApellido());
                    $("#edadInput").val(cliente.GetEdad());
                    Logic.currentId = cliente.GetId();
                }
            });
        };
        Logic.FiltrarPorEdad = function () {
            var edad = $("#filtro").val();
            Parcial.Table.HacerCabecera();
            var coso = "";
            if (edad === undefined || isNaN(edad) || edad == "" || edad[0] == " ")
                Parcial.Table.HacerBody(Logic.arrayClientes);
            else {
                var fileredArray = Logic.arrayClientes.filter(function (cliente) {
                    return cliente["edad"] == edad;
                });
                Parcial.Table.HacerBody(fileredArray);
            }
        };
        Logic.Limpiar = function () {
            $("#sexoInput").val("");
            $("#nombreInput").val("");
            $("#apellidoInput").val("");
            $("#edadInput").val("");
            Logic.currentId = -1;
            localStorage.clear();
            Logic.hacerTabla();
        };
        Logic.MapearPromedios = function () {
            var arryaEstado = Logic.arrayClientes.map(function (cliente) {
                if (cliente.GetEdad() > 6)
                    return { id: cliente.GetId(), estado: "Aprobado" };
                else
                    return { id: cliente.GetId(), estado: "Desaprobado" };
            });
            console.log(arryaEstado);
        };
        Logic.Promedio = function () {
            var respuesta = Logic.arrayClientes.reduce(function (promedio, persona) {
                promedio.contador++;
                promedio.acumulador += persona.GetEdad();
                if (promedio.contador == Logic.arrayClientes.length)
                    promedio.resultado = promedio.acumulador / promedio.contador;
                return promedio;
            }, { contador: 0, acumulador: 0, resultado: 0 });
            $("#promedio").val(respuesta.resultado);
        };
        Logic.FilterAprobados = function () {
            var arryaAprobado = Logic.arrayClientes.filter(function (cliente) {
                return cliente.GetEdad() > 6;
            });
            console.log(arryaAprobado);
        };
        return Logic;
    }());
    Parcial.Logic = Logic;
    $(document).ready(function () {
        Logic.hacerTabla();
    });
})(Parcial || (Parcial = {}));
