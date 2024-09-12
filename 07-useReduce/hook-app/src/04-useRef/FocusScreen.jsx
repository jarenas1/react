import { useRef } from "react"

export const FocusScreen = () => {

    const ref = useRef( );

    const onClick = () => {
        //Cuando se presione el boton, se obtiene el control del input y se lo coloca en foco
        ref.current.focus(); //indicamos que vaya al valor actual del ref y le haga un focus, en este caso se jaria un focis al input
    }

  // Devuelve el JSX con el input y el botón

  return (
    <>
        <h1>FOCUS SCREEN</h1>
        <hr />

        <input ref={ref} className="form-control" type="text" placeholder="Ingrese su nombre" />

        <button onClick={onClick} className="btn btn-primary mt-4">Set focus</button> {/*indicamos que al ahce click se llame la funcion */}
    </>
  )
}


