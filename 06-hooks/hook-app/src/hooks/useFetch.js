import { useEffect, useState } from "react"

const localCache = { }


export  const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: false,
        error: null
    })

    
    //INDICAMOS CON USEEFFECT, COMO SE RENDERIZARA Y CUANDO LA PETICION, SE RENDDERIZARA LA PETICION CADA QUE LA URL ENTRANTE CAMBIE
    useEffect(() => {
        getFetch();
    },[url]); //cargara cada que el usuario pase una nueva url
    //DEVOLVEMOS TODO LO QUE SE MANEJO EN EL USESTATE


        //CREAMOS UNA FUNCION PARA QUE CADA QUE EL USUARIO CAMBIE LA URL, EL ESTADO DE CARGANDO SE ACTIVE, Y SE PONGA LA DATA EN NULL HASTA QUE LLEGUE LA DATA
        const setLoading = () =>{
            setState({
                data: null,
                loading: true,
                hasError: false,
                error: null,
            })
        }       


    //CREAMOS UNA FUNCION PARA HACER LA PETICION HTTP
    const getFetch = async () => {

        //SETEAMOS EL CACHE EN EL OBJETO DEL USESTATE
        if(localCache[url]){
            console.log("ESTAMOS USANDO LE CACHE");
            setState({
                data: localCache[url],
                loading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        //ya que se hizo una nueva solicitud, modificamos el estado temporalmente
        setLoading();

        const response = await fetch(url)

        //VERIFICAR QUE SI SE REALIZO LA PETICION
        if (!response.ok) {
            setState({
                data: null,
                loading: false,
                hasError: true,
                error: new Error('Error fetching data'),
            });
            return; //si da error salimos de la funcion
        }

        const data = await response.json()
        //Modificamos todo lo que seria el useState si la peticion es exitosa
        setState({
            data : data,
            loading: false,
            hasError: false,
            error: null,
        });
        //SETEAMOS LA DATA EN EL LOCALCACHE}
        localCache[url] = data;
    }
    

  return{
    data : state.data,
    isLoading : state.loading,
    hasError : state.hasError,
  }

  
}


