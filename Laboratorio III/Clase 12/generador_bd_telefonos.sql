USE master

if exists (select * from sysdatabases where name='bd_telefonos')
begin
  raiserror('La base de datos existe; elimin�ndola....',0,1)
  DROP database bd_telefonos
end
GO

raiserror('Creando base de datos bd_telefonos....',0,1)
go

CREATE DATABASE bd_telefonos
GO

USE bd_telefonos
GO

CREATE TABLE telefonos
(
  nombre        VARCHAR(30) NOT NULL,
  direccion     VARCHAR(30) NOT NULL,
  telefono      VARCHAR(12) PRIMARY KEY NOT NULL,
  observaciones VARCHAR(240)
)
GO

INSERT INTO telefonos
       VALUES ('Leticia Aguirre Soriano', 'Triana, Sevilla', '954345678', 'Ninguna')
INSERT INTO telefonos
       VALUES ('Pedro Aguado Rodr�guez', 'Alcal� de Henares, Madrid', '918888888', 'Ninguna')
INSERT INTO telefonos
       VALUES ('Alfons Gonz�lez P�rez', 'Argentona, Barcelona', '933333333', 'Director de desarrollo')
INSERT INTO telefonos
       VALUES ('Miguel L�pez Trujillo', 'Mataporquera, Cantabria', '942232323', 'Es propietario de la empresa PUBLICSA')
INSERT INTO telefonos
       VALUES ('Sonia Febril Parra', 'Valdeolivas, Granada', '958565656', 'Ninguna')
INSERT INTO telefonos
       VALUES ('Elena Veiguela Suarez', 'Mux�a, La Coru�a', '981425323', 'Ninguna')
INSERT INTO telefonos
       VALUES ('Ana Mar�a Cuesta Su�er', 'Gij�n, Asturias', '984454545', 'Ninguna')
GO

quit
