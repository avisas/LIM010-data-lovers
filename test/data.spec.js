global.window = global;
require('../src/data');
require('./data.spec.js');

let pokemonCat = [
  {'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}, {
    'id': 147,
    'num': '147',
    'name': 'Dratini',
    'type': [
      'Dragon'
    ],
    'egg': '10 km',
    'avg_spawns': 30,
    'multipliers': [
      1.83,
      1.84
    ],
    'weaknesses': [
      'Ice',
      'Dragon',
      'Fairy'
    ]}, {
    'id': 23,
    'num': '023',
    'name': 'Ekans',
    'type': [
      'Poison'
    ],
    'egg': '5 km',
    'avg_spawns': 227,
    'multipliers': [
      2.21,
      2.27
    ],
    'weaknesses': [
      'Ground',
      'Psychic'
    ],
  }, {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 1.7,
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}
];
let reducirPokemonCat = [ 
  { id: 1,
    num: '001',
    name: 'Bulbasaur',
    img: undefined,
    type: [ 'Grass', 'Poison' ],
    multipliers: [ 1.58 ],
    avgSpawns: 69,
    weaknesses: [ 'Fire', 'Ice', 'Flying', 'Psychic' ],
    egg: '2 km',
    spawnTime: undefined,
    candy: undefined,
    candyCount: undefined,
    weight: undefined,
    height: undefined },
  { id: 147,
    num: '147',
    name: 'Dratini',
    img: undefined,
    type: [ 'Dragon' ],
    multipliers: [ 1.83, 1.84 ],
    avgSpawns: 30,
    weaknesses: [ 'Ice', 'Dragon', 'Fairy' ],
    egg: '10 km',
    spawnTime: undefined,
    candy: undefined,
    candyCount: undefined,
    weight: undefined,
    height: undefined },
  { id: 23,
    num: '023',
    name: 'Ekans',
    img: undefined,
    type: [ 'Poison' ],
    multipliers: [ 2.21, 2.27 ],
    avgSpawns: 227,
    weaknesses: [ 'Ground', 'Psychic' ],
    egg: '5 km',
    spawnTime: undefined,
    candy: undefined,
    candyCount: undefined,
    weight: undefined,
    height: undefined },
  { id: 3,
    num: '003',
    name: 'Venusaur',
    img: undefined,
    type: [ 'Grass', 'Poison' ],
    multipliers: null,
    avgSpawns: 1.7,
    weaknesses: [ 'Fire', 'Ice', 'Flying', 'Psychic' ],
    egg: 'Not in Eggs',
    spawnTime: undefined,
    candy: undefined,
    candyCount: undefined,
    weight: undefined,
    height: undefined 
  }
];
const pokemonFilter = [{
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'egg': 'Not in Eggs',
  'avg_spawns': 1.7,
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ]}
];
const catchedPokemon = [
  {'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}, {
    'id': 147,
    'num': '147',
    'name': 'Dratini',
    'type': [
      'Dragon'
    ],
    'egg': '10 km',
    'avg_spawns': 30,
    'multipliers': [
      1.83,
      1.84
    ],
    'weaknesses': [
      'Ice',
      'Dragon',
      'Fairy'
    ]}, {
    'id': 23,
    'num': '023',
    'name': 'Ekans',
    'type': [
      'Poison'
    ],
    'egg': '5 km',
    'avg_spawns': 227,
    'multipliers': [
      2.21,
      2.27
    ],
    'weaknesses': [
      'Ground',
      'Psychic'
    ],
  }
];
const pokemonCatOrderDescName = [
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 1.7,
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]},
  {
    'id': 23,
    'num': '023',
    'name': 'Ekans',
    'type': [
      'Poison'
    ],
    'egg': '5 km',
    'avg_spawns': 227,
    'multipliers': [
      2.21,
      2.27
    ],
    'weaknesses': [
      'Ground',
      'Psychic'
    ],
  },
  {
    'id': 147,
    'num': '147',
    'name': 'Dratini',
    'type': [
      'Dragon'
    ],
    'egg': '10 km',
    'avg_spawns': 30,
    'multipliers': [
      1.83,
      1.84
    ],
    'weaknesses': [
      'Ice',
      'Dragon',
      'Fairy'
    ]},
  {'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]}
];
const pokemonCatOrderAscId = [
  {'id': 1,
    'num': '001',
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]},
  {
    'id': 3,
    'num': '003',
    'name': 'Venusaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': 'Not in Eggs',
    'avg_spawns': 1.7,
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ]},
  {
    'id': 23,
    'num': '023',
    'name': 'Ekans',
    'type': [
      'Poison'
    ],
    'egg': '5 km',
    'avg_spawns': 227,
    'multipliers': [
      2.21,
      2.27
    ],
    'weaknesses': [
      'Ground',
      'Psychic'
    ],
  },
  {
    'id': 147,
    'num': '147',
    'name': 'Dratini',
    'type': [
      'Dragon'
    ],
    'egg': '10 km',
    'avg_spawns': 30,
    'multipliers': [
      1.83,
      1.84
    ],
    'weaknesses': [
      'Ice',
      'Dragon',
      'Fairy'
    ]},
];
const typePokemon = ['Grass', 'Poison', 'Dragon'];
const eggPer = {
  km2: '25.00',
  km5: '25.00',
  km10: '25.00',
  noEgg: '25.00'
};

describe('reducirDataPokemon', () => {
  it('1. reducirDataPokemon | Deberia ser una función.', () => {
    expect(typeof functions.reducirDataPokemon).toBe('function');
  });
  it('2. reducirPokemonCat | ', () => {
    expect(functions.reducirDataPokemon(pokemonCat)).toEqual(reducirPokemonCat);
  });
  it('3. calculateEggPercentage | Deberia ser una función.', () => {
    expect(functions.calculateEggPercentage(pokemonCat)).toEqual(eggPer);
  });
  it('4. getPokemonTypes | Deberia ser una función.', () => {
    expect(functions.getPokemonTypes(pokemonCat)).toEqual(typePokemon);
  });
  it('5.1. masterFilter | Deberia retornar...', () => {
    expect(functions.masterFilter(pokemonCat, 'default', 'default', 'default', 'default')).toEqual(pokemonCat);
  });
  it('5.2. masterFilter-catched | Deberia retornar...', () => {
    expect(functions.masterFilter(pokemonCat, 'catched', 'default', 'default', 'default')).toEqual(catchedPokemon);
  });
  it('5.3. masterFilter-Varios | Deberia retornar...', () => {
    expect(functions.masterFilter(pokemonCat, 'uncatched', 'Grass', 'Fire', 'Not in Eggs')).toEqual(pokemonFilter);
  });
  it('6.1. masterSorter | Deberia retornar...', () => {
    expect(functions.masterSorter(pokemonCat, 'default', 'default')).toEqual(pokemonCatOrderAscId);
  });
  it('6.2. masterSorter-ascName | Deberia retornar...', () => {
    expect(functions.masterSorter(pokemonCat, 'ascName', 'default')).toEqual(pokemonCat);
  });
  it('6.3. masterSorter-descName | Deberia retornar...', () => {
    expect(functions.masterSorter(pokemonCat, 'descName', 'default')).toEqual(pokemonCatOrderDescName);
  });
  it('6.4. masterSorter-ascSpawns | Deberia retornar...', () => {
    expect(functions.masterSorter(pokemonCat, 'default', 'ascSpawns')).toEqual(pokemonCat);
  });
  it('6.5. masterSorter-descSpawns | Deberia retornar...', () => {
    expect(functions.masterSorter(pokemonCat, 'default', 'descSpawns')).toEqual(pokemonCat);
  });
});
