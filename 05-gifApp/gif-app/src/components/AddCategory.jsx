import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('Megamente');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
         //TRAEMOS EL VALOR EXACTO DEL INPUT AL MOMENTO DE CAMBIAR Y LO ASIGNAMOS AL USESTATE
    };

    const onSubmit = (event) => {
        event.preventDefault(); //EVITAMOS QUE SE NOS RECARGUE LA PAGINA
        //VERIFICAMOS ANTES DE AÑADIR QUE NO SEA UN ELEMENTO VACIO:
        if(inputValue.trim().length === 0){
            return; //Si esta vacio nos salims
        }
        //setCategories( categorie => [inputValue, ...categorie]) //cogemos el estado inicial de categories y con un callback lo modificamos añadiendo lo nuevo
        onNewCategory(inputValue.trim())
        setInputValue(''); //Reseteamos el input para que siga apareciendo vacio al volver a introducir algo nuevo
        
    };

  return (
    <form onSubmit={(event) => onSubmit(event)}> {/**Al Hacer SUBMIT, SE EXTRAE EL EVENTO Y SE LLAMA LA FUNCION ONSUBMIT*/}
        <input type="text" placeholder="Buscar gif" value={inputValue} onChange={(event)=> onInputChange(event)}/>
    </form>//Se mete todo en el formulario para detectar cuando el usuario da click 

  )//ACA ESTAMOS DANDO UN VALOR POR DEFECTO CON EL VALUE, PERO YA ESTE VALOR QUEDARIA GUARDADO POR DEFECTO EN EL INPUT Y NO SE PODRIA CAMBIAR
  //POR ENDE LLAMAMOS EL EVENTO ONCHANGE, Y CAPTURAMOS EL EVENTO DE CUANDO ESTE INPUT CAMBIA, LUEGO LLAMAMOS A UNA FUNCION QUE MODIFICA EL INPUTVALUE
  //Y LE PASAMOS EL EVENTO   !!!!EXPLICACION DEL INPUT
  
}
