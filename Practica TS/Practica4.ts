class Person {
  name:string;
  age:number;
  constructor(age:number,name:string) {
    this.age = age;
    this.name = name;
  }
  
  saludar = ()=> "Hola soy " + this.name + "y tengo " + this.age + " años."
}


let persona:Person = new Person(29,"demian");

console.log(persona);