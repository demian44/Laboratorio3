// Tipos
let batman: string = "Bruce";
let superman: string = "Clark";

let existe: boolean = false;

// Tuplas
let parejaHeroes: string[] = [batman, superman];
let villano: [string, number, boolean] = ["Lex Lutor", 5, true];

// Arreglos
let aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

//Enumeraciones
let fuerzaFlash: number = 5;
let fuerzaSuperman: number = 100;
let fuerzaBatman: number = 1;
let fuerzaAcuaman: number = 0;

// Retorno de funciones
function activar_batiseñal(): string {
  return "activada";
}

let pedir_ayuda_2 = () => console.log("Auxilio!!!");

function pedir_ayuda() {
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder: string = "100";
let largoDelPoder: number = poder.length;
console.log(largoDelPoder);
