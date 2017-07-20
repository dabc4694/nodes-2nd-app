var router = require("./router.js");
var http = require('http');

//create a server object:
http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(8080);
console.log("App Running on 'localhost:8080'");