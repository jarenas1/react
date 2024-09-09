import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//rafc + tab CREA TODO ESTO
export const GifExpertApp = () => {

    //CREAREMOS UN HOOK PARA RENDERIZAR EL COMPONENTE CADA QUE SE CAMBIE EL BUSCADOR
    const [categories  , setCategories] = useState(["One piece"]);

  
    const onAddCategory = (newCategory) =>{

      //VERIFICAMOS QUE LA CATEGORIA NO ESTE ANTES DE AÑADIRLA
      if (categories.includes(newCategory)){
        return; //si esta se sale de la funcion
      }
      setCategories([newCategory, ...categories]);
    }
  return (
    <>
    {/*TITULO*/ }
        <h1>GifExpertApp</h1>

        {/*BUSCADOR*< SE TARE DE OTRO ARCHIVO*/ }
        <AddCategory 
          onNewCategory = {(event)=>onAddCategory(event)}
          // setCategories = {setCategories}
        />

      
            {categories.map(category =>{
                return (<GifGrid key={category} category={category}/>)  //KEY ES UNA PROPIEDAD QUE ES NECESARIA PARA QUE REACT SEPA QUE CADA ELEMENTO ES DIFERENTE Y LOS RE-RENDERICE CORRECTAMENTE.
 
            })}
    </>
  )
}


