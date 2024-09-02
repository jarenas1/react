import React from "react";
import ReactDOM from "react-dom/client";
//IMPORTO LA FUNCION
import { App , FirstApp} from "./HelloWorldApp";

//RENDERIZAMOS EN UN ELEMENTO CON ID ROOT

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App /> {/* LLAMADA A LA FUNCION APP */}
    </React.StrictMode>
)


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp /> {/* LLAMADA A LA FUNCION APP */}
    </React.StrictMode>
)