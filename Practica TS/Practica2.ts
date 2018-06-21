// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

let contar = function (heroes: string[]): number {
  return heroes.length;
}

let superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];

contar(superHeroes);

//Parametros por defecto
 let llamarBatman = (llamar?: boolean): void => {
  llamar ? console.log("Batiseñal activada") : console.log("Batiseñal desactivada");
}

llamarBatman();

// Rest?
// let unirHeroes2 : (personas:string[]){}=>string

let unirheroes = (...personas: string[]): string => personas.join(", ");


unirheroes("asdas","asdas","asdas","asdas","asdas","asdas","asdas");

// Tipo funcion
function noHaceNada(numero:number, texto:string, booleano:boolean, arreglo:string[]) {

}
  
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco = noHaceNada;
