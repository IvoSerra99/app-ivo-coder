import  Footer  from "./Footer";
import  Header from "./Header"
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import CustomProvider from "../../components/CustomProvider";



const App = () => {
  return (
    <>
    <CustomProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </CustomProvider>
    </>
  )
}
export default App;
 