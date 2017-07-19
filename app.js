/*The method response.write("String") does not work if we write after 
response.end()

Conclusion: Whatever written after response.end() will not be able to 
do anything with the response object.
*/
var http = require('http');

//create a server object:
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    //response.write('This is befor end.\n'); //write a response to the client
    setInterval(function(){
        response.write("This is before end\n");
    }, 1000);
    response.end("Hello World!\n"); //end the response
    //response.write("This is after end");
}).listen(8080);
console.log("App Running on 'localhost:8080'");