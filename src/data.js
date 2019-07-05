/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
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
