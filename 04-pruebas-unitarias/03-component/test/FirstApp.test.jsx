import { render } from "@testing-library/react"
import { FirstApp } from "../src/HelloWorldApp"

describe('Pruebas FirstApp', () => {
  
    test('debe hacer match con el snapshot ', () => {
        render(<FirstApp/>)
    })
    
})
