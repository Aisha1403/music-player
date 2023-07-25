const http = require('http');
const fs = require('fs');

port = 8800;

function handler(req, res){
    console.log(req.url);
    res.writeHead(200, {'contet-type': 'text/html'});

    let filepath;

    switch(req.url){
        case '/':
            filepath = './Homepage.html';
            break;
        case '/coldplay':
            filepath = './coldplay.html';
            break;
        default:
            filepath = './404.html';
            break;
    }

    fs.readFile(filepath,function(err, data){
        if(err){
            console.log('error', err);
            return res.end('<h1>ERROR!!</h1>');
        }

        return res.end(data);
    });
}

const server = http.createServer(handler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log('server is running on port', port);
});