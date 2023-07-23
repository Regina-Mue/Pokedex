let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('.modal');

    // add pokemons to array
    function add(pokemon) {
        if (typeof pokemon === 'object') {
            pokemonList.push(pokemon);
        } else {
            console.log('pokemon input is not correct');
        }
    }

    // return the array
    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.list-group');
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'list-color', 'text-center');

        let button = document.createElement('button');

        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#exampleModal");
        button.classList.add("btn-secondary", "mt-1", "p-2", "border-0", "fs-5", "btn", "btn-danger");

        button.innerText = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);

        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
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

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            item.weight = details.weight;
        }).catch(function (e) {
            console.error(e);
        });
    }

    // Make searchbar functional
    var searchItem = () => {
        let searchInput = document.querySelector("#input").value.toLowerCase();
        let listArray = document.querySelectorAll(".list-group-item");

        listArray.forEach(pokemon => {
            let listBtn = pokemon.querySelector(".btn-secondary").innerText.toLowerCase();
            if (listBtn.includes(searchInput)) {
                pokemon.style.display = "inline-block";
            } else {
                pokemon.style.display = "none";
            }
        });
    };

    let searchInput = document.querySelector("#input");
    searchInput.addEventListener("input", () => searchItem());

    // returns a single pokemon as an object
    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function() {

            let title = document.querySelector(".modal-title");
            title.innerText = pokemon.name.toUpperCase();

            let height = document.querySelector(".pokemonHeight");
            height.innerText = "Height: " + pokemon.height + " m";

            let weight = document.querySelector(".pokemonWeight");
            weight.innerText = "Weight: " + pokemon.weight + " kg";

            let imgDetails = document.querySelector(".PokomoneImg");
            imgDetails.src = pokemon.imageUrl;

            let closeButton = document.querySelector('.close');
            closeButton.classList.add('modal-close');
            closeButton.addEventListener('click', hideModal);

            modalContainer.classList.add('is-visible');

            modalContainer.addEventListener('click', (e) => {
                // Since this is also triggered when clicking INSIDE the modal
                // We only want to close if the user clicks directly on the overlay
                let target = e.target;
                if (target === modalContainer) {
                    hideModal();
                }
            });
        });
    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }


    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();  
        }
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails, 
        showDetails: showDetails,
        hideModal: hideModal
    };

})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});