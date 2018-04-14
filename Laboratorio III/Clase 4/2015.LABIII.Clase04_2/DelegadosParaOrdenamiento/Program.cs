using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace DelegadosParaOrdenamiento
{
    static class Program
    {
        /// <summary>
        /// Punto de entrada principal para la aplicación.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            frmPrincipal frm;
            try
            {
                frm = new frmPrincipal();
                Application.Run(frm);
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error: " + ex.Message, "Se ha generado un error", 
                            MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            finally
            {
                MessageBox.Show("Saliendo de la aplicación", "SALIR", MessageBoxButtons.OK, 
                MessageBoxIcon.Information);
            }
        }
    }
}
