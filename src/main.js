/* Manejo del DOM */
const contLogin = document.getElementById('cont-login');
const btnSubmit = document.getElementById('inputSubmit');
const enteredUsername = document.getElementById('inputUname').value;
const enteredPassword = document.getElementById('inputPsw').value;
const selectPokemon = document.getElementById('select-pokemon');
const navbar = document.getElementById('navbar');
const datosPokemones = mostrarPokemones(POKEMON.pokemon);
let iconsTipo = '';
let esNull = '';
let cantMultipliers = 0;
let tiposPokemon = '';

// Login  
btnSubmit.addEventListener('click', () => {
	if (enteredUsername === '' && enteredPassword === '') {
		pokedex.classList.add('flex');//DEFINIR QUE ES POKEDEX
		navbar.classList.add("flex");
		contLogin.classList.add("none");
	}
});

selectPokemon.addEventListener("change", () => {
	//console.log('HUBO UN CAMBIO!!!');
	if (selectPokemon.value === 'Todos') {
		pokedex.classList.add("soloMisPokemones");
	}
	if (selectPokemon.value === 'Mis Pokémones') {
		showPokemons(datosPokemones);
	}
	if (selectPokemon.value === 'Por atrapar') {
		showPokemons(datosPokemones);
	}
	switch (selectPokemon.value) {
		case 'all':
			//
			break;
		case 'catched':
			//
			break;
		case 'uncatched':
			//
			break;
	}
});


const showPokemons = (datosPokemones) => {
	for (let i = 0; i < datosPokemones.length; i++) {
		pokemon = datosPokemones[i];
		tiposPokemon = pokemon.tipo;//ARRAY

		if (pokemon.cant_pokemon === null) {
			esNull = 'por-atrapar';
		} else { //TENGO POR LO MENOS UN POKEMON...
			cantMultipliers = pokemon.cant_pokemon.length;
		}

		for (let n = 0; n < tiposPokemon.length; n++) {
			iconsTipo += `<img src="img/icon-${tiposPokemon[n]}.png" alt="${tiposPokemon[n]}">`;
			//`<img src="./img/icon-Grass.png" alt="Grass">`;
			//`<img src="./img/icon-Poison.png" alt="Poison">`;
		}

		pokedex.innerHTML += `<div class="content-pokemones display-flex ${esNull}">
			  <span class="cant-multipliers">x${cantMultipliers}</span>
			  <img class="img-pokemon" src="${pokemon.imagen}">
			  <div class="contenido-poke">
				<h2 class="nombre-pokemon">${pokemon.nombre}</h2>
				<p class="num-pokemon">#${pokemon.num}</p>
				<div class="cont-tipo">${iconsTipo}</div>
			  </div>
			</div>`;
		iconsTipo = '';
		esNull = '';
	};
};