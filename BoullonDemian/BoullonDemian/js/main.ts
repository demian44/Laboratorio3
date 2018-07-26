namespace Parcial {
  export class Logic {
    static maxId: number = 0;
    static currentId: number = -1;
    static auxCliente: Parcial.Cliente = new Parcial.Cliente();
    static arrayClientes: Array<Parcial.Cliente> = new Array<Parcial.Cliente>();

    public static Validar = function(): boolean {
      let response: boolean = true;
      Logic.auxCliente = new Cliente();
      let sexo: string = String($("#sexoInput").val());

      if (sexo.toLowerCase() == "hombre" || sexo.toLowerCase() == "mujer") {
        Logic.auxCliente.SetSexo(sexo.toLowerCase());
      } else {
        response = false;
        Parcial.ManejadorEstilos.SetErrorClass("sexo");
      }

      if (
        $("#nombreInput").val() == undefined ||
        $("#nombreInput").val() == ""
      ) {
        response = false;
        Parcial.ManejadorEstilos.SetErrorClass("nombre");
      } else Logic.auxCliente.SetNombre(String($("#nombreInput").val()));

      if (
        $("#apellidoInput").val() == undefined ||
        $("#apellidoInput").val() == ""
      ) {
        response = false;
        Parcial.ManejadorEstilos.SetErrorClass("apellido");
      } else Logic.auxCliente.SetApellido(String($("#apellidoInput").val()));

      if ($("#edadInput").val() == undefined || $("#edadInput").val() == "") {
        console.log($("#edadInput").val());
        response = false;
        Parcial.ManejadorEstilos.SetErrorClass("edad");
      } else {
        if (!Logic.auxCliente.SetEdad(Number($("#edadInput").val()))) {
          response = false;
          Parcial.ManejadorEstilos.SetErrorClass("edad");
        }
      }

      return response;
    };

    public static Agregar = function(): void {
      if (Logic.Validar()) {
        Logic.Limpiar();
        Logic.maxId++;
        Logic.auxCliente.SetId(Logic.maxId);
        Logic.arrayClientes.push(Logic.auxCliente);
        localStorage.setItem(
          "arrayClientes",
          JSON.stringify(Logic.arrayClientes)
        );
        Parcial.Table.HacerBody(Logic.arrayClientes);
      }
    };

    public static FiltrarEdad = function(edad: number): void {
      if (Logic.Validar()) {
        Logic.maxId++;
        Logic.auxCliente.SetId(Logic.maxId);
        Logic.arrayClientes.push(Logic.auxCliente);
        localStorage.setItem(
          "arrayClientes",
          JSON.stringify(Logic.arrayClientes)
        );
        Parcial.Table.HacerBody(Logic.arrayClientes);
      }
    };

    public static Eliminar = function(): void {
      if (Logic.currentId != -1) {
        let clientes: string | null = localStorage.getItem("arrayClientes");

        console.log("clientes string: \n", clientes[0]);

        // let clientesJson: JSON[] = clientes == null ? Array : JSON.parse(clientes);
        let arrayClientes: JSON[] =
          clientes == null ? Array : JSON.parse(clientes);

        console.log("clientes json: \n");

        console.log("ID: ", Logic.currentId, "\n");

        Logic.arrayClientes = Logic.arrayClientes.filter(function(cliente) {
          return cliente["id"] != Logic.currentId;
        });
        console.log(Logic.arrayClientes);
        localStorage.setItem(
          "arrayClientes",
          JSON.stringify(Logic.arrayClientes)
        );
        Logic.Limpiar();
        Logic.hacerTabla();
      }
    };

    public static SetMaxId = function(): void {
      if (Logic.arrayClientes != undefined && Logic.arrayClientes.length > 0) {
        Logic.maxId = Logic.arrayClientes
          .map((cliente: Parcial.Cliente) => cliente.GetId())
          .reduce((idA, idB) => (idA > idB ? idA : idB));
      }
    };

    public static VerOcultarColumna = function(columna: string): void {
      let columnaVisible: boolean = Parcial.Visibilidad.CambiarCol(columna);
	  
      if (!columnaVisible) {
        $("#btn" + columna).removeClass("btn-outline-primary");
        $("#btn" + columna).addClass("btn-default");
      } else {
        $("#btn" + columna).addClass("btn-outline-primary");
        $("#btn" + columna).removeClass("btn-default");
      }

      Parcial.Table.HacerCabecera();
      Parcial.Table.HacerBody(Logic.arrayClientes);
    };

    public static hacerTabla = function(): void {
      Logic.arrayClientes = new Array<Parcial.Cliente>();
      Logic.arrayClientes = Parcial.Cliente.CargarClientes(
        JSON.parse(localStorage.getItem("arrayClientes"))
      );
      console.log(JSON.parse(localStorage.getItem("arrayClientes")));
      Logic.SetMaxId();
      Parcial.Table.HacerCabecera();
      Parcial.Table.HacerBody(Logic.arrayClientes);
    };

    public static Filtrar = function(): void {
      let filtro: any = $("#cmbFiltro").val();
      Parcial.Table.HacerCabecera();
      let coso: string = "";
      let fileredArray: Array<Cliente> = Logic.arrayClientes;

      if (filtro == 0) {
        Parcial.Table.HacerBody(Logic.arrayClientes);
        fileredArray = Logic.arrayClientes.filter(function(cliente: Cliente) {
          return cliente["sexo"] == "hombre";
        });
      } else if (filtro == 1) {
        Parcial.Table.HacerBody(Logic.arrayClientes);
        fileredArray = Logic.arrayClientes.filter(function(cliente: Cliente) {
          return cliente["sexo"] == "mujer";
        });
      }

      Parcial.Table.HacerBody(fileredArray);
    };

    public static HacerAlgo = function(id: number): void {
      Logic.arrayClientes.forEach((cliente: Parcial.Cliente) => {
        if (cliente.GetId() == id) {
          $("#sexoInput").val(cliente.GetSexo());
          $("#nombreInput").val(cliente.GetNombre());
          $("#apellidoInput").val(cliente.GetApellido());
          $("#edadInput").val(cliente.GetEdad());
          Logic.currentId = cliente.GetId();
        }
      });
    };

    public static FiltrarPorEdad = function(): void {
      let edad: any = $("#filtro").val();
      Parcial.Table.HacerCabecera();
      let coso: string = "";

      if (edad === undefined || isNaN(edad) || edad == "" || edad[0] == " ")
        Parcial.Table.HacerBody(Logic.arrayClientes);
      else {
        let fileredArray = Logic.arrayClientes.filter(function(
          cliente: Cliente
        ) {
          return cliente["edad"] == edad;
        });
        Parcial.Table.HacerBody(fileredArray);
      }
    };

    public static Limpiar = function(): void {
      $("#sexoInput").val("");
      $("#nombreInput").val("");
      $("#apellidoInput").val("");
      $("#edadInput").val("");
	  Logic.currentId = -1;
	  localStorage.clear();
	  Logic.hacerTabla();
    };

    public static MapearPromedios = function(): void {
      let arryaEstado: any[] = Logic.arrayClientes.map(
        (cliente: Parcial.Cliente): {} => {
          if (cliente.GetEdad() > 6)
            return { id: cliente.GetId(), estado: "Aprobado" };
          else return { id: cliente.GetId(), estado: "Desaprobado" };
        }
      );

      console.log(arryaEstado);
    };

    public static Promedio = function(): void {
      let respuesta: any = Logic.arrayClientes.reduce(
        (promedio: any, persona: Parcial.Cliente) => {
          promedio.contador++;
          promedio.acumulador += persona.GetEdad();
          if (promedio.contador == Logic.arrayClientes.length)
            promedio.resultado = promedio.acumulador / promedio.contador;
          return promedio;
        },
        { contador: 0, acumulador: 0, resultado: 0 }
      );

      $("#promedio").val(respuesta.resultado);
    };

    public static FilterAprobados = function(): void {
      let arryaAprobado: Cliente[] = Logic.arrayClientes.filter(
        (cliente: Cliente): boolean => {
          return cliente.GetEdad() > 6;
        }
      );
      console.log(arryaAprobado);
    };
  }

  $(document).ready(function() {
    Logic.hacerTabla();
  });
}
