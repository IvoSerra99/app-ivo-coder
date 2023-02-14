import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCarrito } from './CustomProvider'
//import { db } from './firebase'

const CartWidget = () => {
  const valorDelContexto = useCarrito()
  
  return (
    <>
    <NavLink to={"/"}>
    <img alt='imagen de carrito' src='/carrito.jfif'/>
    </NavLink>
    {valorDelContexto.totalProductos}
    </>
  )
}

export default CartWidget