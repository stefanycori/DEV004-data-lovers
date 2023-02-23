// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
import pokemon, { default as dataPokemon } from "./data/pokemon/pokemon.js";

const arrayPokemon = dataPokemon.pokemon.slice(0, 100);
export default arrayPokemon;

let contenedor = document.getElementById('container');

//recibe como parametro arreglo de pokemones
export const templateCard = (data) => { //exporta la funcion en una constante
  console.log(data)

  let htmlCode = '';    //variable para almacenar codigo html

  data.forEach(poke => {
    //genera un div poor cada pokemon
    htmlCode = htmlCode + `   
            <div class="card">
            <img src="${poke.img}"> 
            <div class="contenido">
              <h3>${poke.name}</h3>
              <p>Número: ${poke.num} </p>
                <p>Tipo: ${poke.type}</p>
              <p>Resistencia: ${poke.resistant}</p>
                <p>Debilidades: ${poke.weaknesses}</p>
              </p>
            </div>
          </div>`
  })



  contenedor.innerHTML = htmlCode;  //insertar codigo html 
}


export const searchPokemon=(data)=>{
  let input =document.getElementById('caja-texto');
  let htmlCode= '';

  data.forEach(poke=>{
    if (poke.name===input.value){
  htmlCode=
  `   
            <div class="card">
            <img src="${poke.img}"> 
            <div class="contenido">
              <h3>${poke.name}</h3>
              <p>Número: ${poke.num} </p>
                <p>Tipo: ${poke.type}</p>
              <p>Resistencia: ${poke.resistant}</p>
                <p>Debilidades: ${poke.weaknesses}</p>
              </p>
            </div>
          </div>`;
     contenedor.innerHTML=htmlCode;
    }

  })

}

