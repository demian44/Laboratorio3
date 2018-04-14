using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace DelegadosParaOrdenamiento
{
    public class Manejadora
    {
        public static void CargarListado(List<Usuario> lista, ListView listView)
        {
            foreach (Usuario user in lista)
            {
                //CREO UN OBJETO DE TIPO LISTVIEWITEM
                ListViewItem misItems = new ListViewItem(user.Apellido);

                misItems.SubItems.Add(user.Nombre);
                misItems.SubItems.Add(user.TipoUsuario.ToString());

                //AGREGO EL LISTVIEWITEM AL LISTVIEW
                listView.Items.Add(misItems);

            }
        }

        public static List<Usuario> OrdenarListado(List<Usuario> queOrdeno, OrdenarLista porQueOrdeno, bool ascendente)
        {
            Comparison<Usuario> miComparador = null;

            switch (porQueOrdeno)
            {
                case OrdenarLista.Nombre:
                    if (ascendente)
                    {
                        miComparador = new Comparison<Usuario>(Usuario.OrdenarPorNombreAsc);
                    }
                    else
                    {
                        miComparador = new Comparison<Usuario>(Usuario.OrdenarPorNombreDesc);
                    }
                    break;
                case OrdenarLista.Apellido:
                    if (ascendente)
                    {
                        miComparador = new Comparison<Usuario>(Usuario.OrdenarPorApellidoAsc);
                    }
                    else
                    {
                        miComparador = new Comparison<Usuario>(Usuario.OrdenarPorApellidoDesc);
                    }
                    break;
                case OrdenarLista.TipoUsuario:
                    if (ascendente)
                    {
                        miComparador = new Comparison<Usuario>(Usuario.OrdenarPorTipoUsuarioAsc);
                    }
                    else
                    {
                        miComparador = new Comparison<Usuario>(Usuario.OrdenarPorNombreDesc);
                    }
                    break;
                default:
                    break;
            }

            queOrdeno.Sort(miComparador);

            return queOrdeno;
        }
    }
}
