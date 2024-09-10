import { useEffect, useState } from "react"


export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0}) //INICIALIZAMOS LAS VARIABLES DE POSICION 

    useEffect(() => {

        const onMouseMove = ({x,y}) => {
            setCoords({x,y}) //ACTUALIZAMOS LAS VARIABLES
        }
        window.addEventListener( "mousemove", onMouseMove);  //PASAMOS LAS MARIABLES DE POSICION A LA FUNCION
        return () => {
            window.removeEventListener("mousemove", onMouseMove); //SE ELIMINA EL EVENTO AL DESMONTAR EL COMPONENTE
        } //se ejecuta cuando se desmonta el componente (se cierra la ventana o se recarga la página)
        
    },[]) //Se ejecuta solo al renderizar el componente
  return (
    <>
        <h3>El usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}   