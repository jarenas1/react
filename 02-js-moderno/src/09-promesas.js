import{findByIdCorto}from './08-import-export-arrayfunc'
//PROMESAS, ESTO VIENE SIENDO IGUAL QUE LAS PROMESAS EN LA VIDA REAL BASICAMENTE

//CREAR PROMESA
const promesa = new Promise((resolve, reject)=>{ //resolve se ejecuta si la promesa es exitosa, si no se ejectua el otro

    setTimeout(()=>{
        const heroe =  findByIdCorto(2) //VA A BUSCAR LOS HEROES CON ID 2
        resolve(heroe); //SI SE EJECUTA LO VA A DEVOLVER EN EL RESOLVE
        reject("No se encontro el heroe"); //SI NO LO ENCUENTRA DEVUELVE ESTO
    },2000)//TIEMPO QUE SE DEMORA

}
);

//AHORA DEBEMOS ESPERAR A QUE LA PROMESA SE EJECUTE, O A QUE SE EJECUTE MEJOR DICHO EL TIMEOUT

//promesa. NOS MUESTRA VARIAS COSAS, THEN SI SE EJECUTO BIEN, CATCH SI NO SE EJECUTO, FINALLY SE EJECUTA SI O SI DESPUES DE THEN O CATCH(MISMO CONCEPTO QUE EN JAVA)

promesa.then((heroe)=>{
    console.log("heroe");
})
.catch(error => console.warn(err))//SI NO SE EJECUTA:
