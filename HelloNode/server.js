var http = require('http');
var fs = require('fs');
var connect = require('connect');
var app = connect();

http.createServer(function(req,res){
    if(req.method == 'GET' && req.url == "/"){
        res.writeHead(200,{'Context-Type':'text/html'});
        fs.createReadStream('./Html/index.html').pipe(res);
    }else{
        urlNotFound(res);
    }
}).listen(3001);


function urlNotFound(res){
    res.writeHead(404,{'Context-Type':'text/plain'});
    res.write("file not found");
    res.end();
}