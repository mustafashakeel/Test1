var http = require('http');   // add the http module
var myServer = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("<h1>Hello</h1>");
	response.end();
});    // create a server 

myServer.listen(3000);
console.log("go to http://loscalhost:3000 on your browser");