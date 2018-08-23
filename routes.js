var http = require('http');
var express = require('express');
var app = express();

app.use('/js2', express.static('./annuaire.js'));
app.use('/data', express.static('./data/liste.json'));

app.use('/js', express.static('./mega_pokedex/js'));
app.use('/css', express.static('./mega_pokedex/css/'));
app.use('/bootstrap', express.static('./mega_pokedex/bootstrap'));

app.use('/css1', express.static('./pokedex/css'));
app.use('/js1', express.static('./pokedex/js'));

app.get('/', function(req, res){
	res.send('Hello World');
});

app.get('/mega_pokedex', function(req, res){
	res.sendFile(__dirname + '/mega_pokedex/pokedex.html');
});

app.get('/pokedex', function(req, res){
	res.sendFile(__dirname + '/pokedex/pokedex.html');
});

app.get('/profil.html', function(req, res){
	res.sendFile(__dirname + '/pokedex/profil.html');
});

app.get('/profilPokemon.html', function(req, res){
	res.sendFile(__dirname + '/mega_pokedex/profilPokemon.html');
});

app.get('/listeEleves', function(req, res){
	res.sendFile(__dirname + '/annuaire.html');
});

app.listen(9999, function(){
	console.log('server lancé');
});
