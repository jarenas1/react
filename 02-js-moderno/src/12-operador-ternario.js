//OPERADOR TERMARIO

//ESTO ES UNA FORMA CORTA DE DEVOLVER UNA CONDICION

const activo = true;
// let message = " ";

// //FORMA NORMAL:

// if(activo){
//     message = "Activo";
// } else {
//     message = "Desactivado";
// }


//FORMA TESA

const mensaje = (activo)?"activo": "inactivo"; //SE PONE ENTRE PARENTESIS LA CONDICION A EVALUAR Y LUEGO DEL ?, SE PONE LO QUE PASA SI ESTA ES VDADERA, Y LUEGO DE LOS 2 PUNTOS SE PONE LO QUE PASA SI ESTA ES FALSA


//SI DESEAMOS QUE PASE SALGO SOLO SI LA CONDICION ES VERDADERA Y SI NO QUE NO SE DEVUELVA NADA:

const mensaje2 = activo && "activo";  //SI ES VERDADERO SE CUMPLEN AMBOS YA QUE EL STRING SIEMPRE SE VA A TOMAR COMO VERDADER