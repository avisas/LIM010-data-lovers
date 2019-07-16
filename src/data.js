const pokemonReducedData = [];

for (let infoPokemon of POKEMON.pokemon) {   // este infoPokemon ya es un objeto y arroja la lista original de POKEMON.
  let reducedInfoPokemon = {
    id: infoPokemon.id,
    num: infoPokemon.num,
    name: infoPokemon.name,
    img: infoPokemon.img,
    type: infoPokemon.type,
    multipliers: infoPokemon.multipliers,
    avgSpawns: infoPokemon.avg_spawns,
    weaknesses: infoPokemon.weaknesses,
    egg: infoPokemon.egg,
    spawnTime: infoPokemon.spawn_time,
    candy: infoPokemon.candy,
    candyCount: infoPokemon.candy_count,
    weight: infoPokemon.weight,
    height: infoPokemon.height

  }
  pokemonReducedData.push(reducedInfoPokemon);   // si quiero agregar mas properties, solo añado.
};
window.example = pokemonReducedData;

const calculateEggPercentage = () => {
  let totalPokemon = pokemonReducedData.length;
  let total2KmEggs = 0, total5KmEggs = 0, total10KmEggs = 0, totalNoEggs = 0;
  for (let pokemon of pokemonReducedData) {
    switch (pokemon.egg) {
    case '2 km':
      total2KmEggs++;
      break;
    case '5 km':
      total5KmEggs++;
      break;
    case '10 km':
      total10KmEggs++;
      break;
    default:
      totalNoEggs++;
    }
  }
  return {
    '2km': ((total2KmEggs / totalPokemon) * 100).toFixed(2),
    '5km': ((total5KmEggs / totalPokemon) * 100).toFixed(2),
    '10km': ((total10KmEggs / totalPokemon) * 100).toFixed(2),
    'noEgg': ((totalNoEggs / totalPokemon) * 100).toFixed(2)
  };
};

const getPokemonTypes = () => {
  let listOfPokemonTypes = [];
  for (let pokemon of pokemonReducedData) {
    for (let type of pokemon.type)
      if (!(listOfPokemonTypes.includes(type)))
        listOfPokemonTypes.push(type);
  }
  return listOfPokemonTypes;
};

const masterSorter = (pokedexToShow, nameSorterValue, avgSpawnsSorterValue) => {
  if ((nameSorterValue !== 'default') && (avgSpawnsSorterValue === 'default')) {//el usuario solicito ordenar por nombre    
    if (nameSorterValue === 'ascName') {
      orderAscName(pokedexToShow);
    } else { //ordenar nombre por descendente
      orderDescName(pokedexToShow);
    }
  }
  if ((nameSorterValue === 'default') && (avgSpawnsSorterValue !== 'default')) {//el usuario solicito ordenar por avg spawn
    if (avgSpawnsSorterValue === 'ascSpawns') {
      orderAscSpawns(pokedexToShow);
    } else { //ordenar AvgSpawns por descendente
      orderDescSpawns(pokedexToShow);
    }
  }
  if ((nameSorterValue === 'default') && (avgSpawnsSorterValue === 'default')) {//el usuario no ha seleccionado ningun tipo de ordenamiento
    orderIdPokemon(pokedexToShow);
  }
};

const orderIdPokemon = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.id < pkmB.id) return -1;
    if (pkmA.id > pkmB.id) return 1;
    return 0;
  });
};

const orderAscName = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.name < pkmB.name) return -1;
    if (pkmA.name > pkmB.name) return 1;
    return 0;
  });
};

const orderDescName = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.name > pkmB.name) return -1;
    if (pkmA.name < pkmB.name) return 1;
    return 0;
  });
};

const orderAscSpawns = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.avgSpawns < pkmB.avgSpawns) return -1;
    if (pkmA.avgSpawns > pkmB.avgSpawns) return 1;
    return 0;
  });
};

const orderDescSpawns = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.avgSpawns > pkmB.avgSpawns) return -1;
    if (pkmA.avgSpawns < pkmB.avgSpawns) return 1;
    return 0;
  });
};

const masterFilter = (pkmsFilterValue, typeFilterValue, weaknessFilterValue, eggFilterValue) => {
  return pokemonReducedData.filter(pokemon => {
    return (
      complyPkmsFilter(pokemon, pkmsFilterValue)
      && complyTypeFilter(pokemon, typeFilterValue)
      && complyWeaknessFilter(pokemon, weaknessFilterValue)
      && complyEggFilter(pokemon, eggFilterValue)
    ) ? true : false;
  });
};

const complyPkmsFilter = (pokemon, value) => {
  switch (value) {
  case 'catched':
    return !!(pokemon.multipliers);
    break;
  case 'uncatched':
    return !(pokemon.multipliers);
    break;
  default:
    return true;
  };
};

const complyTypeFilter = (pokemon, value) => {
  if (value === 'default') return true;
  else return (pokemon.type.includes(value)) ? true : false;
};

const complyWeaknessFilter = (pokemon, value) => {
  if (value === 'default') return true;
  else return (pokemon.weaknesses.includes(value)) ? true : false;
};

const complyEggFilter = (pokemon, value) => {
  if (value === 'default') return true;
  else return (pokemon.egg === value) ? true : false;
};