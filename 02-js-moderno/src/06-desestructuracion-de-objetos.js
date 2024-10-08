//DESESTRUCTURACION DE OBJETOS
//CONSISTE EN UNA FORMA MAS SENCILLA DE ACCEDER A LOS VALORES DE UN OBJETO, EVITANDO ASI LA RUTA USANDO .

const person = {
    name: "Juan",
    age: 30,
    address: {
        street: "Calle 123",
        number: 1234
    }
};

//VAMOS A SACAR LOS VALORES QUE DESEEMOS DE ESTE OBJETO, ESTOS VALORES LOS DEBEMOS PONER DENTRO DE LA LLAVE, SI TENEMOS UNA VARIABLE YA CREADA CON ALGUNO
//DE LOS NOMBRE ES MUY SENCILLO, SIMPLEMENTE DEBEMOS PONER NOMBREATTT:NEWNAME, Y ASI LE DAREMOS UN VALOR A ESE ATRIBUTO

//EJ:

const { name:name1, age } = person; //SE TOMAN LOS VALORES DE name Y age DEL OBJETO, PERO SUPONEMOS QUE NAME YA ESTA CREADA POR LO QUE CAMBIAMOS SU VAKIR

console.log(name, age); //SE MUESTRAN LOS VALORES



//EJ 2 en una funcion

const returnPerson = ({ name:name2, age, status = "active"}) =>{ //SE EXTRAERA TODO ESTO DE UN OBJETO ENTRANTE Y SE CREARA STATUS = ACTIVE
    console.log(name2, age, status);
    
}

//SI EL OBJETO TIENE OTROS OBJETOS DENTRO, COMO ES EL CASO PODEMOS HACER LO SIGUIENTE

const returnPerson1 = ({ name:name2, age, adress:{street,number}}) =>{ //SACAMOS DE ADRESS LOS 2 VALORES QUE ESTABAN DENTRO
    console.log(name2, age, street,number);
    
}