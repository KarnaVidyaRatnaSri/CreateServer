var http=require('http');
var impo=require('./second_module');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(impo.message());
    res.write(" hello");
    console.log(impo.message());
    res.end();
}).listen(800);
