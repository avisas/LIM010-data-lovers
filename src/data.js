/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const pokedex = document.getElementById('pokedex');
const datosPokemones = POKEMON.pokemon;
let iconsTipo='';
let esNull='';
for (i = 0; i < datosPokemones.length; i++) { 
	let pokemon = datosPokemones[i];
	let cantMultipliers=0;
	let tiposPokemon = pokemon.type;

	if (pokemon.multipliers===null) {
		esNull='por-atrapar';
	}else{
		cantMultipliers = pokemon.multipliers.length;
	}

	for (n = 0; n < tiposPokemon.length; n++) {
		iconsTipo +=`<img src="img/icon-${tiposPokemon[n]}.png" alt="${tiposPokemon[n]}">`;
	}
	
	pokedex.innerHTML +=`<div class="content-pokemones display-flex ${esNull}">
          <span class="cant-multipliers">x${cantMultipliers}</span>
          <img class="img-pokemon" src="${pokemon.img}">
          <div class="contenido-poke">
            <h2 class="nombre-pokemon">${pokemon.name}</h2>
            <p class="num-pokemon">#${pokemon.num}</p>
            <div class="cont-tipo">${iconsTipo}</div>
          </div>
        </div>`;
  iconsTipo='';
  esNull='';
}


// const mostrarPokemon = (data) => {
//   const newArrayPokemones = [];
//   for(let i = 0; i < data.length; i++){
//   	newArrayPokemones.push({
//   		nombre : data[i].name,
//   		imagen : data[i].img
//   	})

//   }

//   return newArrayPokemones;
// };

// window.example = mostrarPokemon;