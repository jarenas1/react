import{ useState }from 'react'
import PropTypes, { func } from "prop-types"

export const CounterApp = ({value})=>{

    const [counter, setCounter] = useState(value)    // counter tendra el valor que tenga el useState en los parentesis y set counter servira para modificar el counter
    //Ya que si lo modificamos asi saldra un error debido a que es una const , cada que counter cambie se renderizara el componente

 

    const handleAdd=()=> setCounter(counter + 1); //Aumentamos el counter en 1 con setCounter

    const handleSubtract = ()=>setCounter(counter - 1); //Disminuimos el counter en 1 con setCounter

    const handleReset = () => setCounter(value); //reseteamos 
    

    return(
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={handleAdd}>
            +1
        </button>
        <button onClick={handleSubtract}> -1 </button>
        <button onClick={handleReset}> reset </button>
        </>
    )
}

CounterApp.propTypes = { 
    value: PropTypes.number.isRequired
}