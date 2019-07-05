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
    navbar.classList.add('flex');
    contLogin.classList.add('none');
  }
});

selectPokemon.addEventListener('change', () => {
  console.log('HUBO UN CAMBIO! Select Pokemon');
  switch (selectPokemon.value) {
    case 'all':
      // pokedexToShow = getAllPokemon();
      renderPokedex(getAllPokemon());
      break;
    case 'catched':
      // pokedexToShow = ;
      renderPokedex(getCatchedPokemon());
      break;
    case 'uncatched':
      // pokedexToShow = getUncatchedPokemon();
      renderPokedex(getUncatchedPokemon());
      break;
  };
});
selectName.addEventListener('change', () => {
  switch (selectName.value) {
    case 'default':
      renderPokedex(getAllPokemon());
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
selectSpawns.addEventListener('change', () => {
  switch (selectSpawns.value) {
    case 'default':
      renderPokedex(getAllPokemon());
      break;
    case 'ascSpawns':
      orderAscSpawns(misPokemon);
      renderPokedex(misPokemon);
      break;
    case 'descSpawns':
        orderDescSpawns(misPokemon);
      renderPokedex(misPokemon);
      break;
  };
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
				<div>${pokemon.avg_spawns}</div>        
			</div>
		</div>`;
  };
};

renderPokedex(pokedexToShow);