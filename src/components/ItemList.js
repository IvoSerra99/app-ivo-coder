import React from 'react'
import CustomProvider from './CustomProvider'
import { Item } from './Item'

export const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map((producto) => {
            return (
              <>
              <Item producto = {producto} key= {producto.id}/>
              <CustomProvider producto = {producto} key={producto}/>
              </>
            )
        })}
    </div>
  )
}
