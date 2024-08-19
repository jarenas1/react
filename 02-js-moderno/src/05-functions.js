//UNA FUNCION ES UNA CAJA QUE RECIBE ALGO, LO MODIFICA Y LO DEVUELVE, PARA CREAR UNA FUNCION SE PUEDE CREAR DE 3 FORMAS QUE VEREMOS ABAJO

function saludar(name){
    return `Hola ${name}!`;
}


const saludar = function (name){
    return `Hola ${name}!`;
}



const saludar =  (name) => {
    return `Hola ${name}!`;
}

//TAMBIEN PODEMOS HACER DIRECTAMENTE UN RETURN EN LAS ARROW FUNCTIONS SIN LA PALABRA RETUNR

const saludar =  (name) => `Hola ${name}!`;

//SI DESEAMOS DEVOLVER UN OBJETO DEBE IR ENTRE PARENTESIS

const user = (name)=>(
    {
        name: name,
        lastname : "Arenas"
    }
)

//pasar esto a fincion flecha que retorne un objeto implicito

function getUser(name){
    return {
        id:A123,
        name: name
    }
}

const getUser = (name) => ({
    id: A123,
    name: name
})


