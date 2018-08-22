var url = window.location.href;

var params = (new URL(document.location)).searchParams;

var info = params.get("id");

const req = new XMLHttpRequest();
req.open('GET', 'https://api.pokemontcg.io/v1/cards/' + info, false);
req.send(null);
var pokemon = null;

// Test the reponse request
if(req.status === 200){
	console.log("Réponse reçue");
	pokemon = JSON.parse(req.responseText);
	console.log(pokemon.card.imageUrlHiRes);

} else {
	console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}

var ul = document.createElement('ul');
var container = document.getElementById('container');
var containerImage = document.getElementById('container-image');

var img = document.createElement('img');
img.setAttribute('src', pokemon.card.imageUrlHiRes);
img.setAttribute('id', 'imageUrlHiRes');

setTimeout(function(){
	containerImage.appendChild(img);
}, 1000);

try {
	for (var k in pokemon.card){
    if (pokemon.card.hasOwnProperty(k)) {
    	var li = document.createElement('li');
        li.innerHTML = k + ' : ' + pokemon.card[k];
        ul.appendChild(li);
    }
}
	container.appendChild(ul);

} catch(e) {
	console.log(e);
}
