import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"
describe('TENER UN HERORE POR ID CON PROMESA', () => {
  
    test('Debo obtener un heroe', (done) => { //DONE INDICARA CUANDO LA PROMESA HAYA TERMINADO

      const id = 1

      getHeroeByIdAsync(id).then(hero => {
        expect(hero).toEqual(  {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

        done(); //LLAMAMOS AL DONE YA QUE EL CODIGO FINALIZO
      });
    })

    test('Se debe devolver undef si no existe el heroe  ', (done) => {
      
        const id = 100;

        getHeroeByIdAsync(id).catch(hero =>{ //INIDCAMOS CON EL CATCH QUE EL ERROR VA A SALIR
            expect(hero).toBe('No se pudo encontrar el héroe')

            done(); //LLAMAMOS AL DONE YA QUE EL CODIGO FINALIZO
        })
    })
    
    
})
