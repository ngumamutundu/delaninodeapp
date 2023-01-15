let http = require('http');
let url = require('url');
let start = function(){
    function onRequest (request, response){
        let pathname = url.parse(request.url).pathname
       console.log(pathname)
        console.log("request received!")
     response.writeHead(200, {"Content-type": "text/plain"});
     response.write("Hello World");
     response.end();
    }
    
    http.createServer(onRequest).listen(8000);
    console.log("server has started!")
}

exports.start = start;
