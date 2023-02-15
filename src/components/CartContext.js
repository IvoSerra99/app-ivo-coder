import {createContext, useContext, useState} from 'react'

const contexto = createContext()
const Provider = contexto.Provider
export const useCarrito = () => {
  const valorDelContexto = useContext(contexto)
  return valorDelContexto
}
const CustomProvider = ({children}, {productos}) => {
    const [carrito, setCarrito] = useState ([])
    const [totalProductos, setTotalProductos] = useState (0)
    
    const addItem = (count,producto) => {
      const copy = productos.map(productos => {
          if (productos.id === producto.id){
              return {...productos, cantidad: productos.cantidad + count}
          }
          return producto
          
      })}
      
    const valorDelContexto = {
        carrito: carrito,
        setCarrito: setCarrito,
        totalProductos: totalProductos,
        setTotalProductos: setTotalProductos,
        addItem: addItem
    }

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}
export default CustomProvider