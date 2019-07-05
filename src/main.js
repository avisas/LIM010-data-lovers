const contLogin = document.getElementById('cont-login');
const btnSubmit = document.getElementById('inputSubmit');
const enteredUsername = document.getElementById('inputUname').value;
const enteredPassword = document.getElementById('inputPsw').value;
const selectPokemon = document.getElementById('select-pokemon');
const navbar = document.getElementById('navbar');
let sectionPokedex = document.getElementById('pokedex');
let pokedexToShow = POKEMON_RAW_DATA;//should always be updated when the list of pokemon is updated

btnSubmit.addEventListener('click', () => {
	if (enteredUsername === '' && enteredPassword === '') {
		sectionPokedex.classList.add('flex');
		navbar.classList.add("flex");
		contLogin.classList.add("none");
	}
});

selectPokemon.addEventListener("change", () => {
	//console.log('HUBO UN CAMBIO!!!');
	switch (selectPokemon.value) {
		case 'all':
			renderPokedex(pokedexToShow);
			break;
		case 'catched':
			renderPokedex(/*TO BE DEFINED*/);
			break;
		case 'uncatched':
			renderPokedex(/*TO BE DEFINED*/);
			break;
	}
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
		if (pokemon.id===74) console.log([esNull, pokemon.img]);
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