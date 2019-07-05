const todoPokemon = POKEMON.pokemon;
const pokemonesArray = () => {
  const newArrayPokemones = [];
  for (let i = 0; i < todoPokemon.length; i++) {
    newArrayPokemones.push({
      id: todoPokemon[i].id, 
  		num: todoPokemon[i].num,  		
  		name: todoPokemon[i].name,
  		img: todoPokemon[i].img,
  		type: todoPokemon[i].type,
      height: todoPokemon[i].height,
      weight: todoPokemon[i].weight,
      candy: todoPokemon[i].candy,
      candy_count: todoPokemon[i].candy_count,
      egg: todoPokemon[i].egg,
      avg_spawns: todoPokemon[i].avg_spawns,
      multipliers: todoPokemon[i].multipliers,
      weaknesses: todoPokemon[i].weaknesses,
      prev_evolution: todoPokemon[i].prev_evolution,
      next_evolution: todoPokemon[i].next_evolution
  	});
  }
  return newArrayPokemones;
};
window.example = pokemonesArray;



const createEmptyObj = () => {
  return {
    pokemon: []
  };
};

const getAllPokemon = () => {
  let pokedexAll = createEmptyObj();
  pokedexAll.pokemon = pokemonesArray().filter(pkm => true);
  return pokedexAll;
};

const getCatchedPokemon = () => {
  let pokedexCatched = createEmptyObj();
  pokedexCatched.pokemon = pokemonesArray().filter(pkm => pkm.multipliers);
  return pokedexCatched;
};

const getUncatchedPokemon = () => {
  let pokedexUncatched = createEmptyObj();
  pokedexUncatched.pokemon = pokemonesArray().filter(pkm => !(pkm.multipliers));
  return pokedexUncatched;
};

const orderAscPokemon = (pokedexToShow) => {
  pokedexToShow.pokemon.sort((pkmA, pkmB) => {
    if (pkmA.name < pkmB.name) return -1;
    if (pkmA.name > pkmB.name) return 1;
    return 0;
  });
};

const orderDescPokemon = (pokedexToShow) => {
  pokedexToShow.pokemon.sort((pkmA, pkmB) => {
    if (pkmA.name > pkmB.name) return -1;
    if (pkmA.name < pkmB.name) return 1;
    return 0;
  });
};