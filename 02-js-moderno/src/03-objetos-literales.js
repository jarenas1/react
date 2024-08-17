//OBJETOS LITERALES

/*EN JS CADA QUE VEMOS {} SIGNIFICA QUE ES UN OBJETO, EL CUAL PPODEMOS ABRIR Y TIENE COSAS ADENTRO, ESTOS TRABAJAN CON PARES DE VALORES, KEY:VALUE
Y PODRMOS ACCEDER A ESTAS LLAVES POR MEDIO DE UNA RUTA CREA POR ., PODEMOS CREAR VARIOS PARES DE VALORES DENTRO DE UN OBJETO, LOS CUALES DEBERAN
IR SEPARADS POR UNA , AL FINAL. DENTRO DE UN OBJETO PUEDEN HABER OTROS OBJETOS U ARRAYS*/

const person = {
    name:"Juan",
    apellido:"Arenas",
    direccion:{
        calle:"Calle 123",
        numero:[1,2,3,4,5,6]
    }
}

console.log(person.name);//aceeder a nombre


//TAMBIEN PODEMOS CREAR UN OBJETO POR FUERA DE ESTE, PARA PODER VER EL NOMBRE DEL OBJETO 
console.log({
    person: person
});


//DEBEMOS TENER CUIDADO CON LO SIGUIENTE, Y ES QUE ESTO NO ASIGNA A LA VARIABLE LAS PROPIEDADES EL MOMENTO, SI NO QUE ASIGNA SU ESPACIO EN MEMORIA, POR
//ENDE SON EL MISMO OBJETO CON VALORES DISTINTOS

const person2 = person;
person2.apellido = "Garcia"; //EL APELLIDO SE CAMBIO EN AMBOS OBJETOS

console.log(person.apellido);//se muestra Garcia



//PARA PODER COPIAR LOS VALORES DE UN OBJETO A OTRO CORRECTAMENTE USAMOS ...OBJECT, QUE EXTRAE LOS VALORES DE UN OBJETO

const person3 = {...person};
person3.apellido = "Perez"; //EL APELLIDO SE CAMBIO SOLO EN person3

console.log(person.apellido);//se muestra Garcia