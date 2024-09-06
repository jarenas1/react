import React from "react";
import ReactDOM from "react-dom/client";
//IMPORTO LA FUNCION
import { App , FirstApp} from "./HelloWorldApp";
import{counterApp} from "./CounterApp"
//LLAMAMOS AL CSS QUE SE APLICARA A TODO LO QUE EL MAIN RENDERICE
import './styles.css';


//RENDERIZAMOS EN UN ELEMENTO CON ID ROOT

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App /> {/* LLAMADA A LA FUNCION APP */}
    </React.StrictMode>
)


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp title = "props soy un props" /> {/* LLAMADA A LA FUNCION APP Y PASAMOS VALOR DE ATRIBUTOS*/}
    </React.StrictMode>
)


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <counterApp value = {123} /> {/* LLAMADA A LA FUNCION APP Y PASAMOS VALOR DE ATRIBUTOS*/}
    </React.StrictMode>
)