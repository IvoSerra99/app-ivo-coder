import React from 'react'
import { useState } from 'react'
import { Button } from 'bootstrap'

export const ItemCount = () => {
    const [counter,setCounter] = useState(1)
    const handleSumar = () => {
        setCounter(counter + 1)
    }
    const handleRestar = () => {
        setCounter (counter - 1)
    }
  return (
    <>
    <Button  variant="secondary">Añadir al carrito</Button>
    <p>Cantidad : {counter}</p>
    <Button  variant="secondary">Restar del carrito</Button>
    </>
  )
}
