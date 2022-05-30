const http = require('http');

const server = http.createServer(function(req,res){
    res.writeHead(200);
    res.end("<h1>Hello World from Ansible.</h1>")
})

server.listen(3000);