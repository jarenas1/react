import { Fragment } from "react"
import PropTypes from "prop-types"
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

const numbers = [1, 2, 3, 4, 5, 6, 7]; //SE IMPRIMIRA NUMERO POR NUMERO

const name = "juan";

const message = { //ACCEDEREMOS A UNA PROPIEDAD
    greeting: "Hello",
    name: "World",
}

//SE LLAMARA Y SE VERA UN MENSAJE SALUDANDO AL NOMBRE
const getName = (name) =>{
    return `Hola ${name}`;
}


//FORMA CON EL FRAGMENT Y LAS VARIABLES
export const FirstApp = ({title})=>{ //PASAMOS LOS ATRIBUTOS QUE RECIBIRA
    return(
        <>
            <h1>{numbers}</h1> 
            <p>{name}</p>
            <p>{message.greeting}</p>
            <p>{getName("PEDRO")}</p>
            <p>{title}</p> 
        </>
    )
}

//INDICAR TIPO Y SI ES REQUERIDO EN LOS PROPS TITLE:

FirstApp.propTypes = {
    title: PropTypes.string.isRequired, //title debe recibir obligatoriamente un String
}

//INDICAR VALOR POR DEFECTO A UNOS PROPS

FirstApp.defaultProps = {
    title: "Default Title", //Si no se pasa ningun title, se usará este Y NO SE USARA EL ERROR CREADO ARRIBA
}

//PROPS Y STATES: