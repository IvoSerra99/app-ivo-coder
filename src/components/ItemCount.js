import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useCarrito } from './CustomProvider'

export const ItemCount = () => {
    const [counter,setCounter] = useState(1)
    const valorDelContexto = useCarrito()
    

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
  return (
    <>
    <Button onClick={handleSumar} variant="primary">Añadir al carrito</Button>
    <p>Cantidad : {sumaTotal}</p>
    <Button onClick={handleRestar} variant="primary">Restar del carrito</Button>
    </>
  )
}
export default ItemCount
