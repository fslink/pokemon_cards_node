const req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/fanzeyi/Pokemon-DB/master/pokedex.json', false);
req.send(null);

if(req.status === 200){
	var listePokemons = JSON.parse(req.responseText);
	var ul = document.createElement("ul");

	listePokemons.forEach(function(element, index){
		var li = document.createElement("li");
		li.innerHTML = element.ename.toUpperCase() + ' ' + element.cname;
		li.setAttribute("id", index);
		li.addEventListener("click", showProfile, false);
		ul.appendChild(li);

	});

document.getElementById("container").appendChild(ul);

} else {
	console.log('Status de la réponse %d (%s)', req.status, req.statusText);
}

function showProfile(event){
	window.location.href = './profil.html?id=' + event.target.id;
}