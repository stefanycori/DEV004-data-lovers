import {sortPokemon} from '../src/data.js';
import {sortReverse} from '../src/data.js';
import arrayPokemon from '../src/data.js';
import {typePokemon} from '../src/data.js';




describe('ordernamiento', () => {
 
  
  describe('sortPokemon', () => {
    it('ordenado de a-z', () => {
      const arrayPrueba = [{"name":"sergio"},{"name":"maria"},{"name":"belen"}] 
      const arrayOrdenado = [{"name":"belen"},{"name":"maria"},{"name":"sergio"}]
      expect(  sortPokemon(arrayPrueba)).toEqual(arrayOrdenado);
  
      expect( typeof sortPokemon(arrayPokemon)).toBe('object');
    });});

  describe('sortReverse', () => {
    it('ordenado de z-a', () => {
      const arrayPrueba = [{"name":"maria"},{"name":"belen"},{"name":"sergio"}] 
      const arrayOrdenado = [{"name":"sergio"},{"name":"maria"},{"name":"belen"}]
      expect(  sortReverse(arrayPrueba)).toEqual(arrayOrdenado);
    
      expect( typeof sortReverse(arrayPokemon)).toBe('object');
    });});
});

describe('typePokemon' ,() =>{
  it('filtroTipo',() =>{
    const arrayTipo = [{"type":"fuego"},{"type":"aire"},{"type":"agua"},{"type":"tierra"}]
    const arrayResultado =[{"type":"fuego"}]
    const type="fuego"
    expect (typePokemon(arrayTipo,type)).toEqual(arrayResultado);

    const arrayResultado1 =[{"type":"aire"}]
    const type1="aire"

    expect (typePokemon(arrayTipo,type1)).toEqual(arrayResultado1);

    const arrayResultado2 =[{"type":"agua"}]
    const type2="agua"

    expect (typePokemon(arrayTipo,type2)).toEqual(arrayResultado2);

    
  })

})

