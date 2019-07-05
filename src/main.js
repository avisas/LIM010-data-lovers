const contLogin = document.getElementById('cont-login');
const btnSubmit = document.getElementById('inputSubmit');
const enteredUsername = document.getElementById('inputUname').value;
const enteredPassword = document.getElementById('inputPsw').value;
const selectPokemon = document.getElementById('select-pokemon');
const selectName = document.getElementById('select-name');
const selectAttack = document.getElementById('select-attack');
const navbar = document.getElementById('navbar');

let sectionPokedex = document.getElementById('pokedex');
let pokedexToShow = getAllPokemon();

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
			renderPokedex(pokedexToShow);
			break;
		case 'asc':
			orderAscPokemon(pokedexToShow);
			renderPokedex(pokedexToShow);
			break;
		case 'desc':
			orderDescPokemon(pokedexToShow);
			renderPokedex(pokedexToShow);
			break;
	};
});

selectAttack.addEventListener("change", () => {
	console.log('HUBO UN CAMBIO! Select Attack');	
});

const renderPokedex = (pokemonList) => {
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
			<span class="cant-multipliers">x${cantMultipliers}</span>
			<img class="img-pokemon" src="${pokemon.img}">
			<div class="contenido-poke">
				<h2 class="nombre-pokemon">${pokemon.name}</h2>
				<p class="num-pokemon">#${pokemon.num}</p>
				<div class="cont-tipo">${iconsTipo}</div>
			</div>
		</div>`;
	};
};

renderPokedex(pokedexToShow);