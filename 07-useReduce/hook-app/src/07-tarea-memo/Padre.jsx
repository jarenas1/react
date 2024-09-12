import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar =useCallback((num)=>{setValor( (oldValue) => oldValue + num )},[]) 
    //se esta usando un callback en esta parte superior ya que esta es una forma del useState de darnos el valor actual
    //que tiene, por eso se esta usando, para asegurar que el valor que estamos llamando sea el actual y no uno viejo
    


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
