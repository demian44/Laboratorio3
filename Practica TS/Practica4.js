var Person = /** @class */ (function () {
    function Person(age, name) {
        var _this = this;
        this.saludar = function () { return "Hola soy " + _this.name + "y tengo " + _this.age + " años."; };
        this.age = age;
        this.name = name;
    }
    return Person;
}());
var persona = new Person(29, "demian");
console.log(persona);
