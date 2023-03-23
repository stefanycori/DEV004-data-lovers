//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

import arrayPokemon from './data.js';
import { templateCard, searchPokemon } from './data.js';
import { sortReverse, sortPokemon, typePokemon, compareCard, specification } from './data.js';

//const button = document.getElementById('btn-validar')
const input = document.getElementById("caja-texto");
//const id = "";

window.addEventListener('load', showCard); //evento de carga
function showCard() {                //funcion para el evento de carga
  templateCard(arrayPokemon);
}


input.addEventListener('keyup', findPokemon);
//button.addEventListener('click', findPokemon);

function findPokemon() {

  searchPokemon(arrayPokemon);
}



const sortList = document.getElementById("selectSort");
sortList.addEventListener("change", (e) => {


  const valueOption = e.target.value; //informacion del evento
  if (valueOption === "1") {
    const datasortAZ = sortPokemon(arrayPokemon);
    templateCard(datasortAZ);
  }

  if (valueOption === "2") {
    const dataSortZA = sortReverse(arrayPokemon);
    templateCard(dataSortZA)
  }
});

const sortType = document.getElementById("filter");
sortType.addEventListener("change", (e) => {

  let pokemonType = [];
  let type = "";
  const valueType = e.target.value;

  /*if(valueType ==="1"){
        type="water";
    }
     
    if(valueType ==="2"){
        type="flying"
    }

    if(valueType ==="3"){
        type="fire"
    }

    if (valueType ==="4"){
        type="electric"
    }

    if(valueType ==="5"){
        type="ground"
    }

    if(valueType ==="6"){
        type="psychic"
    }*/

  switch (valueType) {
  case "1": type = "water"; break;
  case "2": type = "flying"; break;
  case "3": type = "fire"; break;
  case "4": type = "electric"; break;
  case "5": type = "ground"; break;
  case "6": type = "psychic"; break;
  case "7": type = "grass"; break;
  case "8": type = "bug"; break;
  }




  pokemonType = typePokemon(arrayPokemon, type);
  templateCard(pokemonType)
})

//const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

/*btnAbrirModal.addEventListener("click",()=>{
   modal.showModal();
})*/

btnCerrarModal.addEventListener("click", () => {
  modal.close();
})


const btnAbrirCuadroModal =
    document.querySelector("#btn-abrir-cuadro-modal");
let btnCerrarCuadroModal = document.querySelector("#btn-cerrar-cuadro-modal");
const modalCuadro = document.querySelector("#modal-cuadro");

btnAbrirCuadroModal.addEventListener("click", () => {

  compareCard(arrayPokemon);

  modalCuadro.showModal();



})

btnCerrarCuadroModal.addEventListener("click", () => {
  modalCuadro.close();
})


function showDetail(id) {
  
  const pokeSpecification = arrayPokemon.filter(p => p.num === id)[0]
  specification(pokeSpecification)
  modal.showModal();
  btnCerrarCuadroModal = document.querySelector("#btn-cerrar-cuadro-modal");


}
window.showDetail = showDetail;




























