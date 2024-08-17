//ARREGLOS

//UN ARREGLOS SON UNA SERIE DE VALORES QUE SE GUARDAN EN UNA COLECCON ORDENADA, DONDE CADA VALOR TIENE UNA POSICION FIJA  

const numeros = [1,2,3];
//numero.push(1) LE AGREGO UN 1 AL FINAL


//ENN ESTE CASO AL IGUAL QUE CON LOS OBJETOS, SI QUEREMOS COPIAR UN ARREGLO NO DEBEMOS HACER ESTO YA QUE SE VA ES A COPIAR EL ESPACION EN MEMORIA

const numeros1 = numeros; //SI MODIFICAMOS ALGO EN UNO SE MODIFICA EN EL OTRO

//FORMA CORRECTA

const numeros2 = [...numeros]; //CON EL SPREAD OPERATOR HACEMOS UNA COPIA DE LOS VALORES

numeros2.push(4);

console.log(numeros); //[1,2,3]


//metodos de los arrays ejemplo MAP: este sirve para tomar cada valor de un objeto, modificarlo y devolverlo

const numerosPor2 = numeros.map(function(numero){
    return numero * 2;
}) //(numero) es el que va a iterar y en cada iteracion va a tomar un numero como un foreach
