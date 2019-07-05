const getAllPokemon = () => {
  let pokedexToShow = {
    pokemon: []
  };
  pokedexToShow.pokemon = POKEMON_RAW_DATA.pokemon.filter(pkm => true);
  return pokedexToShow;
};

const getCatchedPokemon = () => {
  let pokedexToShow = {
    pokemon: []
  };
  pokedexToShow.pokemon = POKEMON_RAW_DATA.pokemon.filter(pkm => pkm.multipliers);
  return pokedexToShow;
};

const getUncatchedPokemon = () => {
  let pokedexToShow = {
    pokemon: []
  };
  pokedexToShow.pokemon = POKEMON_RAW_DATA.pokemon.filter(pkm => !(pkm.multipliers));
  return pokedexToShow;
};