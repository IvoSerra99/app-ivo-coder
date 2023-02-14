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
    
    const agregarProducto = (counter,producto) => {
      const copy = productos.map(productos => {
          if (productos.id === producto.id){
              return {...productos, cantidad: productos.cantidad + counter}
          }
          return producto
          
      })}
      
    const valorDelContexto = {
        carrito: carrito,
        setCarrito: setCarrito,
        totalProductos: totalProductos,
        setTotalProductos: setTotalProductos,
        agregarProducto: agregarProducto 
    }

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}
export default CustomProvider