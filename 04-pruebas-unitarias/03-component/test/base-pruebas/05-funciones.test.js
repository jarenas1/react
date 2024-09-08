import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('PRUEBAS DE LAS FUNCIONES', () => {

    test('El usuario debe devolverse en un objeto ', () => {
        const user = getUser();

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        //PARA PODER COMPARAR 2 OBJETOS DEBEMOS USAR EL .TOEQUAL
        expect(user).toEqual(testUser);
    })

    test('Deve decir si los nombres son iguales', () => {
        const name = "juan";

        const user = getUsuarioActivo(name);
      
        //expect(name).toBe(user.username) DE MI MANERA
        //OTRA MANERA
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
    
    
})
