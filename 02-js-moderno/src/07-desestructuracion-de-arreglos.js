//DESESTRUCTURACION DE OARREGLOS, ESTE FUNCIONA PARA ESTAR EVITANDO USAR LOS CORCHETES

const person = ["Juan", 30, "Calle 123", 1234];

const [a1, a2, a3, a4] = person; //ESTO FUNCIONA CON LAS POSICIONES, ENTONCES SI PONEMOS UNA SOLA COSA, VA A SACAR LA PRIMERA COSA DEL ARRAY

//SI DESEAMOS LLAMAR SOLO LA TERCERA COSA, DEBEMOS DEJAR ESPACIOS VACION INDICANDOLOS POR MEDIO DE ,

const [, , b3] = person;

console.log(a1, a2, a3, a4);

//EJERCICIO

const useState = (value)=>{
    return [value, () => {"Hi"}]; }//TENEMOS UN ARRAY CON UN VALOR Y UNA FUNCION, VAMOS A MOSTRAR CADA UNO

    const [name,hi]= useState("Juan");

    console.log(name);
    hi();
    