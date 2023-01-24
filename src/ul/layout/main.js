import React from 'react'
import ItemListContainer from '../../components/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from '../../components/ItemDetailContainer'

export const Main = () => {
  return (
    <main>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoria' element={<ItemListContainer/>}/>
      <Route path='/products/:id' element={<ItemDetailContainer/>}/>
      <Route/>
    </Routes>
    </main>
  )
}
