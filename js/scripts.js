let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // add pokemons to array
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    // return the array
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

        button.addEventListener('click', function (event) {
            showDetails(pokemon.name);
        });
    }

    // returns a single pokemon as an object
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };

})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});