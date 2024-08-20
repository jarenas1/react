//ASYNC AWAIT

//SIRVE PARA MANEJAR PETICIONES Y COSAS QUE SE DEBEN EJECUTAR ASINCRONAMENTE

//ASYNC HACE QUE UN A FUNCION DEVUELVA UNA PROMESA, EL AWAIT HACE QUE LO QUE ESTEMOS USANDO SEA ASINCRONO

//CREAREMOS UNA FUNCION QUE DEVUELVA UNA PROMESA, PODEMOS UNAR EL ASYNC SIN AWAIT MAS NO AL REVES

const getImage = async ()=>{
    return "http://localhost" //ESTO SE DEVUELVE COMO UNA PROMESA
}

getImage().then(console.log());

//EJERCICIO DE PROMESAS PERO CON ASYNC AWAIT

    // const KEY = "B8CCn0z3GozjaaX7cJY5yXeuezDpI2RP";

    // const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}`)

    // peticion.then(response => response.json())
    // .then(({data})=>{//DESTRUCTURAMOS
    //     const {url} = data.images.original;  

    //     const img = document.createElement('img');
    //     img.src = url;

    //     document.body.append(img);
    // }).catch(console.warn)

    const getImg = async()=>{
        const KEY = "B8CCn0z3GozjaaX7cJY5yXeuezDpI2RP";
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}`)
        const {data} = await peticion.json();

        const {url} = data.images.original;

        console.log(url);

        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
        
    }


