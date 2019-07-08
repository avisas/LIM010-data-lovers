const contLogin = document.getElementById('cont-login');
const btnSubmit = document.getElementById('inputSubmit');
const enteredUsername = document.getElementById('inputUname').value;
const enteredPassword = document.getElementById('inputPsw').value;
const selectPokemon = document.getElementById('select-pokemon');
const selectName = document.getElementById('select-name');
const selectAvgSpawns = document.getElementById('select-spawns');
const navbar = document.getElementById('navbar');

let sectionPokedex = document.getElementById('pokedex');
let pokedexToShow = getAllPokemon();
//let misPokemon = getCatchedPokemon();

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
			selectAvgSpawns.value = 'default';
			orderIdPokemon(pokedexToShow);
			renderPokedex(pokedexToShow);   // aqui con el pokedextoshow ya ordenado, lo mando a renderpokedex para que actualice la pantalla.
			break;
		case 'asc':
			selectAvgSpawns.value = 'default';
			orderAscPokemon(pokedexToShow);
			renderPokedex(pokedexToShow);   // aqui con el pokedextoshow ya ordenado, lo mando a renderpokedex para que actualice la pantalla.
			break;
		case 'desc':
			selectAvgSpawns.value = 'default';
			orderDescPokemon(pokedexToShow);
			renderPokedex(pokedexToShow);
			break;
	};
});

selectAvgSpawns.addEventListener("change", () => {
	console.log('HUBO UN CAMBIO! Select Spawn');
	switch (selectAvgSpawns.value) {
		case 'default':
			selectName.value = 'default';
			orderIdPokemon(pokedexToShow);
			renderPokedex(pokedexToShow);   // aqui con el pokedextoshow ya ordenado, lo mando a renderpokedex para que actualice la pantalla.
			break;
		case 'ascSpawns':
			selectName.value = 'default';
			orderAscSpawns(pokedexToShow);
			renderPokedex(pokedexToShow);   // aqui con el pokedextoshow ya ordenado, lo mando a renderpokedex para que actualice la pantalla.
			break;
		case 'descSpawns':
			selectName.value = 'default';
			orderDescSpawns(pokedexToShow);
			renderPokedex(pokedexToShow);
			break;
	};
});

const renderPokedex = (listOfPokemonToShow) => {
	sectionPokedex.innerHTML = '';
	for (let pokemon of listOfPokemonToShow) {
		let esNull = '';
		let cantMultipliers = 0;
		let iconsTipo = '';

		if (pokemon.multipliers === null) esNull = 'por-atrapar';
		else cantMultipliers = pokemon.multipliers.length;

		for (let pokemonType of pokemon.type)
			iconsTipo += `<img src="img/icon-${pokemonType}.png" alt="${pokemonType}">`;

		sectionPokedex.innerHTML +=
			`<div class="content-pokemones display-flex ${esNull}">
			<span class="cant-multipliers">x${cantMultipliers}</span>
			<img class="img-pokemon" src="${pokemon.img}">
			<div class="contenido-poke">
				<h2 class="nombre-pokemon">${pokemon.name}</h2>
				<p class="num-pokemon">#${pokemon.num}</p>
        <div class="cont-tipo">${iconsTipo}</div>
				<div>${pokemon.avg_spawns}</div>        
			</div>
		</div>`;
	};
};

renderPokedex(pokedexToShow);