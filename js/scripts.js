let pokemonList = [
    {   
        name: 'Arceus',
        height: 3.2,
        types: ['normal']
    },
    {   
        name: 'Mewtwo',
        height: 2,
        types: ['psychic']
    },
    {   
        name: 'Giratina',
        height: 4.5,
        types: ['dragon', 'ghost']
    },
    {
        name: 'Dialga',
        height: 5.4,
        types: ['dragon', 'steel']
    },
    {
        name: 'Palkia',
        height: 4.2,
        types: ['dragon', 'water']
    },
    {
        name: 'Rayquaza',
        height: 7,
        types: ['dragon', 'flying']
    },
    {
        name: 'Groudon',
        height: 3.5,
        types: ['ground']
    },
    {
        name: 'Kyogre',
        height: 4.5,
        types: ['water']
    },
    {
        name: 'Ho-oh',
        height: 3.8,
        types: ['fire', 'flying']
    },
    {
        name: 'Celebi',
        height: 0.6,
        types: ['psychic', 'grass']
    },
];

for (let i = 0; i <= pokemonList.length - 1; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')<br>');
}