var http = require('http');
var url = require('url');
var querystring = require('querystring');
var EventEmitter = require('events');


var server = http.createServer(function(req, res) {

    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});

    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);

    } else {
        res.write('Vous devez bien avoir un prénom et un nom, nan ?');
    }

    res.end();
});

var myEmitter = new EventEmitter();

myEmitter.on('event_rigolo', (insulte1, insulte2) => {
    console.log(insulte1 + ' ' + insulte2);
});

server.listen(8080);
myEmitter.emit('event_rigolo', 'bande de batard', 'bande de fils de pute');