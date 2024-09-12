import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);
    
    const increment = useCallback((c) => {
        setCounter((value) => value+c)
    },[])

    // const increment = () => {
    //     setCounter(counter + 1);
    // }
  return (
    <>
        <h1>callBack Hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={increment}/>
    </>
  )
}
