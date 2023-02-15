import { useCarrito } from "../../components/CartContext"


const Footer = () => {
  const valorDelContexto = useCarrito()
  console.log(valorDelContexto)
  return (
    <>
    
    <footer className="main-footer">
    {valorDelContexto.totalProductos}
    footer
    </footer>
    </>
  )
}
export default Footer

