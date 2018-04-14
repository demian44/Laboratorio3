namespace DelegadosParaOrdenamiento
{
    partial class frmPrincipal
    {
        /// <summary>
        /// Variable del diseñador requerida.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén utilizando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben eliminar; false en caso contrario, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido del método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.MenuStrip1 = new System.Windows.Forms.MenuStrip();
            this.TipoDeVistaToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.NormalToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.CambiarNombreToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.MostrarToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.SalirToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.MenuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // MenuStrip1
            // 
            this.MenuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.TipoDeVistaToolStripMenuItem,
            this.CambiarNombreToolStripMenuItem,
            this.SalirToolStripMenuItem});
            this.MenuStrip1.Location = new System.Drawing.Point(0, 0);
            this.MenuStrip1.Name = "MenuStrip1";
            this.MenuStrip1.Size = new System.Drawing.Size(602, 24);
            this.MenuStrip1.TabIndex = 3;
            this.MenuStrip1.Text = "MenuStrip1";
            // 
            // TipoDeVistaToolStripMenuItem
            // 
            this.TipoDeVistaToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.NormalToolStripMenuItem});
            this.TipoDeVistaToolStripMenuItem.Name = "TipoDeVistaToolStripMenuItem";
            this.TipoDeVistaToolStripMenuItem.Size = new System.Drawing.Size(58, 20);
            this.TipoDeVistaToolStripMenuItem.Text = "Ingreso";
            // 
            // NormalToolStripMenuItem
            // 
            this.NormalToolStripMenuItem.Name = "NormalToolStripMenuItem";
            this.NormalToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.NormalToolStripMenuItem.Text = "Usuario";
//            this.NormalToolStripMenuItem.Click += new System.EventHandler(this.NormalToolStripMenuItem_Click);
            // 
            // CambiarNombreToolStripMenuItem
            // 
            this.CambiarNombreToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.MostrarToolStripMenuItem});
            this.CambiarNombreToolStripMenuItem.Name = "CambiarNombreToolStripMenuItem";
            this.CambiarNombreToolStripMenuItem.Size = new System.Drawing.Size(106, 20);
            this.CambiarNombreToolStripMenuItem.Text = "Lista de usuarios";
            // 
            // MostrarToolStripMenuItem
            // 
            this.MostrarToolStripMenuItem.Name = "MostrarToolStripMenuItem";
            this.MostrarToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.MostrarToolStripMenuItem.Text = "Mostrar";
            // 
            // SalirToolStripMenuItem
            // 
            this.SalirToolStripMenuItem.Name = "SalirToolStripMenuItem";
            this.SalirToolStripMenuItem.Size = new System.Drawing.Size(41, 20);
            this.SalirToolStripMenuItem.Text = "Salir";
//            this.SalirToolStripMenuItem.Click += new System.EventHandler(this.SalirToolStripMenuItem_Click);
            // 
            // frmPrincipal
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(602, 454);
            this.Controls.Add(this.MenuStrip1);
            this.Name = "frmPrincipal";
            this.Text = "Menu";
//            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.frmPrincipal_FormClosing);
            this.MenuStrip1.ResumeLayout(false);
            this.MenuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        internal System.Windows.Forms.MenuStrip MenuStrip1;
        internal System.Windows.Forms.ToolStripMenuItem TipoDeVistaToolStripMenuItem;
        internal System.Windows.Forms.ToolStripMenuItem NormalToolStripMenuItem;
        internal System.Windows.Forms.ToolStripMenuItem CambiarNombreToolStripMenuItem;
        internal System.Windows.Forms.ToolStripMenuItem MostrarToolStripMenuItem;
        internal System.Windows.Forms.ToolStripMenuItem SalirToolStripMenuItem;
    }
}

