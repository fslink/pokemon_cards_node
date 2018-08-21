const req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/fanzeyi/Pokemon-DB/master/pokedex.json', false);
req.send(null);

if(req.status === 200){
	var listePokemons = JSON.parse(req.responseText);
	var url = window.location.href;

	var params = (new URL(document.location)).searchParams;

	var info = params.get("id"); // is the string "Jonathan"
	var  goodPokemon = listePokemons[info];

	var nom = document.createElement("h3");
	nom.innerHTML = goodPokemon.cname + ' ' + goodPokemon.id + ' ' + goodPokemon.cname + ' ' + goodPokemon.ename;

	var table_base = document.createElement("ul");
	var base = goodPokemon.base;

	var li_Attack = document.createElement('li');
	li_Attack.innerHTML = 'Attack' + ' ' + base.Attack;
	table_base.appendChild(li_Attack);

	var li_Defense = document.createElement('li');
	li_Defense.innerHTML = 'Defense' + ' ' + base.Defense;
	table_base.appendChild(li_Defense);

	var li_HP = document.createElement('li');
	li_HP.innerHTML = 'HP' + ' ' + base.HP;
	table_base.appendChild(li_HP);

	var li_Spk = document.createElement('li');
	li_Spk.innerHTML = 'Sp.Atk' + ' ' + base['Sp.Atk'];
	table_base.appendChild(li_Spk);

	var cont = document.getElementById("container");
	cont.appendChild(nom);
	cont.appendChild(table_base);
	
} else {
	console.log('Status de la réponse %d (%s)', req.status, req.statusText);
}

