//Load de JSON file from the pokmeon API
const req = new XMLHttpRequest();
req.open('GET', 'https://api.pokemontcg.io/v1/cards', false);
req.send(null);
var listCards = null;

// Test the reponse request
if(req.status === 200){
	console.log("Réponse reçue " + req.status);
	listCards = JSON.parse(req.responseText);

} else {
	console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}

function toPokemonProfile(event){
	var idPok = event.currentTarget.id;
	window.location.href = './profilPokemon.html?id=' + idPok;
}

//Create dom node for table
var container = document.getElementById('container');
var cards = listCards['cards'];
var table = document.getElementById('pokemon-table');

for (var i = 0; i < cards.length; i++) {
	var tr = document.createElement('tr');
	tr.setAttribute('id', cards[i].id);
	tr.className = "pokemon";
	var tdName = document.createElement('td');
	tdName.className = "name";
	var tdTypes = document.createElement('td');
	var tdNationalPokedexNumber = document.createElement('td');
	var tdImageUrl = document.createElement('td');
	tdName.innerHTML = cards[i].name;

	if(cards[i].types != undefined){
		for (var j = 0; j < cards[i].types.length; j++) {
			tdTypes.innerHTML = cards[i].types[j];
		}
	}
	tdNationalPokedexNumber.innerHTML = cards[i].nationalPokedexNumber;
	var imgImage = document.createElement('img');
	imgImage.setAttribute('src', cards[i].imageUrl);
	imgImage.className = "img-max-width";
	tdImageUrl.appendChild(imgImage);
	
	tr.appendChild(tdName);
	tr.appendChild(tdTypes);
	tr.appendChild(tdNationalPokedexNumber);
	tr.appendChild(tdImageUrl);
	tr.addEventListener('click', toPokemonProfile, false);
	table.appendChild(tr);
}

var options = {
  valueNames: ['pokemon', 'name'],
  page: 10,
  pagination: true
};

var tableList = new List('hacker-list', options);
