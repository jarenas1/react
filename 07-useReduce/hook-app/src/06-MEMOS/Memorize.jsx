import { useContext, useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Smal } from "./Smal"

export  const Memorize = () => {

    const {counter, increment} =useCounter()

    const [status, setStatus] = useState(true);

    const onClick = () => {
        status ? setStatus(!status) : setStatus(!status) 
        console.log(status);
        
    }
  return (
    <>
        {/*<h1>COUNTER: <small>{counter}</small></h1>   SE COMENTO PARA TRAER DEL COUNTER COMO UN COMPONENTE*/}
        <h1>Counter: <Smal value={counter}/></h1>
        <hr />

        <button className="btn btn-primary" onClick={(e) => increment(1)}>+1</button>
        <button className="btn btn-primary" onClick={(e) => onClick()}>PPE</button>
    </>
  )
}


