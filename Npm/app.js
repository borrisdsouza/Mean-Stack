var express = require('express');
var app = express();
var path = require("path");


app.set('port', 3000);

app.use(express.static(path.join(__dirname,'public')));

app.use(function(req,res,next){
  console.log(req.method , req.url);
  
  next();
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
