console.log("Hola mundo");

//VARIABLES Y CONSTANTEs    const no se puede modificar

let name = "juan";
const lastName ="Arenas";

console.log(name, lastName);

//Estas variables tiene un scope, que es como una especie de acance. Esto lo vemos cuando declaramos una variable global y dentro de una estructura 
//o funcion le ponemos un valor, EL VALOR ASIGNADO DENTRO DE LA ESTRUCTURA SOLO SERA VALIDO MIENTRAS ESTEMOS DENTRO DE ESTA, si salimos de esta el valor
//de la variable sera el declarado globalmente, se debe poner el let donde modificamos de nuevo la variable, ya que si no se pone se va a modificar la variable
//globalmente y no localmente

let numero = 10;

if(true){
    let numero = 8
    console.log(numero); //va a mostrar 8
}

console.log(numero); // muestra 10



