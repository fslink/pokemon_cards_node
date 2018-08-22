var http = require('http');
var express = require('express');
var app = express();

app.listen(9999, function(){
	console.log('server lancé');
});

app.get('/mega_pokedex', function(req, res){
	res.sendFile(__dirname + '/mega_pokedex/pokedex.html');
});

app.get('/pokedex', function(req, res){
	res.sendFile((__dirname + '/pokedex/pokedex.html');
})

app.use(express.static('mega_pokedex'));
