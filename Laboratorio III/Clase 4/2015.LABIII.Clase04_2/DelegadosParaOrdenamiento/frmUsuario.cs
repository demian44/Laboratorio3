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
    public partial class frmUsuario : frmSecundario
    {
        public frmUsuario()
        {
            InitializeComponent();
        }

        private void frmUsuario_Load(object sender, EventArgs e)
        {
            this.cboTipoUsuario.DropDownStyle = ComboBoxStyle.DropDownList;

            foreach (TipoDeUsuario enumeracion in Enum.GetValues(typeof(TipoDeUsuario)))
            {
                this.cboTipoUsuario.Items.Add(enumeracion);
            }

            this.cboTipoUsuario.SelectedIndex = 1;

            this.txtNombre.Focus();
        }

        //SOBREESCRIBO EL PROCEDIMIENTO QUE MANEJA EL 
        //EVENTO 'CLICK' DEL BOTON 'BTNACEPTAR'
        protected override void btnAceptar_Click(object sender, EventArgs e)
        {            
            base.btnAceptar_Click(sender, e);
            base._usuarioRegistrado.TipoUsuario = (TipoDeUsuario)this.cboTipoUsuario.SelectedItem;
            this.DialogResult = System.Windows.Forms.DialogResult.OK;
        }
    }
}
