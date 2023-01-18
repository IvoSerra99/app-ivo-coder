import  Footer  from "./Footer";
import  Header from "./Header"
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App;
 