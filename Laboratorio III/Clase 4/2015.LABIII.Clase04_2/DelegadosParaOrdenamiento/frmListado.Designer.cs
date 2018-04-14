namespace DelegadosParaOrdenamiento
{
    partial class frmListado
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.rdoDescendente = new System.Windows.Forms.RadioButton();
            this.lstUsuarios = new System.Windows.Forms.ListView();
            this.ColumnHeader1 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.ColumnHeader2 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.ColumnHeader3 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.ColumnHeader4 = ((System.Windows.Forms.ColumnHeader)(new System.Windows.Forms.ColumnHeader()));
            this.lblOrdenar = new System.Windows.Forms.Label();
            this.grpOrdenamiento = new System.Windows.Forms.GroupBox();
            this.rdoAsc = new System.Windows.Forms.RadioButton();
            this.cboOrdenar = new System.Windows.Forms.ComboBox();
            this.btnAceptar = new System.Windows.Forms.Button();
            this.grpOrdenamiento.SuspendLayout();
            this.SuspendLayout();
            // 
            // rdoDescendente
            // 
            this.rdoDescendente.AutoSize = true;
            this.rdoDescendente.Location = new System.Drawing.Point(79, 64);
            this.rdoDescendente.Name = "rdoDescendente";
            this.rdoDescendente.Size = new System.Drawing.Size(89, 17);
            this.rdoDescendente.TabIndex = 4;
            this.rdoDescendente.TabStop = true;
            this.rdoDescendente.Text = "Descendente";
            this.rdoDescendente.UseVisualStyleBackColor = true;
            //
            // lstUsuarios
            // 
            this.lstUsuarios.Columns.AddRange(new System.Windows.Forms.ColumnHeader[] {
            this.ColumnHeader1,
            this.ColumnHeader2,
            this.ColumnHeader3,
            this.ColumnHeader4});
            this.lstUsuarios.Location = new System.Drawing.Point(24, 21);
            this.lstUsuarios.Name = "lstUsuarios";
            this.lstUsuarios.Size = new System.Drawing.Size(534, 148);
            this.lstUsuarios.TabIndex = 8;
            this.lstUsuarios.UseCompatibleStateImageBehavior = false;
            this.lstUsuarios.View = System.Windows.Forms.View.Details;
            // 
            // ColumnHeader1
            // 
            this.ColumnHeader1.Text = "Nombre";
            this.ColumnHeader1.Width = 166;
            // 
            // ColumnHeader2
            // 
            this.ColumnHeader2.Text = "Edad";
            this.ColumnHeader2.Width = 71;
            // 
            // ColumnHeader3
            // 
            this.ColumnHeader3.Text = "Fecha de Nacimiento";
            this.ColumnHeader3.Width = 190;
            // 
            // ColumnHeader4
            // 
            this.ColumnHeader4.Text = "Tipo";
            this.ColumnHeader4.Width = 103;
            // 
            // lblOrdenar
            // 
            this.lblOrdenar.AutoSize = true;
            this.lblOrdenar.Location = new System.Drawing.Point(6, 27);
            this.lblOrdenar.Name = "lblOrdenar";
            this.lblOrdenar.Size = new System.Drawing.Size(67, 13);
            this.lblOrdenar.TabIndex = 3;
            this.lblOrdenar.Text = "Ordenar Por:";
            // 
            // grpOrdenamiento
            // 
            this.grpOrdenamiento.Controls.Add(this.rdoDescendente);
            this.grpOrdenamiento.Controls.Add(this.lblOrdenar);
            this.grpOrdenamiento.Controls.Add(this.rdoAsc);
            this.grpOrdenamiento.Controls.Add(this.cboOrdenar);
            this.grpOrdenamiento.Location = new System.Drawing.Point(24, 192);
            this.grpOrdenamiento.Name = "grpOrdenamiento";
            this.grpOrdenamiento.Size = new System.Drawing.Size(327, 97);
            this.grpOrdenamiento.TabIndex = 9;
            this.grpOrdenamiento.TabStop = false;
            this.grpOrdenamiento.Text = "Ordenamiento";
            // 
            // rdoAsc
            // 
            this.rdoAsc.AutoSize = true;
            this.rdoAsc.Location = new System.Drawing.Point(171, 64);
            this.rdoAsc.Name = "rdoAsc";
            this.rdoAsc.Size = new System.Drawing.Size(82, 17);
            this.rdoAsc.TabIndex = 5;
            this.rdoAsc.TabStop = true;
            this.rdoAsc.Text = "Ascendente";
            this.rdoAsc.UseVisualStyleBackColor = true;
            this.rdoAsc.CheckedChanged += new System.EventHandler(this.rdoAsc_CheckedChanged);
            // 
            // cboOrdenar
            // 
            this.cboOrdenar.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cboOrdenar.FormattingEnabled = true;
            this.cboOrdenar.Location = new System.Drawing.Point(79, 24);
            this.cboOrdenar.Name = "cboOrdenar";
            this.cboOrdenar.Size = new System.Drawing.Size(233, 21);
            this.cboOrdenar.TabIndex = 2;
            this.cboOrdenar.SelectedIndexChanged += new System.EventHandler(this.cboOrdenar_SelectedIndexChanged);
            // 
            // btnAceptar
            // 
            this.btnAceptar.Location = new System.Drawing.Point(428, 228);
            this.btnAceptar.Name = "btnAceptar";
            this.btnAceptar.Size = new System.Drawing.Size(130, 33);
            this.btnAceptar.TabIndex = 7;
            this.btnAceptar.Text = "&Salir";
            this.btnAceptar.UseVisualStyleBackColor = true;
            this.btnAceptar.Click += new System.EventHandler(this.btnAceptar_Click);
            // 
            // frmListado
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(583, 311);
            this.Controls.Add(this.lstUsuarios);
            this.Controls.Add(this.grpOrdenamiento);
            this.Controls.Add(this.btnAceptar);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.SizableToolWindow;
            this.Name = "frmListado";
            this.Text = "Listado de Usuarios";
            this.Load += new System.EventHandler(this.frmListado_Load);
            this.grpOrdenamiento.ResumeLayout(false);
            this.grpOrdenamiento.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        internal System.Windows.Forms.RadioButton rdoDescendente;
        internal System.Windows.Forms.ListView lstUsuarios;
        internal System.Windows.Forms.ColumnHeader ColumnHeader1;
        internal System.Windows.Forms.ColumnHeader ColumnHeader2;
        internal System.Windows.Forms.ColumnHeader ColumnHeader3;
        internal System.Windows.Forms.ColumnHeader ColumnHeader4;
        internal System.Windows.Forms.Label lblOrdenar;
        internal System.Windows.Forms.GroupBox grpOrdenamiento;
        internal System.Windows.Forms.RadioButton rdoAsc;
        internal System.Windows.Forms.ComboBox cboOrdenar;
        internal System.Windows.Forms.Button btnAceptar;
    }
}