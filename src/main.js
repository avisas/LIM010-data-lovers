const header = document.getElementById('header');
const contLogin = document.getElementById('cont-login');
const btnSubmit = document.getElementById('btn-submit');
const mensajeAlerta = document.getElementById('mensaje-alerta');
const btnMostrarClave = document.getElementById('icon-clave');
const enteredUsername = document.getElementById('input-name');
const enteredPassword = document.getElementById('input-password');
const selectPokemon = document.getElementById('select-pokemon');
const selectName = document.getElementById('select-name');
const selectAvgSpawns = document.getElementById('select-avg-spawns');
const selectType = document.getElementById('select-type');
const selectWeaknesses = document.getElementById('select-weaknesses');
const selectEgg = document.getElementById('select-egg');
const navbar = document.getElementById('navbar');
const btnMenu = document.getElementById('btn-menu');
const pokemonReducedData = reducirDataPokemon(newFunction());
let clean = document.getElementById('btn-clean');
let exit = document.getElementById('btn-exit');
let sectionPokedex = document.getElementById('pokedex');
let pokedexToShow = masterFilter(pokemonReducedData, 'all', 'default', 'default', 'default');
let claveOculta = 0;
let menuOpen = 0;
let pokemonPercentages = null;// esta variable se actualizara y contendra una array con los porcentajes

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
clean.addEventListener('click', () => {
  document.getElementById('select-pokemon').value = 'all';
  document.getElementById('select-name').value = 'default';
  document.getElementById('select-avg-spawns').value = 'default';
  document.getElementById('select-type').value = 'default';
  document.getElementById('select-weaknesses').value = 'default';
  document.getElementById('select-egg').value = 'default';
  pokedexToShow = masterFilter(pokemonReducedData, 'all', 'default', 'default', 'default');
  renderPokedex(pokedexToShow);
});

exit.addEventListener('click', () => {
  sectionPokedex.classList.remove('flex');
  navbar.classList.remove('flex');
  contLogin.classList.remove('none');
  header.classList.remove('show-elements');
});

const renderPokedex = (listOfPokemonToShow) => {
  sectionPokedex.innerHTML = '';
  if (listOfPokemonToShow.length === 0) sectionPokedex.innerHTML = '<p class="alertNot">Lo siento, no se encontraron Pokemons. :(</p>';
  for (let pokemon of listOfPokemonToShow) {
    let esNull = '';
    let cantMultipliers = 0;
    let iconsTipo = '';
    let tipoEgg = '';
    let cantCandy = pokemon.candyCount;
    if (pokemon.candyCount === undefined) {
      cantCandy = 0;
    };
    if (pokemon.multipliers === null) {
      esNull = 'por-atrapar';
    } else {
      cantMultipliers = pokemon.multipliers.length;
    }
    if (pokemon.egg !== 'Not in Eggs') {
      tipoEgg = `<span class="line-vertical"></span><div class="item-tripack"><div class='cont-tipo'><img src="img/icon-huevo.png" alt="icon-huevo">
      <p class='text-tripack'>${pokemon.egg}</p></div></div>`;
    }
    for (let pokemonType of pokemon.type)
      iconsTipo += `<div class='cont-tipo'><img src="img/icon-${pokemonType}.png" alt="${pokemonType}">
      <strong class='text-tripack'>${pokemonType}</strong></div>`;

    sectionPokedex.innerHTML += `<div class="content-pokemones display-flex ${esNull}">
    <span class="cant-multipliers">x${cantMultipliers}</span>
    <img class="img-pokemon" src="${pokemon.img}">
    <div class="contenido-poke">
      <h2 class="nombre-pokemon">${pokemon.name}</h2>
<!-- <p class="num-pokemon">#${pokemon.num}</p> -->
      <div class='info-tripack display-flex'>
        <div class="item-tripack ">${iconsTipo}</div>
        ${tipoEgg}
      </div>
      <div class='info-tripack display-flex'>
        <div class='item-tripack'>
          <p class="num-pokemon">${pokemon.weight}</p>
          <strong class='text-tripack'>Peso</strong>
        </div>
        <span class="line-vertical"></span>
        <div class='item-tripack'>
          <p class="num-pokemon">${pokemon.avgSpawns}</p>
          <strong class='text-tripack'>% Spawns</strong>
        </div>
        <span class="line-vertical"></span>
        <div class='item-tripack'>
          <p class="num-pokemon">${pokemon.height}</p>
          <strong class='text-tripack'>Altura</strong>
        </div>
      </div>
      <table class="more-info">
  <tr>
    <th>Hora de Spawn:</th>
    <td>${pokemon.spawnTime}</td>
  </tr>
  <tr>
    <th>Debilidad:</th>
    <td>${ pokemon.weaknesses.toString().replace(/,/g, ', ')}</td>
  </tr>
  <tr>
    <th>Caramelo:</th>
    <td>${pokemon.candy}</td>
  </tr>
  <tr>
    <th>Cant. Caramelo:</th>
    <td>${cantCandy}
    </td>
  </tr>
</table>
    </div>
    
    <button id="" class="btn btn-more"></button>
</div>`;
  };
};
const someFilterValueWasUpdated = () => {
  pokedexToShow = masterFilter(pokemonReducedData, selectPokemon.value, selectType.value, selectWeaknesses.value, selectEgg.value);
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

for (let pokemonType of getPokemonTypes(pokemonReducedData)) {
  selectType.innerHTML += `<option value=${pokemonType}>${pokemonType}</option>`;
  selectWeaknesses.innerHTML += `<option value=${pokemonType}>${pokemonType}</option>`;
}

pokemonPercentages = calculateEggPercentage(pokemonReducedData);
selectEgg.innerHTML += `<option value="2 km">2 km -- ${pokemonPercentages['km2']}%</option>`;
selectEgg.innerHTML += `<option value="5 km">5 km -- ${pokemonPercentages['km5']}%</option>`;
selectEgg.innerHTML += `<option value="10 km">10 km -- ${pokemonPercentages['km10']}%</option>`;
selectEgg.innerHTML += `<option value="Not in Eggs">Not in Eggs -- ${pokemonPercentages['noEgg']}%</option>`;

renderPokedex(pokedexToShow);

function newFunction() {
  return POKEMON.pokemon;
}