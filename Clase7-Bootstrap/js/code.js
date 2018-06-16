
var miFilter = function () {

    var array = [
        { nombre: "pepe", nota: 2 },
        { nombre: "pepe", nota: 7 },
        { nombre: "pepe", nota: 8 }];

    array.filter(function (num) {
        if (num.nota > 2)
            var coso = num;
        console.log(coso);
    })
}



var miMap = function () {

    var array = [
        { nombre: "pepe", nota: 2 },
        { nombre: "pepe", nota: 7 },
        { nombre: "pepe", nota: 8 }];

    array.map(function (num) {
        num.nota *= num.nota;
        var coso = num;
        console.log(coso);
    });
}


var miReduce = function () {

    var array = [
        { nombre: "pepe", nota: 2 },
        { nombre: "pepe", nota: 7 },
        { nombre: "pepe", nota: 8 }];

    var coso = array.reduce(function (total, num) {
        return total += num.nota;
    },0);

    console.log(coso);
}