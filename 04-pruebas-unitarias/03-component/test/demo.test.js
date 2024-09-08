

// test('Esta prueba es una araganeria  ', () => {
    
//     if(1==0){
//         throw new Error('sapo');
//     }
// })

test('Esta prueba es una araganeria  ', () => {
    //INICIALIZACION
    const m1 = "Hola Mundo";

    //ESTIMULO
    const m2 = m1.trim();

    //OBSERVAR 
    expect(m2).toBe(m1);
 
})
