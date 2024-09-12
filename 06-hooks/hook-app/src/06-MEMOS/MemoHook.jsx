import { useContext, useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

//FUNCION A LA QUE SE LE APLICARA EL HOOK
const heavyStuff = (iterations = 100)=>{
    for(let i = 0; i<iterations; i++){
        console.log('Calculating heavy stuff...')
    }
}

export  const MemoHook = () => {

    const {counter, increment} =useCounter(1000)

    const [status, setStatus] = useState(true);

    const memorized = useMemo(() => heavyStuff(counter),[counter]) //cada que counter cambie se renderizara

    const onClick = () => {
        status ? setStatus(!status) : setStatus(!status) 
        console.log(status);
        
    }
  return (
    <>
        {/*<h1>COUNTER: <small>{counter}</small></h1>   SE COMENTO PARA TRAER DEL COUNTER COMO UN COMPONENTE*/}
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        {/*HEAVY STUFF */}
        <h4>{memorized}</h4>

        <button className="btn btn-primary" onClick={(e) => increment(1)}>+1</button>
        <button className="btn btn-primary" onClick={(e) => onClick()}>PPE</button>
    </>
  )
}


