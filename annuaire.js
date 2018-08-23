// je récupère la liste à partir du fichier json
// console.log(liste);
var liste = require('./data/liste');
var ul = document.createElement("ul");

function showProfile(event){
	console.log(event.target.textContent);
	console.log(event.target.id);
	window.location.href = './profil.html?id=' + event.target.id;
}

liste.forEach(function(element, index){
	console.log(element);
	var li = document.createElement("li");
	li.innerHTML = element.nom.toUpperCase() + ' ' + element.prenom;
	li.setAttribute("id", index);
	// li.setAttribute("mabalise", element.nom.toUpperCase() + ' ' + element.prenom);
	li.addEventListener("click", showProfile, false);
	ul.appendChild(li);

});

document.getElementById("container").appendChild(ul);