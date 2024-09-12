//CREAMOS LA LISTA DE TAREAS
const initialState = [{
    id:1,
    todo: "salir a morirme",
    done: false
}]

//CREAMOS EL REDUCER
const todoReducer = (state = initialState, action = {}) => { //pasamos el estado y el action, el cual indica al reducer como queremos que cambie el estado

    //VERIFICAMOS QUE SE DESEA HACER POR MEDIO DE L ACTION
    if(action.type === "ADD TODO"){
        return [...state, action.payload]; //AGREGAMOS EL TODO AL FINAL DE LA LISTA en una nueva lista para no mutar la original
    }

    return state; //SIEMPRE SE DEVUELVE UN STATE
}

let todos =  todoReducer();

//DEBEMOS ENVIAR ESTO AL TODOREDUCE PARA QUE SE AÑADA A LA LISTA
const newTodo={
    id:2,
    todo: "comer",
    done: false
}

//CREAMOS LA ACCION
const addTodoAction={
    type: "ADD TODO", //mensaje que deseemos poner
    payload: newTodo //pasamos el nuevo todo que deseamos añadir
}

//AÑADIMOS
todos =  todoReducer(todos, addTodoAction);

console.log(todos);
