import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('PRUEBAS DE ASYNC AWAIT', () => {
    test('Se debe devolver la url de la imagen ', async () => {
    
        const url =await getImagen();

        expect(typeof url).toBe("string")
    })
    
  
})
