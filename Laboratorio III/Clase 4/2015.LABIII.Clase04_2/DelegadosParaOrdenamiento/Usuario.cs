using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DelegadosParaOrdenamiento
{
    public class Usuario
    {
        private String _nombre;
        private String _apellido;
        private TipoDeUsuario _tipoUsuario;

        public TipoDeUsuario TipoUsuario
        {
            get { return _tipoUsuario; }
            set { _tipoUsuario = value; }
        }
        
        public String Apellido
        {
            get { return _apellido; }
            set { _apellido = value; }
        }
        
        public String Nombre
        {
            get { return _nombre; }
            set { _nombre = value; }
        }

        public Usuario(String apellido, String nombre)
        {
            this._apellido = apellido;
            this._nombre = nombre;
        }
        public Usuario(String apellido, String nombre, TipoDeUsuario tipoUsuario):this(nombre:nombre, apellido:apellido)
        {
            this._tipoUsuario = tipoUsuario;
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb.Append("--Apellido: " + this._apellido);
            sb.Append("--Nombre: " + this._nombre);
            sb.Append("--Tipo de Usuario: " + this._tipoUsuario.ToString());

            return sb.ToString();
        }

        public static int OrdenarPorApellidoDesc(Usuario u1, Usuario u2)
        {
            return String.Compare(u2._apellido, u1._apellido);
        }
        public static int OrdenarPorApellidoAsc(Usuario u1, Usuario u2)
        {
            return String.Compare(u1._apellido, u2._apellido);
        }

        public static int OrdenarPorNombreDesc(Usuario u1, Usuario u2)
        {
            return String.Compare(u2._nombre, u1._nombre);
        }
        public static int OrdenarPorNombreAsc(Usuario u1, Usuario u2)
        {
            return String.Compare(u1._nombre, u2._nombre);
        }

        public static int OrdenarPorTipoUsuarioDesc(Usuario u1, Usuario u2)
        {
            return String.Compare(u2._tipoUsuario.ToString(), u1._tipoUsuario.ToString());
        }
        public static int OrdenarPorTipoUsuarioAsc(Usuario u1, Usuario u2)
        {
            return String.Compare(u1._tipoUsuario.ToString(), u2._tipoUsuario.ToString());
        }

    }
}
