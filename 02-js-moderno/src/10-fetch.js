const KEY = "B8CCn0z3GozjaaX7cJY5yXeuezDpI2RP";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${KEY}`)

//AHORA COMO ESTO DEVUELVE UNA PROMESA:

// peticion.then(response =>{
//     //PASAMOS LA RESPUESTA DE JSON A JS
//     response.json().then(data =>{
//         console.log(data);
        
//     })
//     console.log(response);
    
// })

//HAREMOS MAS CORTA LA PROMESA(
peticion.then(response => response.json())
.then(({data})=>{//DESTRUCTURAMOS
    const {url} = data.images.original;  

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
}).catch(console.warn)