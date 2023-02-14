import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useCarrito } from './CustomProvider'


export const ItemCount = (producto) => {
    const [counter,setCounter] = useState(1)
    const {agregarProducto} = useCarrito()
    
    

    const handleSumar = () => {
      if (counter < 20){
        setCounter(counter + 1)
        
    }
    }
    const handleRestar = () => {
      if (counter > 1){
        setCounter(counter - 1)
    }
    }
    const handleCounter = () => {
      agregarProducto(counter,producto)
  }
  return (
    <>
    <Button onClick={handleSumar} variant="primary">Añadir al carrito</Button>
    <p>Cantidad : {counter}</p>
    <Button onClick={handleRestar} variant="primary">Restar del carrito</Button>
    <Button onClick={handleCounter} variant="primary">Total Productos</Button>
    </>
  )
}
export default ItemCount
