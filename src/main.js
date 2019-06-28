/* Manejo del DOM */
const contLogin = document.getElementById('cont-login');    
const btnSubmit = document.getElementById('inputSubmit');    
const pokedex = document.getElementById('pokedex');
const datosPokemones = POKEMON.pokemon;
let iconsTipo='';
let esNull='';

 // Login  
btnSubmit.addEventListener("click", () => {
    const enteredUsername = document.getElementById('inputUname').value;
    const enteredPassword = document.getElementById('inputPsw').value;
    if (enteredUsername == "laboratoria" && enteredPassword == "LABORATORIA") {
        pokedex.classList.add("flex");
        contLogin.classList.add("none");
    } else {
        }
    });

for (i = 0; i < datosPokemones.length; i++) { 
	let pokemon = datosPokemones[i];
	let cantMultipliers=0;
	let tiposPokemon = pokemon.type;

	if (pokemon.multipliers===null) {
		esNull='por-atrapar';
	}else{
		cantMultipliers = pokemon["multipliers"].length;
	}
	for (n = 0; n < tiposPokemon.length; n++) {
     iconsTipo +=`<img src="img/icon-${tiposPokemon[n]}.png" alt="${tiposPokemon[n]}">`;
   }
	
	pokedex.innerHTML +=`<div class="content-pokemones ${esNull}">
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