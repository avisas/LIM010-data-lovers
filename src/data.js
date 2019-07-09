const pokemonReducedData = [];

for (let infoPokemon of POKEMON.pokemon) {   // este infoPokemon ya es un objeto y arroja la lista original de POKEMON.
  let reducedInfoPokemon = {
    id: infoPokemon.id,
    num: infoPokemon.num,
    name: infoPokemon.name,
    img: infoPokemon.img,
    type: infoPokemon.type,
    multipliers: infoPokemon.multipliers,
    avg_spawns: infoPokemon.avg_spawns
  }
  pokemonReducedData.push(reducedInfoPokemon);   // si quiero agregar mas properties, solo añado.
};

window.example = pokemonReducedData;

const getAllPokemon = () => {
  return pokemonReducedData.filter((pkm) => {return true});  // .filter siempre devuelve un nuevo array. (lo que hay dentro del parentesis, es una logica para comprobar si el elemento va o no va)
}; // Arrow function solo devuelve un valor de True o False (Boolean)

const getCatchedPokemon = () => {
  return pokemonReducedData.filter((pkm) => {return pkm.multipliers});   // cada Pkm es un pokemon y evalua cada propiedad. Si multipliers retorna True, se ingresa.
};                                                                         // todo array vacio o con elementos retorna true.

const getUncatchedPokemon = () => {
  return pokemonReducedData.filter((pkm) => {return !(pkm.multipliers)});  // multipliers puede tomar valor de array o null. Si mutipliers regresa true y se niega, ya no ingresa.
};

const orderIdPokemon = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.id < pkmB.id) return -1;
    if (pkmA.id > pkmB.id) return 1;
    return 0;
  });
};

const orderAscPokemon = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.name < pkmB.name) return -1;
    if (pkmA.name > pkmB.name) return 1;
    return 0;
  });
};

const orderDescPokemon = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.name > pkmB.name) return -1;
    if (pkmA.name < pkmB.name) return 1;
    return 0;
  });
};

const orderAscSpawns = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.avg_spawns < pkmB.avg_spawns) return -1;
    if (pkmA.avg_spawns > pkmB.avg_spawns) return 1;
    return 0;
  });
};

const orderDescSpawns = (pokedexToShow) => {
  pokedexToShow.sort((pkmA, pkmB) => {
    if (pkmA.avg_spawns > pkmB.avg_spawns) return -1;
    if (pkmA.avg_spawns < pkmB.avg_spawns) return 1;
    return 0;
  });
};

const getTypePokemon = (opcion) => {
  let pokedexUncatched = createEmptyObj();
  for (let y = 0; y < pokemonesArray().length; y++) {
    let pokemon = pokemonesArray()[y];
    for (let i = 0; i < pokemon.type.length; i++) {
      if (pokemon.type[i].indexOf(opcion) > -1) {
        pokedexUncatched.pokemon.push(pokemon);
      }
    }
  }
  return pokedexUncatched;
};

const getListTypePokemon = () =>{
  const arrayType = [];
  for (let x = 0; x < pokemonReducedData.length; x++) {
    for (let y = 0; y < pokemonReducedData[x].type.length; y++) {
      arrayType.push(pokemonReducedData[x].type[y]);
    }
  }
  
  let sinRepetidos = [...new Set(arrayType)];
  return sinRepetidos;
};

const getWeaknessesPokemon = (opcion) =>{
  let pokedexUncatched = createEmptyObj();
  for (let y = 0; y < pokemonReducedData.length; y++) {
    let pokemon = pokemonReducedData[y];
    for (let i = 0; i < pokemon.weaknesses.length; i++) {
      if (pokemon.weaknesses[i].indexOf(opcion) > -1) {
        pokedexUncatched.pokemon.push(pokemon);
      }
    }
  }
  return pokedexUncatched;
};

const getListWeaknessesPokemon = () =>{    // AQUIIIII 
  const arrayWeaknesses = [];
  for (let x = 0; x < pokemonReducedData.length; x++) {
    for (let y = 0; y < pokemonReducedData.weaknesses; y++) {
      arrayWeaknesses.push(pokemonReducedData[x].weaknesses[y]);
    }
  }

  let sinRepetidos = [...new Set(arrayWeaknesses)];
  return sinRepetidos;
};