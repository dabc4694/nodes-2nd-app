var http = require('http');

//create a server object:
http.createServer(function (request, response) {
    homeRoute(request, response);
}).listen(8080);
console.log("App Running on 'localhost:8080'");

function homeRoute(request, response){
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write('Header\n');
    response.write('Search\n');
    response.end("Footer");

}