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
  

  let htmlCode = '';    //variable para almacenar codigo html

  data.forEach(poke => {
    //genera un div poor cada pokemon
    htmlCode = htmlCode + `   
            <div  class="card">
            <img src="${poke.img}"> 
            <div class="contenido">
              <h3>${poke.name}</h3>
              <p>Número: ${poke.num} </p>
                <p>Tipo: ${poke.type}</p>
              <p>Resistencia: ${poke.resistant}</p>
                <p>Debilidades: ${poke.weaknesses}</p>
              </p>
            </div>
          </div>
        `
  })



  contenedor.innerHTML = htmlCode;  //insertar codigo html 
}


function showDetail(id){
  console.log(id);
}


export const searchPokemon=(data)=>{
  let input =document.getElementById('caja-texto');
  let htmlCode= '';
  let newdata=[];   //areglo vacio
  data.forEach(poke=>{
    if (poke.name.includes(input.value)){
 newdata.push(poke)
    }

  })
templateCard(newdata)//llamar a ala funcion


}

export const sortPokemon = (data) =>{
  const sortdZA = data.sort (function(a,b){
    if(a.name < b.name){
      return -1;
    }
    if(a.name > b.name){
      return 1;
    }
    return 0;
  } );
  return sortdZA;

  }
   
  export const sortReverse = (data) =>{
  const sortdZA = data.sort (function (a,b){
    if(a.name > b.name){
      return -1;
   }
    if (a.name < b.name){
      return 1;
    }
    return 0;
  });
  return sortdZA;
}

export const typePokemon =(data,type) =>{
  const filterPokemon = data.filter(p =>p.type.includes(type))

  return filterPokemon;
}
 



  