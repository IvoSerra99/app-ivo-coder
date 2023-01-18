import React from 'react'
import ItemListContainer from '../../components/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from '../../components/ItemDetailContainer'

export const Main = () => {
  return (
    <main>
    <ItemListContainer/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
      <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
      <Route/>
    </Routes>
    </main>
  )
}
