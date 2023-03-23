// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
import { default as dataPokemon } from "./data/pokemon/pokemon.js";

const arrayPokemon = dataPokemon.pokemon.slice(0, 100);
export default arrayPokemon;



const contenedor = document.getElementById('container');
//recibe como parametro arreglo de pokemones
export const templateCard = (data) => { //exporta la funcion en una constante


  let htmlCode = '';    //variable para almacenar codigo html

  data.forEach(poke => {
    //genera un div poor cada pokemon
    htmlCode = htmlCode + `   
            <div id="${poke.num}" onclick="showDetail(this.id)" class="card">
            <img src="${poke.img}"> 
            <div class="contenido">
              <h3>${poke.name}</h3>
              <p>Número: ${poke.num} </p>
                <p>Tipo: ${poke.type}</p>
              
              </p>
            </div>
          </div>
        `
  })

  contenedor.innerHTML = htmlCode;  //insertar codigo html 
}




export const searchPokemon = (data) => {
  const input = document.getElementById('caja-texto');
  //const htmlCode = '';
  const newdata = [];   //areglo vacio
  data.forEach(poke => {
    if (poke.name.includes(input.value)) {
      newdata.push(poke)
    }

  })
  templateCard(newdata)//llamar a ala funcion


}

export const sortPokemon = (data) => {
  const sortdZA = data.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return sortdZA;

}

export const sortReverse = (data) => {
  const sortdZA = data.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return sortdZA;
}

export const typePokemon = (data, type) => {
  const filterPokemon = data.filter(p => p.type.includes(type))

  return filterPokemon;
}


//export const compare = (data) => {

//}



const comparador = document.getElementById('comparacion');

export const compareCard = (data) => {

  let htmlCode = `<tr>

          <th>POKEMON</th>
          <th>NÚMERO</th>
          <th>TIPO</th>
          <th>RESISTENCIA</th>
          <th>DEBILIDAD</th>
          <th>PESO</th>
          <th>TALLA</th>
        </tr>`;

  data.forEach(poke => {

    htmlCode = htmlCode + `
<tr>
          <td>${poke.name}</td>
          <td>${poke.num}</td>
          <td>${poke.type}</td>
          <td>${poke.resistant}</td>
          <td>${poke.weaknesses}</td>
          <td>${poke.size.weight}</td>
          <td>${poke.size.height}</td>
          </tr>
          `

  })

  comparador.innerHTML = htmlCode;

}

const characteristic = document.getElementById('detail');
export const specification = (data) => {
  
  let htmlCode = '';
  let evolution = ' -';

  if (data.evolution.nextevolution !== undefined)
    evolution = data.evolution.nextevolution[0].name;

  htmlCode = `
            <div class="box-info">

            <img src="${data.img}">

            <div class="columns margin">
              <h3>${data.name}</h3>
              <div class="verde">
                <p>Número: ${data.num} </p>
              </div>
              <div class="azul">
                <p>Tipo: ${data.type}</p>
              </div>
              <div class="naranja">
                <p>Resistencia: ${data.resistant}</p>
              </div>

            </div>

            </div>

            <div class="box-info">

            <div class="columns margin">
              <div class="verde">
                <p>Generacion : ${data.generation.num} </p>
              </div>
              <div class="azul">
                <p>Peso : ${data.size.weight}</p>
              </div>
              <div class="naranja">
                <p>Altura :${data.size.height}</p>
              </div>
            </div>


            <div class="columns margin">
              <div class="verde">
                <p>Ataque especial : ${data.specialattack[0].name}</p>
              </div>

              <div class="azul">
                <p>Evolucion :${evolution}</p>
              </div>
              <div class="naranja">
                <p>Debilidades: ${data.weaknesses}</p>
              </div>

            </div>
`



  characteristic.innerHTML = htmlCode;
}





