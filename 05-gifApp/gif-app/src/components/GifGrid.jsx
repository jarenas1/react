
import { useEffect, useState } from "react"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
export const GifGrid = ({category}) => {

    const {images, loading} = useFetchGifs(category)
    console.log(loading);
    
    
  return (
    <>
        <h3>{category}</h3>
        {
            loading ? (<h5>Carganding......</h5>) : null
        }
        <div className="card-grid">
            {images.map(image =>{
                return <GifItem key={image.id} image = {image}/> //LLAMAMOS EL COMPONENTE Y LE DAMOS SU KEY  Y PASAMOS LA DATA COMPLETA
                
            })}
        </div>
    </>
  )
}
