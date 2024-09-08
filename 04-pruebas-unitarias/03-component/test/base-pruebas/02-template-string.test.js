import { getSaludo } from "../../src/base-pruebas/02-template-string"
describe('02-PRUEBAS', () => {
  
    test('Get saludo debe devolver "Hola Fernando" ', () => {
        //INICALIZAMOS EL NOMBRE 
        const name = "fernando";
        //Guradamos el mensaje de la funcion
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    })
    
})
