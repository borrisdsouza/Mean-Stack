var express = require('express');
var app = express();
var path = require("path");


app.set('port', 3000);

app.get('/',function (reg, res){
    console.log("Get the home page");
    res
    .status(200)
    .sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/json',function (reg, res){
    console.log("Get the json");
    res
    .status(200)
    .json({"Json Date" : true});
});

app.get('/file',function (reg, res){
    console.log("Get the file");
    res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
});



var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Listening on" + port);
});
