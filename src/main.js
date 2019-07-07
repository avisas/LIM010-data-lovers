const contLogin = document.getElementById('cont-login');
const btnSubmit = document.getElementById('inputSubmit');
const enteredUsername = document.getElementById('inputUname').value;
const enteredPassword = document.getElementById('inputPsw').value;
const selectPokemon = document.getElementById('select-pokemon');
const selectName = document.getElementById('select-name');
const selectSpawns = document.getElementById('select-spawns');
const navbar = document.getElementById('navbar');

let sectionPokedex = document.getElementById('pokedex');
let pokedexToShow = getAllPokemon();
let misPokemon = getCatchedPokemon();

btnSubmit.addEventListener('click', () => {
	if (enteredUsername === '' && enteredPassword === '') {
		sectionPokedex.classList.add('flex');
		navbar.classList.add("flex");
		contLogin.classList.add("none");
	}
});

selectPokemon.addEventListener("change", () => {
	console.log('HUBO UN CAMBIO! Select Pokemon');
	switch (selectPokemon.value) {
		case 'all':
			pokedexToShow = getAllPokemon();
			renderPokedex(pokedexToShow);
			break;
		case 'catched':
			pokedexToShow = getCatchedPokemon();
			renderPokedex(pokedexToShow);
			break;
		case 'uncatched':
			pokedexToShow = getUncatchedPokemon();
			renderPokedex(pokedexToShow);
			break;
	};
});

selectName.addEventListener("change", () => {
	console.log('HUBO UN CAMBIO! Select Name');
	switch (selectName.value) {
		case 'default':
			renderPokedex(getAllPokemon());
			break;
		case 'asc':
			orderAscPokemon(misPokemon);
			renderPokedex(misPokemon);
			break;
		case 'desc':
			orderDescPokemon(misPokemon);
			renderPokedex(misPokemon);
			break;
	};
});

selectSpawns.addEventListener("change", () => {
	console.log('HUBO UN CAMBIO! Select Spawn');	
	switch(selectSpawns.value) {
		case 'default':
			renderPokedex(getAllPokemon());
			break;
		case 'moreAttack' :
			orderAscSpawn(getCatchedPokemon());
			renderPokedex(getCatchedPokemon());
			break;
		case 'lessAttack' :
			orderDescSpawn(getCatchedPokemon());
			renderPokedex(getCatchedPokemon());
			break;
	};
});

const renderPokedex = (pokemonList) => {
<<<<<<< HEAD
	sectionPokedex.innerHTML = '';
	for (let pokemon of pokemonList.pokemon) {
		let esNull = '';
		let cantMultipliers = 0;
		let iconsTipo = '';

		if (pokemon.multipliers === null) esNull = 'por-atrapar';
		else cantMultipliers = pokemon.multipliers.length;

		for (let pokemonType of pokemon.type)
			iconsTipo += `<img src="img/icon-${pokemonType}.png" alt="${pokemonType}">`;
		
			sectionPokedex.innerHTML +=
		`<div class="content-pokemones display-flex ${esNull}">
=======
  sectionPokedex.innerHTML = '';
  for (let pokemon of pokemonList.pokemon) {
    let esNull = '';
    let cantMultipliers = 0;
    let iconsTipo = '';

    if (pokemon.multipliers === null) esNull = 'por-atrapar';
    else cantMultipliers = pokemon.multipliers.length;

    for (let pokemonType of pokemon.type)
      iconsTipo += `<img src="img/icon-${pokemonType}.png" alt="${pokemonType}">`;

    sectionPokedex.innerHTML +=
      `<div class="content-pokemones display-flex ${esNull}">
>>>>>>> 9689761b57147181445ef1f0299ac9c5ee258b15
			<span class="cant-multipliers">x${cantMultipliers}</span>
			<img class="img-pokemon" src="${pokemon.img}">
			<div class="contenido-poke">
				<h2 class="nombre-pokemon">${pokemon.name}</h2>
				<p class="num-pokemon">#${pokemon.num}</p>
<<<<<<< HEAD
				<div class="cont-tipo">${iconsTipo}</div>
			</div>
		</div>`;
	};
=======
        <div class="cont-tipo">${iconsTipo}</div>
				<div>${pokemon.avg_spawns}</div>        
			</div>
		</div>`;
  };
>>>>>>> 9689761b57147181445ef1f0299ac9c5ee258b15
};

renderPokedex(pokedexToShow);