import { useState } from "react"

export const useCounter = (initialValue = 10) =>{ //SI NO MANDAN EL PARAMETRO SE INICIA COMO 10
    const [counter, setCounter] = useState(initialValue);

    const increment = (value) =>{
        setCounter(counter + value);
    }

    const decrement = (value1)=>{
        if(counter - value1 < 0) return;  //SI LA RESTA ES NEGATIVA, NO SE DECREMENTA
        setCounter(counter - value1);
    }

    const reset = () =>{
        setCounter(initialValue);
    }
    
    return { counter, increment, decrement, reset }; //SE DEVUELVE UN OBJETO DEBIDO A QUE SE ESTAN DEVOLVIENDO MUCHAS COSAS

}