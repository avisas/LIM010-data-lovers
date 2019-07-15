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
const selectEgg = document.getElementById('select-egg');
const navbar = document.getElementById('navbar');
const btnMenu = document.getElementById('btn-menu');

let sectionPokedex = document.getElementById('pokedex');
let pokedexToShow = masterFilter('all', 'default', 'default', 'default');
let claveOculta = 0;
let menuOpen = 0;
let pokemonPercentages = null; //esta variable se actualizara y contendra una array con los porcentajes

btnSubmit.addEventListener('click', () => {
  if (enteredUsername.value === '' && enteredPassword.value === '') {
    sectionPokedex.classList.add('flex');
    navbar.classList.add('flex');
    contLogin.classList.add('none');
    header.classList.add('show-elements');
  } else {
    mensajeAlerta.innerHTML = '**Usuario o/y contraseña incorrecta, intenta de nuevo.**';
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

btnMenu.addEventListener('click', () => {
  if (menuOpen === 0) {
    navbar.classList.add('navbar-show');
    btnMenu.classList.add('btn-menu-activo');
    menuOpen = 1;
  } else {
    navbar.classList.remove('navbar-show');
    btnMenu.classList.remove('btn-menu-activo');
    menuOpen = 0;
  }
});

const renderPokedex = (listOfPokemonToShow) => {
  sectionPokedex.innerHTML = '';
  if (listOfPokemonToShow.length === 0) sectionPokedex.innerHTML = '<p>No se encontraron Pokemons!</p>';
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
      <button id="" class="btn btn-more"></button>
      </div>`;
  };
};

const someFilterValueWasUpdated = () => {
  pokedexToShow = masterFilter(selectPokemon.value, selectType.value, selectWeaknesses.value, selectEgg.value);
  masterSorter(pokedexToShow, selectName.value, selectAvgSpawns.value);
  renderPokedex(pokedexToShow);
};

const someSorterValueWasUpdated = () => {
  masterSorter(pokedexToShow, selectName.value, selectAvgSpawns.value);
  renderPokedex(pokedexToShow);
};

selectPokemon.addEventListener('change', someFilterValueWasUpdated);
selectType.addEventListener('change', someFilterValueWasUpdated);
selectWeaknesses.addEventListener('change', someFilterValueWasUpdated);
selectEgg.addEventListener('change', someFilterValueWasUpdated);

selectName.addEventListener('change', () => {
  selectAvgSpawns.value = 'default';
  someSorterValueWasUpdated();
});

selectAvgSpawns.addEventListener('change', () => {
  selectName.value = 'default';
  someSorterValueWasUpdated();
});

for (let pokemonType of getPokemonTypes()) {
  selectType.innerHTML += `<option value=${pokemonType}>${pokemonType}</option>`;
  selectWeaknesses.innerHTML += `<option value=${pokemonType}>${pokemonType}</option>`;
}

pokemonPercentages = calculateEggPercentage();
selectEgg.innerHTML += `<option value="2 km">2 km -- ${pokemonPercentages["2km"]}%</option>`;
selectEgg.innerHTML += `<option value="5 km">5 km -- ${pokemonPercentages["5km"]}%</option>`;
selectEgg.innerHTML += `<option value="10 km">10 km -- ${pokemonPercentages["10km"]}%</option>`;
selectEgg.innerHTML += `<option value="Not in Eggs">Not in Eggs -- ${pokemonPercentages["noEgg"]}%</option>`;

renderPokedex(pokedexToShow);