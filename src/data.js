/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const mostrarPokemones = (todoPokemon) => {
  const newArrayPokemones = [];
  for(let i = 0; i < todoPokemon.length; i++){
  	
  	newArrayPokemones.push({
  		id : todoPokemon[i].id, 
  		num : todoPokemon[i].num,  		
  		nombre : todoPokemon[i].name,
  		imagen : todoPokemon[i].img,
  		tipo : todoPokemon[i].type,
  		altura : todoPokemon[i].height,
        peso: todoPokemon[i].weight,
        caramelo: todoPokemon[i].candy,
        cant_caramelo: todoPokemon[i].candy_count,
        huevo: todoPokemon[i].egg,
        prom_aparicion : todoPokemon[i].avg_spawns,
        cant_pokemon: todoPokemon[i].multipliers,
        debilidad: todoPokemon[i].weaknesses,
        pre_evolucion : todoPokemon[i].prev_evolution,
        sig_evolucion : todoPokemon[i].next_evolution
  	})

  }

  return newArrayPokemones;
};

window.example = mostrarPokemones;