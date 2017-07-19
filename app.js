var http = require('http');

//create a server object:
http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write('This is befor end.\n'); //write a response to the client
    response.end("Hello World!\n"); //end the response
    response.write("This is after end");
}).listen(8080);