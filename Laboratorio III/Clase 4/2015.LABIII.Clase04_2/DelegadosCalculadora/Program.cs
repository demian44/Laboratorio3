using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DelegadosCalculadora
{
    //DEFINO UN TIPO DE DELEGADO 'DELEGADODEMIFUNCION' CON LA FIRMA
    //QUE VAN A TENER QUE RESPETAR TODAS LAS FUNCIONES MANEJADAS POR LOS
    //OBJETOS DELEGADOS.
    public delegate void DelegadoDeMiFuncion(Int32 num1, Int32 num2);

    class Program
    {

#region Metodos con la misma firma del Delegado

    public static void Sumar(int numero1, int numero2)
    {

        Console.WriteLine(" La Suma es: {0}", numero1 + numero2);

    }

    public static void Restar(int numero1, int numero2)
    {

        Console.WriteLine(" La Resta  es: {0}", numero1 - numero2);

    }
#endregion

        static void Main(string[] args)
        {
            //INSTANCIO UN OBJETO DEL TIPO DELEGADO 'DELEGADODEMIFUNCION'
            //AL CONSTRUCTOR LE PASO COMO PARAMETRO LA DIRECCION DE MEMORIA
            //DEL METODO QUE SE VA A EJECUTAR CUANDO SEA INVOCADO
            DelegadoDeMiFuncion Midelegado = new DelegadoDeMiFuncion(Sumar);
            
            Console.WriteLine("Se creo una instacia del delegado 'DelegadoDeMiFuncion' " +
                                "con el siguiente método:");

            //CON LA PROPIEDAD 'METHOD' OBTENGO EL ULTIMO METODO DE LA
            //LISTA DE INVOCACIONES DEL DELEGADO
            Console.WriteLine(Midelegado.Method.ToString());

            Console.ReadKey();
            Console.Clear();

            //PARA AGREGAR METODOS A LA LISTA DE INVOCACION DE UN DELEGADO:
            //CREO NUEVOS DELEGADOS (con la misma firma) Y LOS COMBINO...
            DelegadoDeMiFuncion Midelegado2 = new DelegadoDeMiFuncion(Restar);

            //UTILIZANDO EL METODO 'COMBINE'
            Midelegado = (DelegadoDeMiFuncion)DelegadoDeMiFuncion.Combine(Midelegado, Midelegado2);
            
            //INCLUSIVE LOS PUEDO CONVINAR EN DISTINTOS AMBITOS
            ClaseDelegado cd = new ClaseDelegado();

            DelegadoDeMiFuncion Midelegado3 = new DelegadoDeMiFuncion(cd.Dividir);
            
            //OBTENGO LA INSTANCIA QUE CONTIENE EL METODO DEL DELEGADO
            Console.WriteLine(Midelegado3.Target.ToString());
            
            Console.ReadKey();
            Console.Clear();            
            
            Midelegado = (DelegadoDeMiFuncion)DelegadoDeMiFuncion.Combine(Midelegado, Midelegado3);

            Console.WriteLine("Se muestra la lista de métodos del delegado:");
            Console.WriteLine();

            //EL METODO 'GETINVOCATIONLIST' DEVUELVE LA COLECCION DE METODOS
            //QUE POSEE EL DELEGADO EN SU LISTA DE INVOCACION
            foreach (DelegadoDeMiFuncion delegadoAux in Midelegado.GetInvocationList())
	        {
		        Console.WriteLine(delegadoAux.Method.ToString());
	        }

            Console.ReadKey();
            Console.Clear();

            //OTRA FORMA DE AGREGAR NUEVOS METODOS A LA LISTA DE INVOCACIONES
            //ES CON LA CREACION DE NUEVAS INSTANCIAS REFERENCIADAS A UNA FUNCION
            Midelegado = (DelegadoDeMiFuncion)DelegadoDeMiFuncion.Combine(Midelegado,
                                                     new DelegadoDeMiFuncion(ClaseDelegado.Multiplicar));

            Console.WriteLine("Se muestra la lista de métodos del " +
                              "delegado después de agregar el método Multiplicar:");
            Console.WriteLine();

            foreach (DelegadoDeMiFuncion delegadoAux in Midelegado.GetInvocationList())
	        {
		        Console.WriteLine(delegadoAux.Method.ToString());
	        }
           
            Console.ReadKey();
            Console.Clear();

            Console.WriteLine("Se duplica la lista del delegado:");

            Midelegado = (DelegadoDeMiFuncion)DelegadoDeMiFuncion.Combine(Midelegado, Midelegado);

            Console.WriteLine();

            foreach (DelegadoDeMiFuncion delegadoAux in Midelegado.GetInvocationList())
	        {
		        Console.WriteLine(delegadoAux.Method.ToString());
	        }

            Console.ReadKey();
            Console.Clear();

            Console.WriteLine("Las operaciones arrojan los siguientes resultados:");
            Console.WriteLine();

            //INVOCO A LOS METODOS DE LA LISTA DE INVOCACIONES

            //UTILIZANDO EL METODO INVOKE EXPLICITAMENTE
            Midelegado.Invoke(15, 20);

            //O IMPLICITAMENTE
            Midelegado(10, 5);

            Console.ReadKey();
            Console.Clear();

            Console.WriteLine("Las operaciones arrojan los siguientes resultados:");

            //OTRA FORMA...
            cd.Calcular(5, Sumar, 10);

            Console.ReadKey();
            Console.Clear();

            Console.WriteLine("Al pasarle como parámetro el delegado con todos " +
                              "los métodos cargados arroja los siguientes resultados:");
            Console.WriteLine();

            cd.Calcular(6, Midelegado, 12);

            Console.ReadKey();
            Console.Clear();
        }
    }
}
