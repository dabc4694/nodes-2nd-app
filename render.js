var fs = require('fs');

function view(templateName, values, response){
    var fc = fs.readFileSync("./views/"+ templateName+ ".html");
   response.write(fc);
}

module.exports.view = view;
