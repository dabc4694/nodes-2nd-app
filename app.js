/*
Here I have added code into homeRoute and called it from the server.

Now when we run the app it will work perfect with localhost:8080,

but

If we then change the url as "localhost:8080/something" , it will show the same page. so we need to change it 
as for this types of urls it should show the error page.

*/

var http = require('http');

//create a server object:
http.createServer(function (request, response) {
    homeRoute(request, response);
}).listen(8080);
console.log("App Running on 'localhost:8080'");

function homeRoute(request, response){
    if(request.url === '/'){ //this will execute for only home requests
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write('Header\n');
        response.write('Search\n');
        response.end("Footer");
    }

}
