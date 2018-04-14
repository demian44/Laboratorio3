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
    public partial class frmSecundario : Form
    {

        protected Usuario _usuarioRegistrado;
        public Usuario UsuarioRegistrado
        {
            get { return this._usuarioRegistrado; }
           // set { this._usuarioRegistrado = value; }
        }

     
        public frmSecundario()
        {
            InitializeComponent();
        }

        protected virtual void btnAceptar_Click(object sender, EventArgs e)
        {
            this._usuarioRegistrado = new Usuario(this.txtApellido.Text, this.txtNombre.Text);
        }

        protected void btnCancelar_Click(object sender, EventArgs e)
        {
            this.DialogResult = System.Windows.Forms.DialogResult.Cancel;
        }
    }
}
