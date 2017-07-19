var http = require('http');

//create a server object:
http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write('Hello World!'); //write a response to the client
    response.end(); //end the response
}).listen(8080);