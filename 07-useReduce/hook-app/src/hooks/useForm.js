import { useState } from "react";


export const useForm = (initialForm = {}) => { //SE  CREA PARA QUE SE PUEDA RECIBIR CUALQUIER TIPO DE DATO

    const [form, setForm]= useState(initialForm)
    //{     username: '',
    //     email: '',
    //     password :''
    // }
    

         //desestructuramos el evento para acceder directamente al name y value
    const onChange = ({target}) => {
        const {name, value} = target; //EXTRAEMOS ESTOS VALORES DEL EVENTO
        //LLAMAMOS AL SET DEL USESTATE, Y DE ESTA MANERA PODEMOS SETEAR EL VALOR DESEADO POR MEDIO DEL NOMBRE

        setForm({...form, [name]: value}) //SETEAMOS EL NUEVO VALOR AL FORM,  los corchetes nos permiten indicar que la llave del objeto a modificar va a ser variable
    } 
    return {
        form,
        onChange,
        setForm
    }
}
