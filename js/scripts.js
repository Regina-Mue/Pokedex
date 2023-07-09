let pokemonRepository = (function () {
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

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }
  
    return {
        add: add,
        getAll: getAll
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    let unorderedList = document.querySelector('ul');
    let listItem = document.createElement('li');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add();

    listItem.appendChild(button);
    unorderedList.appendChild(listItem);

    /*
    if (pokemon.types.length == 2) {
        document.write(pokemon.name + ' is ' + pokemon.height + 'm tall and has the types ' 
        + pokemon.types[0] + ' and ' + pokemon.types[1] + '.<br>');
    } else {
        document.write(pokemon.name + ' is ' + pokemon.height + 'm tall and has the type ' 
        + pokemon.types + '.<br>');
    }
    */
});