import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [form, setForm]= useState({
        username: 'juan',
        email: 'juan@gmail.com',
    })

    const {username, email} = form //SACAMOS LO DEL FORM Y LO DESESTRUCTURAMOS

         //desestructuramos el evento para acceder directamente al name y value
    const onChange = ({target}) => {
        const {name, value} = target; //EXTRAEMOS ESTOS VALORES DEL EVENTO
        //LLAMAMOS AL SET DEL USESTATE, Y DE ESTA MANERA PODEMOS SETEAR EL VALOR DESEADO POR MEDIO DEL NOMBRE

        setForm({...form, [name]: value}) //SETEAMOS EL NUEVO VALOR AL FORM,  los corchetes nos permiten indicar que la llave del objeto a modificar va a ser variable
    } 

    useEffect( ()=>{
        console.log("called");
    },[]);

    // useEffect( ()=>{
    //     console.log("form changed", form);
    // },[form]);

    useEffect( ()=>{
        console.log("email changed", email);
    },[email]); 


  return (
    <>
        <h1>Simple form</h1>

        <input type="text" className='form-control'  placeholder='Username' name='username' value={username} onChange={(event)=>onChange(event)}/> {/*SE INDICA QUE CUANDO CAMBIE SE PASE EL EVENT A LA FUNCION DE CAMBIAR */ }

        <input type="email" className='form-control mt-3'  placeholder='email' name='email' value={email} onChange={(event)=>onChange(event)}/>

        {
           (username === "juan1") && <Message/> 
        }
        {/*SE LLAMA LA MISMA FUNCION EN AMBOS IMPUTS YA QUE EL EVENTO TAMBIEN CONTIENE INFORMACION DEL NOMBRE DEL INPUT AL CUAL PERTENECE */}
        
        
    </>
  )
}


