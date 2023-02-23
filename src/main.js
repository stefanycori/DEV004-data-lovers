import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

import arrayPokemon from './data.js';
import {templateCard,searchPokemon} from './data.js';

let button=document.getElementById('btn-validar')

window.addEventListener('load', showCard); //evento de carga
function showCard(){                //funcion para el evento de carga
    templateCard(arrayPokemon);

}

button.addEventListener('click',findPokemon);
function findPokemon (){
    searchPokemon(arrayPokemon);
}




