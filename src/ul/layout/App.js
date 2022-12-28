import  Footer  from "./Footer";
import  Header from "./Header"
import ItemListContainer from "../../components/ItemListContainer";
const App = () => {
  const greeting = true
  return (
    <>
    <Header/>
    <ItemListContainer greeting= {greeting} test= {true}/>
    <Footer/>
    </>
  )
}
export default App;
 