import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map((item) => {
            return (
              <>
              <Item item = {item} key= {item.id}/>
              </>
            )
        })}
    </div>
  )
}
