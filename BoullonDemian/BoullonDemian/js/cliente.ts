namespace Parcial {
  export class Cliente extends Parcial.Persona {
    private edad: number;
    private sexo: string;

    public GetApellido() {
      return super.GetApellido();
    }
    public SetApellido(apellido: string) {
      super.SetApellido(apellido);
    }

    public GetNombre() {
      return super.GetNombre();
    }
    public SetNombre(nombre: string) {
      super.SetNombre(nombre);
    }

    public GetEdad() {
      return this.edad;
    }
    public GetId() {
      return super.GetId();
    }
    public SetId(id: number) {
      return super.SetId(id);
    }
    public SetEdad(edad: number): boolean {
      let retorno: boolean = false;
      if (edad < -1 || edad > 100) this.edad = 0;
      else {
        retorno = true;
        this.edad = edad;
      }
      return retorno;
    }
    public GetSexo() {
      return this.sexo;
    }
    public SetSexo(sexo: string) {
      this.sexo = sexo;
    }

    public static CargarClientes = (array: Array<any>): Array<Cliente> => {
      let arrayClientes = new Array<Cliente>();

      if (array != null) {
        for (let i: number = 0; i < array.length; i++) {
          //Chequeo que el objeto que reciba tenga los campos seteados.
          if (
            array[i]["nombre"] != undefined &&
            array[i]["id"] != undefined &&
            array[i]["apellido"] != undefined &&
            array[i]["edad"] != undefined &&
            array[i]["sexo"] != undefined
          ) {
            arrayClientes.push(
              new Parcial.Cliente(
                array[i]["nombre"],
                array[i]["id"],
                array[i]["apellido"],
                array[i]["edad"],
                array[i]["sexo"]
              )
            );
          }
        }
      }

      return arrayClientes;
    };

    constructor(
      nombre?: string,
      id?: number,
      apellido?: string,
      edad?: number,
      sexo?: string
    ) {
      super(nombre, id, apellido);
      this.edad = edad;
      this.sexo = sexo;
    }
  }
}
