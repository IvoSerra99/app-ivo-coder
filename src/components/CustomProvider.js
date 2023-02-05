import {createContext, useContext} from 'react'

const contexto = createContext()
const Provider = contexto.Provider
export const useCarrito = () => {
  const valorDelContexto = useContext(contexto)
  return valorDelContexto
}
const CustomProvider = ({children}) => {

    const valorDelContexto = {
        carrito: [],
        totalProductos: 0,
        
    }
  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}
export default CustomProvider