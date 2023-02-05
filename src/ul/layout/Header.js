import { Link } from "react-router-dom"
import NavBar from "../../components/NavBar"

const Header = () => {
    return (
        <>
        <header className="main-header">
        <Link to={"/"}><img alt="logo de marca" src="/logo-header.svg"/></Link>
        <NavBar/>
        </header>
        </>
    )
}
export default Header