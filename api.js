import axios from './node_modules/axios';
const hostname = 'http://pokeapi.co/api/v2';
const Pokemon = require('./Pokemon');
const pokemons = [];

function registraPokemons() {
    const pokemonPromises = [];

    for (let i = 1; i <= 100; i++) {
        let path = `/pokemon/${i}/`;

        pokemonPromises.push(new Promise((resolve, reject) => {
            axios.get(`${hostname}${path}`).then(response =>{
                if (err) {
                    reject(err);
                    return;
                }

                const data = response.data;
                // console.log(data.sprites.front_default)
                const pokemonData = {
                    id: data.id,
                    name: data.name,
                    weight: data.weight,
                };


                const pokemon = new Pokemon(pokemonData, data.sprites.front_default);
                pokemons.push(pokemon);
                resolve(); // Resolve a promessa após adicionar o Pokémon
            });
        }));
    }

    return Promise.all(pokemonPromises)
    .then(() => {
      return pokemons;
    })
    .catch((err) => {
      // Lidar com erros nas requisições
      console.error("Erro ao registrar Pokémons:", err);
    });
}


function paginaPokemons(pokemons) {
    const container = document.getElementById("pokemons-container");
  
    pokemons.forEach((pokemon) => {
      const card = document.createElement("div");
      card.classList.add("pokemon-card");
  
      const img = document.createElement("img");
      img.src = pokemon.img;
      img.alt = pokemon.name;
  
      const name = document.createElement("h2");
      name.textContent = pokemon.name;
  
      const weight = document.createElement("p");
      weight.textContent = `Peso: ${pokemon.weight} kg`;
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(weight);
  
      container.appendChild(card);
    });
  }
  


export default registraPokemon