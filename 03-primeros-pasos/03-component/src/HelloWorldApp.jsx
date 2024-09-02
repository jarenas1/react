import { Fragment } from "react"
//CREACION DE LA FUNCION QUE IMPRIME HELLO WORLD

export function App(){
    return <h1>Hello world</h1>
}

//FORMA INCORRECTA YA QUE NOS VA A PEDIR METERLO ENTRE NODOS

// export const FirstApp = ()=>{
//     return(
//         <h1>Hola, SOY JUANCHITOO</h1>
//         <p>TE AMO KAREN</p>
//     )
// }


//FORMA CORRECTA CON EL NODO DIV

// export const FirstApp = ()=>{
//     return(
//         <div>
//             <h1>Hola, SOY JUANCHITOO</h1>
//             <p>TE AMO KAREN</p>
//         </div>
//     )
// }


//FORMA CON EL FRAGMENT QUE SE IMPORTO PARA EVITAR CREAR ´MAS HTML


// export const FirstApp = ()=>{
//     return(
//         <Fragment>
//             <h1>Hola, SOY JUANCHITOO</h1>
//             <p>TE AMO KAREN</p>
//         </Fragment>
//     )
// }


//PARA EVITAR EL USO DEL FRAGMENT Y HACERLO MÁS RAPIDO PODEMOS HACERLO DE LA SIGUIENTE FORMA Y SE INFERIRA QUE ES UN FRAGMENTO

export const FirstApp = ()=>{
    return(
        <>
            <h1>Hola, SOY JUANCHITOO</h1>
            <p>TE AMO KAREN</p>
        </>
    )
}
