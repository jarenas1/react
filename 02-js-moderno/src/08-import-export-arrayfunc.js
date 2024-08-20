//IMPORTAMOS LOS DATOS DE LOS HERORES DE TAPA

import {heroes} from './08-data'

//METODOS DE ARRAYS

//FIND NOS PERMITE BUSCAR UN ELEMENTO CON UNA CONDICION DENTRO DE UN ARRAY

const findById = (id)=> {
    return heroes.find((heroe) =>{ //EL FIND VA A ITERAR CADA ELEMENTO DEL ARRAY Y LE VA A DAR EL VALOR DE CADA HEROE, A ESTO DEBEMOS METERE¿LE OTRA FUNCION PARA QUE SAQUE POR MEDIO DE UN CONDICIONAL LO QUE ESTAMOS BUSCANDO
        if(heroe.id == id){
            return true;
        }else{
            return false;
        }
    }
)}

//FORMA CORTA USANDO LO VISTO EN ARROW FUCTIONS

const findByIdCorto = (id)=> heroes.find((heroe) =>heroe.id == id); //ESTO VA A DEVOLVER TRUE O FALSE, POR ENDE NO HACE FALTA CONDICIONALES NI NADA



//filter, ESTE HACE LO MISMO QUE EL FIND, SOLO QUE NO DEVUELVE EL PRIMER ELEMENTO QUE ENCUENTRA SI NO QUE DEVUELVE TODOS LOS QUE ENCIENTRE

const getByOwner = (owner)=> heroes.filter((heroe)=>heroe.owner == owner);

