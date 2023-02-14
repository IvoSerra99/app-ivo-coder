import {createContext, useContext, useState} from 'react'

const contexto = createContext()
const Provider = contexto.Provider
export const useCarrito = () => {
  const valorDelContexto = useContext(contexto)
  return valorDelContexto
}
const CustomProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([])
    const [totalProductos, setTotalProductos] = useState (0)
    const [counter, setCounter] = useState(1)
    const handleSumar = () => {
      if (counter < 20){
        setCounter(counter + 1)
        
    }
    }
    const handleRestar = () => {
      if (counter > 1){
        setCounter(counter - 1)
    }
    }



    const valorDelContexto = {
        carrito: carrito,
        setCarrito: setCarrito,
        totalProductos: totalProductos,
        setTotalProductos: setTotalProductos 
    }

  return (
    <Provider value={valorDelContexto}>
        {children}
    </Provider>
  )
}
export default CustomProvider