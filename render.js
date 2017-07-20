var fs = require('fs');

function mergeValues(fc, values){

    for(var key in values){
        fc = fc.replace("{{" + key + "}}", values[key]);
    }
    return fc;
}

function view(templateName, values, response){
    var fc = fs.readFileSync("./views/"+ templateName+ ".html", {"encoding": "utf8"});
    fc = mergeValues(fc, values);
    response.write(fc);
}

module.exports.view = view;
