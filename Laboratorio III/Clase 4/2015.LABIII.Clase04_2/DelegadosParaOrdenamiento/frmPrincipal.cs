using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace DelegadosParaOrdenamiento
{
    public partial class frmPrincipal : Form
    {
        //LISTA DE OBJETOS DE TIPO USUARIO
        public static List<Usuario> misUsuarios;

        public frmPrincipal()
        {
            InitializeComponent();

            //AGREGO 'DINAMICAMENTE' LOS MANEJADORES DE EVENTOS
            this.NormalToolStripMenuItem.Click += new EventHandler(NormalToolStripMenuItem_Click);
            this.MostrarToolStripMenuItem.Click += new EventHandler(MostrarListado);
            this.SalirToolStripMenuItem.Click += new EventHandler(SalirToolStripMenuItem_Click);
            this.FormClosing +=new FormClosingEventHandler(frmPrincipal_FormClosing);

        }
        static frmPrincipal()
        {
            misUsuarios = new List<Usuario>();
        }

        #region Métodos privados
        private void CargarUsuario()
        {
            frmUsuario frm = new frmUsuario();

            frm.WindowState = FormWindowState.Normal;
            frm.StartPosition = FormStartPosition.CenterScreen;
            frm.ShowDialog();

            if (frm.DialogResult == System.Windows.Forms.DialogResult.OK)
            {
                misUsuarios.Add(frm.UsuarioRegistrado);
            }
        }
        private void SalirDelPrograma(FormClosingEventArgs evento)
        {

            if (MessageBox.Show("¿Esta seguro que quiere Salir?", "Salir", MessageBoxButtons.YesNo,
                MessageBoxIcon.Question) == System.Windows.Forms.DialogResult.No)

                evento.Cancel = true;

            else

                this.Dispose();


        }
        private void MostrarListado()
        {
            frmListado frmlista = new frmListado();

            frmlista.StartPosition = FormStartPosition.CenterScreen;

            frmlista.ShowDialog();
        }
        #endregion

        #region Manejadores de Eventos
        private void NormalToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.CargarUsuario();
        }

        private void MostrarListado(object sender, EventArgs e)
        {
            this.MostrarListado();
        }

        private void SalirToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.SalirDelPrograma(new System.Windows.Forms.FormClosingEventArgs(CloseReason.UserClosing, true));
        }
        private void frmPrincipal_FormClosing(object sender, FormClosingEventArgs e)
        {
            this.SalirDelPrograma(e);
        }
        #endregion
    }
}
