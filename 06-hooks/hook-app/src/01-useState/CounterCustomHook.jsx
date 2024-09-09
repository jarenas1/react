import { useCounter } from "../hooks/useCounter"


export const CounterCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(10); //tomamos todo lo que devuelve la funcion y lo desestructuramos

    const aña = useCounter();
    
  return (
    <>
      <h1>Counter With Hook {counter}</h1>
      <hr />

      <button onClick={(event)=>increment(3)} className="btn btn-primary">+1</button>
      <button onClick={reset} className="btn btn-primary">Reset</button>
      <button onClick={(event)=>decrement(2)} className="btn btn-primary">-1</button>
    </>
  )
}

