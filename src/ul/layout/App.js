import  Footer  from "./Footer";
import  Header from "./Header"
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import CartContext from "../../components/CartContext";




const App = () => {
  return (
    <>
    <CartContext>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </CartContext>
    </>
  )
}
export default App;
 