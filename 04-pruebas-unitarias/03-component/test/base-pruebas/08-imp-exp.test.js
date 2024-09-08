import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('PRUEBAS DEL 08', () => {
  
    test('Se debe devlver un heroe si lo encuentra por el id', () => {
      
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('Se debe devolver undefine si no se encuentra un heroe ', () => {

        const id = 15;
        const heroe = getHeroeById(id);
      
        expect(heroe).toBe(undefined)
    })
})

describe('PRUEBAS DEL 08 CON OWNER', () => {
  
    test('Debe devolver Los herore de dc ', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
        
        
    })
    
})

