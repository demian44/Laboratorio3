var express = require("express");
var cors = require("cors");
var corsOptions = { origin: "*", optionSucessStatus: 200 };
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors(corsOptions));

var personas = require('./MOCK_DATA.json');

app.get("/personas", function (req, res) {

    res.send(personas);
});


app.post("/nuevaPersona", function (req, res) {
    setTimeout(function () {
        console.log("Llego al servidor " + JSON.stringify(req.body));
        console.log((req.body.nombre != undefined && req.body.nombre != ""));

        if ((req.body.nombre != undefined && req.body.nombre != "") && (req.body.apellido != undefined && req.body.nombre != "") && (req.body.telefono != undefined && req.body.telefono != "") && (req.body.fecha != undefined && req.body.fecha != "")) {

            console.log("Sale del servidor " + "{'respuesta': 'ok'}");
            personas.push(req.body);

            res.send({ 'respuesta': 'ok' });

            return;
        }
        console.log("Sale del servidor " + "{'respuesta': 'error'}")
        res.send({ 'respuesta': 'error' });
    }, 2000);

});

app.post("/postearNuevaEntrada", function (req, res) {
    var waitTill = new Date(new Date().getTime() + 10 * 1000);
    while (waitTill > new Date()) { }
    //if (req.query.cod == '1') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    // Note: the 2 lines above could be replaced with this next one:
    // res.writeHead(200, {'Content-Type': 'application/json'})

    res.write(JSON.stringify({ date: new Date().toLocaleString() }));
    res.end();
});


app.post("/login", function (req, res) {
    setTimeout(function () {
        console.log("Llego al servidor " + JSON.stringify(req.body));
        console.log((req.body.email != undefined && req.body.password != ""));
        if ((req.body.email != undefined && req.body.email == "demian44@pepe")
            && (req.body.password != undefined && req.body.password == "1234")) {

            console.log("Sale del servidor " + "{'autenticado': 'si','color':'red','font-style':'italic'}");


            res.send({ 'autenticado': 'si', 'color': 'red', 'font-style': 'italic' });

            return;
        }
        console.log("Sale del servidor " + "{'autenticado': 'no'}")
        res.send({ 'autenticado': 'no' });
    }, 2000);

});


app.listen(1337, function () {
    console.log("Api en el puerto 3000");
});