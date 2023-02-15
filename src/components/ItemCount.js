import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useCarrito } from './CartContext'


export const ItemCount = (producto, onAdd, stock) => {
    const [counter,setCounter] = useState(1)
    const {addItem} = useCarrito()
    
    

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
    //const handleCounter = () => {
    //  agregarProducto(counter,stock)
    //}
  return (
    <>
    <Button onClick={handleSumar} variant="primary">Añadir al carrito</Button>
    <p>Cantidad : {counter}</p>
    <Button onClick={handleRestar} variant="primary">Restar del carrito</Button>
    <Button onClick={onAdd} variant="primary">Total Productos</Button>
    </>
  )
}
export default ItemCount
