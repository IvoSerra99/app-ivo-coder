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
              <CustomProvider productos = {productos} key={productos.id}/>
              </>
            )
        })}
    </div>
  )
}
