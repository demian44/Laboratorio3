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
    public partial class frmListado : Form
    {
        public frmListado()
        {
            InitializeComponent();
        }

    #region Métodos

    private void InicializarFormulario()
    {
        MostrarLista(frmPrincipal.misUsuarios);
        CargarCombo();

        this.cboOrdenar.SelectedIndex = 0;
        this.rdoDescendente.Checked = true;
    }

    private void MostrarLista(List<Usuario> lista)
    {
        //LIMPIO EL LIST VIEW
        this.lstUsuarios.Items.Clear();

        //CARGO ES LIST VIEW
        Manejadora.CargarListado(lista, this.lstUsuarios);

    }

    private void Ordenar()
    {
        frmPrincipal.misUsuarios = Manejadora.OrdenarListado(frmPrincipal.misUsuarios, 
                                              (OrdenarLista)this.cboOrdenar.SelectedItem, 
                                              this.rdoAsc.Checked);

    }

    private void CargarCombo()
    {
        foreach (OrdenarLista enumerado in Enum.GetValues(typeof(OrdenarLista)))
	    {
            this.cboOrdenar.Items.Add(enumerado); 
	    }
    }

    #endregion

    #region Manejadores
    private void frmListado_Load(object sender, EventArgs e)
        {
            this.InicializarFormulario();
        }

        private void btnAceptar_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void cboOrdenar_SelectedIndexChanged(object sender, EventArgs e)
        {
            this.Ordenar();
            this.MostrarLista(frmPrincipal.misUsuarios);
        }
        private void rdoAsc_CheckedChanged(object sender, EventArgs e)
        {
            this.cboOrdenar_SelectedIndexChanged(sender, e);
        }

    #endregion

    }
}
