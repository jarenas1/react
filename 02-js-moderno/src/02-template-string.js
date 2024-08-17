//STRING TEMPLATE

//CONTACETNAR 2 CADENAS

const nombre = "Juan";
const apellido = "Arenas"

const fullName = nombre + " " + apellido; //ESTA FORMA ESTA BIEN, PERO LA FORMA CORRECTA ES LA SIGUIENTE

const fullName2 = `${nombre} ${apellido}`; //ESTA ES LA FORMA CORRECTA DE CONCATENAR, ESTO SON LOS TEMPLATE STRING

//DENTRO DE LAS {} PUEDO LLAMAR VARIABLES, OPERACIONES, FUNCIONES, ETC.. 

function saludar(fullName2){
    return `HOLA ${fullName2}`
}

console.log(`voy a saludar ${saludar(fullName2)}`);

