USE  Databinding
GO
/****** Object:  Table [dbo].[Clientes]    Script Date: 06/12/2015 17:13:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Clientes](
	[NroCuenta] [int] NOT NULL,
	[Dni] [bigint] NOT NULL,
	[Apellido] [varchar](50) NULL,
	[Nombre] [varchar](50) NULL,
	[Edad] [int] NULL,
	[Saldo] [float] NULL,
 CONSTRAINT [PK_Clientes] PRIMARY KEY CLUSTERED 
(
	[NroCuenta] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[Clientes] ([NroCuenta], [Dni], [Apellido], [Nombre], [Edad], [Saldo]) VALUES (1, 20111222, N'Rodriguez', N'Pablo', 25, 1)
INSERT [dbo].[Clientes] ([NroCuenta], [Dni], [Apellido], [Nombre], [Edad], [Saldo]) VALUES (2, 25999888, N'Alicia', N'Perez', 55, 1000)
INSERT [dbo].[Clientes] ([NroCuenta], [Dni], [Apellido], [Nombre], [Edad], [Saldo]) VALUES (3, 29333111, N'Juan', N'Lopez', 21, 1000)
INSERT [dbo].[Clientes] ([NroCuenta], [Dni], [Apellido], [Nombre], [Edad], [Saldo]) VALUES (4, 18000999, N'Bichi', N'Borghi', 50, 1000)

