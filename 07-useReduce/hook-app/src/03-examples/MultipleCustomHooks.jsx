import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

//LLAMAMOS AL USECOUNTER CON EL FIN DE CAMBIAR EL POKEMON DINAMICAMENTE
const {counter, decrement, increment} = useCounter(1);

//PETICION AL CUSTOMHOOK 

const {data , hasError, isLoading, } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`)

  return (
    <>
        <h2>pokemones mi papá</h2>
        <hr />


        {/*SI ESTA CARGANDO MOSTRAMOS EL ESTADO POR MEDIO DEL COMPONENTE */}
        {isLoading ? <LoadingMessage/>: <PokemonCard id={counter} name={data.name} sprites = {[data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_default, data.sprites.back_shiny]}/>}

        {/*<h5>{data?.name}</h5> {/*como inicialmente la data no existe, debemos poder el condicional para que no nos saque error */}

        {/*SI el counter es mayor a uno devolvemos la funcion, si no un nulo, que signidica nada */}   
        <button onClick={(event) =>counter > 1? decrement(1):null} className='btn btn-primary mt-2'>Back</button>
{/*debemos tener en cuenta que no hay poquemones con id = numero negativo, por ende debemos evaluar antes de decrementar que el contador no sea >=1 */}

        <button onClick={(event) =>increment(1)} className='btn btn-primary mt-2'>Next</button> 
        {/*Llamamos la funcion de incrementar de esa manera ya que autamticamente el onclcik lo devuelve con un evento, y el increment no debe recibir esto */}
    </>
  )
}


