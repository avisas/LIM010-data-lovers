const createEmptyObj = () => {
  return {
    pokemon: []
  };
};

const getAllPokemon = () => {
  let pokedexToShow = createEmptyObj();
  pokedexToShow.pokemon = POKEMON_RAW_DATA.pokemon.filter(pkm => true);
  return pokedexToShow;
};

const getCatchedPokemon = () => {
  let pokedexToShow = createEmptyObj();
  pokedexToShow.pokemon = POKEMON_RAW_DATA.pokemon.filter(pkm => pkm.multipliers);
  return pokedexToShow;
};

const getUncatchedPokemon = () => {
  let pokedexToShow = createEmptyObj();
  pokedexToShow.pokemon = POKEMON_RAW_DATA.pokemon.filter(pkm => !(pkm.multipliers));
  return pokedexToShow;
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