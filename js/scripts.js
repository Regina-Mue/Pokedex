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

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');

        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button');

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };

})();

pokemonRepository.getAll().forEach(function(pokemon) { 
    pokemonRepository.addListItem(pokemon);
});