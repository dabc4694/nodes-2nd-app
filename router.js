var Profile = require("./profile.js");
var render = require("./render.js");

function home(request, response) {
    if (request.url === '/') {

        response.writeHead(200, { "Content-Type": "text/plain" });
        render.view('header', {}, response);
        render.view('search', {}, response);
        render.view("footer", {}, response);
        response.end();
    }
}

function user(request, response) {
    var username = request.url.replace("/", "");
    if (username.length > 0) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        //response.write('Header\n');
        var studentProfile = new Profile(username);
        render.view('header', {}, response);
        studentProfile.on("end", (profileJSON) => {
            var profileInfo = {
                "username": profileJSON.name,
                "imageURL": profileJSON.gravatar_url,
                "badges": profileJSON.badges.length,
                "JavascriptPoints": profileJSON.points.JavaScript
            };
            
            
            render.view('profile', profileInfo, response);
            render.view("footer", {}, response);
            //response.write(+ '\n');

            // response.write("\n----------------------------------------------------------");
            // response.write("\nThe username is: " + profileInfo.username + "\n");
            // response.write("Total badge(s) : " + profileInfo.badges + "\n");
            // response.write("Points earned in Javascript : " + profileInfo.JavascriptPoints + "\n");
            // response.write("----------------------------------------------------------\n");

            response.end();
        });


        studentProfile.on("error", (error) => {
            //render.view('header', {}, response);
            
            render.view('error', {"errorMessage" : error.message}, response);
            render.view('search', {}, response);
            render.view("footer", {}, response);

            //response.write(error.message);
            response.end();
        });
    }
}

module.exports.home = home;
module.exports.user = user;