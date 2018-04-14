using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;

namespace Eventos.Consola2
{
    class Program
    {
        static void Main(string[] args)
        {
            TipoManejador queManejador;

            Console.WriteLine("Introduzca el número 1 ó 2," +
            " para seleccionar el manejador de evento a utilizar" +
            " o 3 para utilizar los dos al mismo tiempo.");

            queManejador = (TipoManejador)int.Parse(Console.ReadLine());

            //CREO UN OBJETO DE TIPO 'EMPLEADO'
            Empleado miEmpleado = new Empleado();

            //ASIGNO EL MANEJADOR DE EVENTO EN TIEMPO DE EJECUCION
            //EN FUNCION DEL NUMERO QUE SE HA INGRESADO
            switch (queManejador)
            {
                case TipoManejador.SobreAsignacionSueldo:
                    miEmpleado.LimiteSueldo +=new LimiteSueldoDel(SobreAsignacionSueldo);
                    break;
                case TipoManejador.SalarioIncorrecto:
                    miEmpleado.LimiteSueldo += new LimiteSueldoDel(SalarioIncorrecto);
                    break;
                case TipoManejador.Ambos:
                    miEmpleado.LimiteSueldo +=new LimiteSueldoDel(SobreAsignacionSueldo);
                    miEmpleado.LimiteSueldo += new LimiteSueldoDel(SalarioIncorrecto);
                    break;
                default:
                    Console.WriteLine("La opcion ingresada no es válida!!");
                    Console.ReadLine();
                    break;
            }

            Console.Clear();

            //ASIGNO VALORES A LAS PROPIEDADES
            miEmpleado.Nombre = "ANTONIO";

            //ESTA ASIGNACION PROVOCARA EL EVENTO, Y SE EJECUTARA
            //EL MANEJADOR ELEGIDO
            miEmpleado.Sueldo = 2500;

            Console.ReadLine();

        }

#region Manejadores

        //MANEJADORES DE EVENTO QUE CONECTO EN TIEMPO DE EJECUCION
        public static void SobreAsignacionSueldo(Double importe, Empleado e)
        {

            Console.WriteLine("Se intentó asignar al empleado {1} el sueldo de $" +
                        " {0:#,###.00}\n" +
                        "¡ESTO ES INCORRECTO!", importe, e.Nombre);

            Console.WriteLine();

        }

        public static void SalarioIncorrecto(Double importe, Empleado e)
        {

            Console.WriteLine("INFORME DE INCIDENCIAS");
            Console.WriteLine("======================");
            Console.WriteLine("Error al intentar asignar un salario de $ " +
                        "{0:#,###.00} al empleado {1}.", importe, e.Nombre);

            Console.WriteLine();

        }
#endregion

    }
}
