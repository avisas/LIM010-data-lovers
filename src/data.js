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
    weaknesses: infoPokemon.weaknesses
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

const getTypePokemon = (opcion, pokedexToShow) => {
  let pokedexUncatched = [];
  for (let y = 0; y < pokedexToShow.length; y++) {
    let pokemon = pokedexToShow[y];
    for (let i = 0; i < pokemon.type.length; i++) {
      if (pokemon.type[i].indexOf(opcion) > -1) {
        pokedexUncatched.push(pokemon);
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

const getWeaknessesPokemon = (opcion, pokedexToShowA) => { //Estoy aqui
  let pokedexUncatched = [];
  for (let y = 0; y < pokedexToShowA.length; y++) {
    let pokemon = pokedexToShowA[y];
    for (let i = 0; i < pokemon.weaknesses.length; i++) {
      if (pokemon.weaknesses[i].indexOf(opcion) > -1) {
        pokedexUncatched.push(pokemon);
      }
    }
  }
  return pokedexToShow = pokedexUncatched;
};

const getListWeaknessesPokemon = () =>{    
  const arrayWeaknesses = [];
  for (let x = 0; x < pokemonReducedData.length; x++) {
    for (let y = 0; y < pokemonReducedData[x].weaknesses.length; y++) {
      arrayWeaknesses.push(pokemonReducedData[x].weaknesses[y]);
    }
  }

  let sinRepetidos = [...new Set(arrayWeaknesses)];
  return sinRepetidos;
};