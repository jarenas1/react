import { useEffect, useState } from "react"
import{getGifs} from "../helpers/getGifs"

export const useFetchGifs = (category) =>{

    const [images, setImages]= useState([]) //CREAMOS UN ARRAY INICIAL QUE POSTERIORMENTE SE LLENARA, Y CADA QUE LA API TENGA ALGO NUEVO SE RENDERIZARA EL COMPONENTE
    const [isLoading, setIsLoading] = useState(true) //INICIAMOS EL CARGANDO EN TRUE

    useEffect( () => {
        getGifs(category).then(newImages => {
            return (setImages(newImages),
        setIsLoading(false))
        })
    },[])

    return{
        images : images,
        loading:isLoading
    }
}