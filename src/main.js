const header = document.getElementById('header');
const contLogin = document.getElementById('cont-login');
const btnSubmit = document.getElementById('inputSubmit');
const mensajeAlerta = document.getElementById('mensaje-alerta');
const btnMostrarClave = document.getElementById('iconClave');
const enteredUsername = document.getElementById('inputUname');
const enteredPassword = document.getElementById('inputPsw');
const selectPokemon = document.getElementById('select-pokemon');
const selectName = document.getElementById('select-name');
const selectAvgSpawns = document.getElementById('select-avgSpawns');
const selectType = document.getElementById('select-type');
const selectWeaknesses = document.getElementById('select-weaknesses');
const navbar = document.getElementById('navbar');

let sectionPokedex = document.getElementById('pokedex');
let pokedexToShow = getAllPokemon();
//let misPokemon = getCatchedPokemon();
let cadenaMostrar = '';
let claveOculta = 0;

btnSubmit.addEventListener('click', () => {
	if (enteredUsername.value === '' && enteredPassword.value === '') {
		sectionPokedex.classList.add('flex');
		navbar.classList.add('flex');
		contLogin.classList.add('none');
		header.classList.add('show-elements');
	} else {
		mensajeAlerta.innerHTML = '**Usuario o/y contraseña incorrecta, intenta de nuevo.';
		enteredPassword.value = '';
		enteredUsername.value = '';
	}
});

btnMostrarClave.addEventListener('click', () => {
	if (claveOculta === 0) {
		enteredPassword.setAttribute('type', 'text');
		claveOculta = 1;
		btnMostrarClave.classList.add('mostrar');
	} else {
		enteredPassword.setAttribute('type', 'password');
		claveOculta = 0;
		btnMostrarClave.classList.remove('mostrar');
	}
});

selectPokemon.addEventListener("change", () => {
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

selectType.addEventListener('change', () => {
	if (selectType.value === 'default') {
		renderPokedex(pokemonReducedData);
	} else {
		renderPokedex(getTypePokemon(selectType.value));
	}
});

selectWeaknesses.addEventListener('change', () => {
	if (selectWeaknesses.value === 'default') {
		renderPokedex(getAllPokemon());
	} else {
		renderPokedex(getWeaknessesPokemon(selectWeaknesses.value));
	}
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
				<div>${pokemon.avgSpawns}</div>        
			</div>
		</div>`;
	};
};

const renderTypeOrWeaknessesPokedex = (select, pokemonList) => {
	for (let index = 0; index < pokemonList.length; index++) {
		select.innerHTML += `<option value=${pokemonList[index]}>${pokemonList[index]}</option>`;
	};
};

renderPokedex(pokedexToShow);
renderTypeOrWeaknessesPokedex(selectType, getListTypePokemon());
renderTypeOrWeaknessesPokedex(selectWeaknesses, getListWeaknessesPokemon());