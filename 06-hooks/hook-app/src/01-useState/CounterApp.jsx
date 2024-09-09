import React, { useState } from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30

    });
  return (
    <>
        <h1>Counter1: {counter.counter1} </h1> {/*Creamos el que muestra el contador*/}
        <h1>Counter2: {counter.counter2} </h1>
        <h1>Counter3:{counter.counter3} </h1>
        
        <hr />

        <button className='btn btn-success' onClick={ () => setCounter({...counter, //SETEAMOS LOS VALORES QUE TENIAMSOS AL INICIO
                                                                        counter1 : counter.counter1+ 1, //MODIFICAMOS EL VALOR DESEADO       
                                                                                                        })}>+1</button> {/*Incrementamos el contador */}
        <button>-1</button>
    </>
  )
}

export default CounterApp
