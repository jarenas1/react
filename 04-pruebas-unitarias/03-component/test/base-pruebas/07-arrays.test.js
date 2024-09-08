import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("07-arraysitos", ()=>{

    test('debe retornar un string y un numero ', () => {
      const [letras, nums] = retornaArreglo(); //esto devuelve un array con una letra y un numero, por lo que lo estamos destructurando

      //Ahora comparamos el tipo de dato de cada cosa
      expect(typeof letras).toBe("string");
      expect(typeof nums).toBe("number");
    })
    
})